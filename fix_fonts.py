import os
import re

src_dir = '/Users/jaswanth/mydocs/myprojects/letthetruthbknown/src'

heading_fonts = [
    r"font-family:\s*'Cinzel',\s*'Lora',\s*'Times New Roman',\s*serif;",
    r"font-family:\s*'Cinzel',\s*'Lora',\s*serif;",
    r"font-family:\s*'Cinzel',\s*'Palatino Linotype',\s*serif;",
    r"font-family:\s*'Cinzel',\s*serif;",
    r"font-family:\s*'Outfit',\s*'Inter',\s*sans-serif;",
    r"font-family:\s*'Outfit',\s*sans-serif;"
]

body_fonts = [
    r"font-family:\s*'Times New Roman',\s*Georgia,\s*serif;",
    r"font-family:\s*'Times New Roman',\s*serif;",
    r"font-family:\s*'Lora',\s*'Georgia',\s*serif;",
    r"font-family:\s*'Inter',\s*sans-serif;"
]

for root, dirs, files in os.walk(src_dir):
    for file in files:
        if file.endswith('.css'):
            path = os.path.join(root, file)
            # Skip index.css
            if 'index.css' in path:
                continue
                
            with open(path, 'r') as f:
                content = f.read()
                
            new_content = content
            for p in heading_fonts:
                new_content = re.sub(p, "font-family: var(--font-family-heading);", new_content)
            for p in body_fonts:
                new_content = re.sub(p, "font-family: var(--font-family);", new_content)
                
            if new_content != content:
                with open(path, 'w') as f:
                    f.write(new_content)
                print(f"Updated {path}")

