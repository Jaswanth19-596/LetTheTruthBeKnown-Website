# April 10, 2026 corrections — implementation and source audit

Implemented September 13, 2026 against the supplied correction document. Existing uncommitted work was retained. This is a local implementation; nothing has been deployed or purchased.

## Implemented

- Truth-first home page and search/social titles. “Our Resources” uses the requested Salvation/Word of God description.
- Full Introduction, God’s Will and His Promise, and Thank You sections appear before the Gospel video. Scripture references stay on one line. Thank You uses “I hope you enjoy our site”.
- Pastor John Wilkerson’s Gospel video is on the home page after the introduction, with a direct YouTube link. Reading tracts is offered alongside watching the video.
- Peter Morris’s documentary moved out of the opening Gospel section to near the end of About. The requested shorter replacement has not been supplied.
- Intro uses the existing earth video slowed to 70 seconds, playing once, with the first 70 seconds of the supplied piano recording. Music fades during the last five seconds. Skip fades and clears timers/audio. Audio is enabled by an accessible user-operated button.
- Reading voice defaults to 0.8 speed, offers Slower/Gentle/Normal, and prefers named male English system voices when installed. This is browser speech, not a professional recording or an imitation of Pastor Wilkerson.
- Eight verified Gospel translations use their existing 16 sequential A4 reading pages: English, Swahili, Luo, Kikuyu, Kalenjin, Amharic, Maasai, Kamba. Local copies make download links work directly.
- Arabic and French remain listed with an honest unavailable message and no misleading download button. Arabic's hosted PDF is entirely English; French returned HTTP 403.
- Phone-first instructions explain reading passages together, asking what they mean, allowing time, and requesting print permission/layouts. Removed unverified universal trifold instructions.
- Six STOP tracts now have four sequential A4 reading pages (front, inside left, inside right, back). Original landscape A4 printing files remain separate. STOP sign contains only STOP! in scarlet; Tracts appears below.
- All 20 discipleship lesson cards have locally rendered covers from their actual PDFs. For Level 3 folded covers, the front half is used. Lesson names match source contents, including Sanctification, Victory Over Sin, Practical Christian Living, and Jesus Christ. Counts are 4/8/8. Reading and download actions are visible without hover.
- Converted 38 non-A4 or imposed resources to A4 reading editions, preserving content and source page orientation. Eight Gospel files were already A4 and are copied unchanged. All 46 available reading/download PDFs now resolve through `src/config/resourceEditions.json`.
- Answer Books open the complete PDFs directly, avoiding the former viewer/expand route. All seven source PDFs returned HTTP 200.
- Lessons on Tongues contains 96 pages. Cropped excessive margins and the editorial review-comment gutter (source pages 20 and 44) before scaling to A4 so the lesson text fills the page. Removed the inaccurate “content pending delivery” description; the supplied book is by Pastor Ted Speer.
- Additional resource covers now display. Raising Prince uses its actual title page, with its name correctly spelled.
- Quiz includes complete KJV quotations, including previously shortened 1 Peter 2:24 and 1 John 5:13; preserves full John 3:16. Added KJV guidance and 2 Peter 1:20, numeric score, and a highlighted Refer Gospel Tracts link below Take Again that selects English.
- Notice board and Brandon series area retained; Brandon materials explicitly await permission and files.
- Added an Acknowledgements section near the end of About and a footer link that scrolls to it.
- Giving page and footer link cover ministry, website maintenance, and projects. Contact remains the available giving route. Removed the unsubstantiated “100% goes to outreach” statement.

## Still dependent on supplied material or account setup

| Request | What is needed |
|---|---|
| Approximately 35 Scripture-based FAQs | “Questions and Answers by topic – 2” was not present in the project or available text attachments. Existing FAQs remain; the requested theological answers were not invented. |
| Brandon Heselschwerdt Salvation, Tongues, Soul Winning, TAN, Discipleship | Publication permission and actual files. |
| Missions instead of Creation | The hosted Level 3 Book 6 is Creation on its cover, interior lesson, and catalogue. Supply the intended Missions PDF; renaming this file would misrepresent its contents. |
| Arabic/French and any additional Gospel languages | Correct source translations. The current Arabic PDF contains English; French is inaccessible. |
| Colored Raising Prince cover | The available PDF starts with a monochrome title page; the requested colored artwork is absent. |
| Full Gospel transcript | YouTube transcript export reports no transcript available for Trw5FVDQmiA. The site links to YouTube with conditional transcript instructions. Supply an approved transcript or recording suitable for transcription. |
| Second Gospel video | YouTube oEmbed returns “Not Found” for 2GqTEl3zSx4. That does not establish whether it is private or deleted. Supply a working replacement or original. |
| Professional introduction and narration | Existing media now has correct duration/playback behavior. A new professionally produced earth/sun film and recorded compassionate male narration require production assets/vendor choice; no subscription was purchased. |
| Short Peter Morris biography | The original documentary is retained on About; a 3–4 minute approved edit is needed. |
| Final acknowledgements | A short general thank-you is in place; named credits need the promised acknowledgement file. |
| Online donation checkout | Ministry-approved payment provider/account and destination are needed. Existing Contact Us to Give remains active. |
| Notice board content | Section exists; articles, photos, events, and ministry recognition need actual content. |

## Questions in the correction document

The previous Verse of the Day used seven verses embedded directly in the code, selected by day of year; it did not fetch an external feed. The previous WhatsApp action opened a composer containing the verse text and `https://letthetruthbknown.com`, and required the reader to choose a recipient/send. Its image action downloaded a separate status image. Both components had already been removed in the working tree before this task; they were not reintroduced.

A4 is suitable for the stated printing workflow in Kenya. All current reading/download editions use A4, with original STOP print layouts separately available. Booklet imposition and permissions are distinct from page size; reading editions should be printed sequentially or handed to a printer with the required layout instructions.

## Maintenance and verification

`python scripts/prepare-resources.py /path/to/verified/downloads` regenerates A4 editions and covers from verified source PDFs. Requires pypdf, Pillow, and Poppler. An optional second argument filters a subdirectory. It preserves rotations, clips before scaling, and does not rasterize document text. Source originals remain on CloudFront; the generated editions are bundled in `public/downloads/a4` and covers in `public/covers`.

Production build passed. Browser checks confirmed introduction content, lesson level switching, a 10/10 quiz result, and the English tract result link. All 46 PDFs (2,646 pages) passed A4 dimension checks, and all six STOP editions contain four pages. PDF checks also cover sequential STOP layout; rendered samples reviewed for cropping, rotation, and legibility. Full lint and production build pass. Fixed the navigation render/reset issues and the scroll-reveal dependency warning found during final checks. A 589px-wide browser pass confirmed no horizontal overflow on Home or About and confirmed mobile-menu route closure. A dedicated 390px viewport override was unavailable, so that exact phone width remains unverified. Final verification completed September 14, 2026.
