import os
import requests
import re
import time
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

# The full list extracted from your data
viewer_urls = [
    "https://letthetruthbknown.com/pdfviewer/gods-simple-plan-tract/",
    "https://letthetruthbknown.com/pdfviewer/mpango-rahisi-wa-mungu-kwa-wokovu/",
    "https://letthetruthbknown.com/pdfviewer/chenro-mar-nyasaye-mayot-mar-warruok/",
    "https://letthetruthbknown.com/pdfviewer/gods-simple-plan-tract-kikuyu/",
    "https://letthetruthbknown.com/pdfviewer/gods-simple-plan-tract-kamba/",
    "https://letthetruthbknown.com/pdfviewer/gods-simple-plan-tract-kalenjin/",
    "https://letthetruthbknown.com/pdfviewer/gods-simple-plan-tract-amharic/",
    "https://letthetruthbknown.com/pdfviewer/gods-simple-plan-tract-arabic/",
    "https://letthetruthbknown.com/pdfviewer/stop-tract-english/",
    "https://letthetruthbknown.com/pdfviewer/stop-tract-kalenjin/",
    "https://letthetruthbknown.com/pdfviewer/stop-tract-kisii/",
    "https://letthetruthbknown.com/pdfviewer/stop-tract-kiswahili/",
    "https://letthetruthbknown.com/pdfviewer/stop-tract-luo/",
    "https://letthetruthbknown.com/pdfviewer/stop-tract-maasai/",
    "https://letthetruthbknown.com/pdfviewer/abcs-of-christian-maturity-2/",
    "https://letthetruthbknown.com/pdfviewer/know-your-bible-better-new-revised/",
    "https://letthetruthbknown.com/pdfviewer/raising-prince-revised/",
    "https://letthetruthbknown.com/pdfviewer/lessons-on-tongues/",
    "https://letthetruthbknown.com/pdfviewer/lessons-on-tongues-second-edition/",
    "https://letthetruthbknown.com/pdfviewer/abcs-of-christian-maturity/",
    "https://letthetruthbknown.com/pdfviewer/answers-book-1-soul-winning-discipleship/",
    "https://letthetruthbknown.com/pdfviewer/answers-book-2-proofs-of-christ-the-bible-god/",
    "https://letthetruthbknown.com/pdfviewer/answers-book-3-church-issues/",
    "https://letthetruthbknown.com/pdfviewer/answers-book-4-christian-living/",
    "https://letthetruthbknown.com/pdfviewer/answers-book-5-false-doctrines-refuted/",
    "https://letthetruthbknown.com/pdfviewer/answers-book-6-false-religions/",
    "https://letthetruthbknown.com/pdfviewer/answers-book-7-important-sermons/",
    "https://letthetruthbknown.com/pdfviewer/gospel-tract-maasai/",
    "https://letthetruthbknown.com/pdfviewer/understanding-salvation/",
    "https://letthetruthbknown.com/pdfviewer/eternal-security/",
    "https://letthetruthbknown.com/pdfviewer/baptism/",
    "https://letthetruthbknown.com/pdfviewer/the-word-of-god/",
    "https://letthetruthbknown.com/pdfviewer/prayer/",
    "https://letthetruthbknown.com/pdfviewer/holy-spirit/",
    "https://letthetruthbknown.com/pdfviewer/witnessing-for-christ/",
    "https://letthetruthbknown.com/pdfviewer/new-testament-church/",
    "https://letthetruthbknown.com/pdfviewer/forgiveness/",
    "https://letthetruthbknown.com/pdfviewer/financial-stewardship/",
    "https://letthetruthbknown.com/pdfviewer/judgement-seat-of-christ/",
    "https://letthetruthbknown.com/pdfviewer/gods-will-for-your-life/",
    "https://letthetruthbknown.com/pdfviewer/grace/",
    "https://letthetruthbknown.com/pdfviewer/practical-christian-living/",
    "https://letthetruthbknown.com/pdfviewer/sanctification/",
    "https://letthetruthbknown.com/pdfviewer/victory-over-sin/",
    "https://letthetruthbknown.com/pdfviewer/jesus-christ/",
    "https://letthetruthbknown.com/pdfviewer/creation/",
    "https://letthetruthbknown.com/pdfviewer/spiritual-gift/",
    "https://letthetruthbknown.com/pdfviewer/our-spiritual/"
]

