"""Build A4 resource copies and accurate covers from verified ministry PDFs.
Usage: python scripts/prepare-resources.py /path/to/downloaded/downloads
Requires pypdf, Pillow and pdftoppm. Originals are retained at the CDN.
"""
from pathlib import Path
import sys, copy, json, subprocess, shutil
from pypdf import PdfReader, PdfWriter, Transformation
from pypdf.generic import RectangleObject
from PIL import Image

source = Path(sys.argv[1])
public = Path(__file__).resolve().parents[1] / 'public'
manifest_path = public/'resource-editions.json'
manifest = json.loads(manifest_path.read_text()) if manifest_path.exists() else {}
A4 = (595.2756, 841.8898)

def a4_page(writer, page, bounds=None):
    page = copy.copy(page)
    if page.rotation:
        page.transfer_rotation_to_content()
    box = bounds or tuple(float(v) for v in page.mediabox)
    left, bottom, right, top = box
    page.mediabox = RectangleObject(box)
    page.cropbox = RectangleObject(box)
    # merge_transformed_page clips to the trim box on older pypdf versions.
    page.trimbox = RectangleObject(box)
    width, height = right-left, top-bottom
    scale = min((A4[0]-36)/width, (A4[1]-36)/height)
    dx, dy = (A4[0]-width*scale)/2-left*scale, (A4[1]-height*scale)/2-bottom*scale
    dest = writer.add_blank_page(*A4)
    dest.merge_transformed_page(page, Transformation((scale,0,0,scale,dx,dy)))
    dest.compress_content_streams()

for path in sorted(source.rglob('*.pdf')):
    rel = path.relative_to(source)
    if len(sys.argv) > 2 and not rel.as_posix().startswith(sys.argv[2]):
        continue
    if rel.as_posix() in ['gospel_tracts/arabic.pdf', 'gospel_tracts/french.pdf']:
        continue # Arabic source is English; French endpoint returns 403.
    reader = PdfReader(path)
    is_stop = rel.parts[0] == 'stop_tracts'
    is_gospel = rel.parts[0] == 'gospel_tracts'
    if is_gospel:
        out = public/'downloads'/'a4'/rel
        out.parent.mkdir(parents=True,exist_ok=True)
        shutil.copy2(path,out)
        manifest['downloads/'+rel.as_posix()] = '/downloads/a4/'+rel.as_posix()
    if not is_gospel:
        writer = PdfWriter()
        if is_stop:
            # Printed outside: back | front. Inside: page 2 | page 3.
            for page_index, side in [(0,1),(1,0),(1,1),(0,0)]:
                page = reader.pages[page_index]
                l,b,r,t = map(float,page.mediabox); middle = (l+r)/2
                a4_page(writer,page,(middle if side else l,b,r if side else middle,t))
        else:
            for page in reader.pages:
                # Tongues has a Word review gutter. Keep lesson text, omit the
                # blank gutter and editorial comments on source pages 20 and 44.
                bounds = (10,120,240,485) if path.stem == 'lessons-on-tongues' else None
                a4_page(writer,page,bounds)
        writer.add_metadata({'/Title':path.stem.replace('-',' ').title(), '/Subject':'A4 reading edition; original content preserved'})
        out = public/'downloads'/'a4'/rel
        out.parent.mkdir(parents=True,exist_ok=True)
        with out.open('wb') as stream: writer.write(stream)
        manifest['downloads/'+rel.as_posix()] = '/downloads/a4/'+rel.as_posix()
        check=PdfReader(out)
        assert all(abs(float(p.mediabox.width)-A4[0])<.1 and abs(float(p.mediabox.height)-A4[1])<.1 for p in check.pages)
    if rel.parts[0] == 'discipleship' or rel.parts[0] == 'resources':
        coverpath = public/'covers'/rel.with_suffix('.png')
        coverpath.parent.mkdir(parents=True,exist_ok=True)
        subprocess.run(['pdftoppm','-f','1','-singlefile','-scale-to','900','-png',str(path),str(coverpath.with_suffix(''))],check=True,capture_output=True)
        im = Image.open(coverpath)
        if rel.parts[0]=='discipleship' and rel.parts[1]=='level3' and path.stem!='01-grace':
            im=im.crop((im.width//2,0,im.width,im.height))
        if path.stem=='lessons-on-tongues':
            im=im.crop((int(im.width*10/396),int(im.height*127/612),int(im.width*240/396),int(im.height*492/612)))
        im.thumbnail((480,700)); im.save(coverpath,optimize=True)

(public/'resource-editions.json').write_text(json.dumps(manifest,indent=2)+'\n')
config=public.parent/'src/config/resourceEditions.json'
config.write_text(json.dumps(manifest,indent=2)+'\n')
print(f'Prepared {len(manifest)} A4 editions and source-based covers.')