SAVE_DIR = "truth_ministry_pdfs"
if not os.path.exists(SAVE_DIR):
    os.makedirs(SAVE_DIR)

def create_session():
    """Create a session with retry strategy and longer timeouts"""
    session = requests.Session()
    
    # Configure retry strategy
    retry_strategy = Retry(
        total=3,  # Total number of retries
        backoff_factor=2,  # Wait 2, 4, 8 seconds between retries
        status_forcelist=[429, 500, 502, 503, 504],
        allowed_methods=["GET"]
    )
    
    adapter = HTTPAdapter(max_retries=retry_strategy)
    session.mount("http://", adapter)
    session.mount("https://", adapter)
    
    session.headers.update({
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36"
    })
    
    return session

def download_all_files():
    session = create_session()
    
    print(f"Starting download of {len(viewer_urls)} files...")
    
    success_count = 0
    failed_urls = []
    
    for i, v_url in enumerate(viewer_urls, 1):
        # Clean URL
        clean_v_url = v_url.split(' ')[0].strip()
        
        print(f"\n[{i}/{len(viewer_urls)}] Scanning: {clean_v_url}")
        
        try:
            # 1. Access the viewer page with longer timeout
            response = session.get(clean_v_url, timeout=60)
            
            if response.status_code != 200:
                print(f"   Failed to access page (Status: {response.status_code})")
                failed_urls.append(clean_v_url)
                continue
            
            # 2. Extract the actual PDF link using Regex
            match = re.search(r'fileUrl\s*=\s*["\'](https?://.*\.pdf)["\']', response.text)
            
            if match:
                pdf_link = match.group(1)
                filename = pdf_link.split('/')[-1]
                save_path = os.path.join(SAVE_DIR, filename)
                
                # Skip if already downloaded
                if os.path.exists(save_path):
                    print(f"   Already exists: {filename}")
                    success_count += 1
                    continue
                
                print(f"   Found PDF: {pdf_link}")
                print(f"   Downloading...")
                
                # 3. Download the actual PDF with longer timeout
                pdf_data = session.get(pdf_link, stream=True, timeout=120)
                
                if pdf_data.status_code == 200:
                    with open(save_path, 'wb') as f:
                        for chunk in pdf_data.iter_content(chunk_size=8192):
                            if chunk:
                                f.write(chunk)
                    
                    file_size = os.path.getsize(save_path) / 1024  # KB
                    print(f"   ✓ Success! Saved as: {filename} ({file_size:.1f} KB)")
                    success_count += 1
                else:
                    print(f"   Failed to download PDF (Status: {pdf_data.status_code})")
                    failed_urls.append(clean_v_url)
            else:
                print("   Could not find PDF link on page")
                failed_urls.append(clean_v_url)
                
        except requests.exceptions.Timeout:
            print(f"   Timeout error - server too slow")
            failed_urls.append(clean_v_url)
            
        except requests.exceptions.RequestException as e:
            print(f"   Request error: {e}")
            failed_urls.append(clean_v_url)
            
        except Exception as e:
            print(f"   Unexpected error: {e}")
            failed_urls.append(clean_v_url)
        
        # Add delay between requests to be polite
        time.sleep(2)
    
    # Summary
    print("\n" + "="*60)
    print(f"Download Summary:")
    print(f"  Total files: {len(viewer_urls)}")
    print(f"  Successfully downloaded: {success_count}")
    print(f"  Failed: {len(failed_urls)}")
    
    if failed_urls:
        print(f"\nFailed URLs:")
        for url in failed_urls:
            print(f"  - {url}")
    
    print("="*60)

if __name__ == "__main__":
    download_all_files()