import { Link, useSearchParams } from 'react-router-dom';
import { useRateLimit } from '../context/RateLimitContext';
import { getAssetUrl, getOriginalAssetUrl } from '../config/assets';
import './TractLibrary.css';
import './StopTracts.css';

const StopTracts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { checkAndRegister } = useRateLimit();

  const languages = [
    { id: 'all', name: 'All Languages', code: 'ALL' },
    { id: 'english', name: 'English', code: 'EN' },
    { id: 'swahili', name: 'Swahili', code: 'SW' },
    { id: 'luo', name: 'Luo', code: 'LU' },
    { id: 'kalenjin', name: 'Kalenjin', code: 'KA' },
    { id: 'kisii', name: 'Kisii', code: 'KI' },
    { id: 'maasai', name: 'Maasai', code: 'MA' },
  ];

  const tracts = [
    {
      id: 1,
      language: 'english',
      title: 'STOP Tract - English',
      description: 'A direct Gospel message in English.',
      pdf: getAssetUrl('downloads/stop_tracts/english.pdf'),
    },
    {
      id: 2,
      language: 'swahili',
      title: 'STOP Tract - Swahili',
      description: 'Kiswahili version.',
      pdf: getAssetUrl('downloads/stop_tracts/swahili.pdf'),
    },
    {
      id: 3,
      language: 'luo',
      title: 'STOP Tract - Luo',
      description: 'Luo language version.',
      pdf: getAssetUrl('downloads/stop_tracts/luo.pdf'),
    },
    {
      id: 4,
      language: 'kalenjin',
      title: 'STOP Tract - Kalenjin',
      description: 'Kalenjin version.',
      pdf: getAssetUrl('downloads/stop_tracts/kalenjin.pdf'),
    },
    {
      id: 5,
      language: 'kisii',
      title: 'STOP Tract - Kisii',
      description: 'Kisii version.',
      pdf: getAssetUrl('downloads/stop_tracts/kisii.pdf'),
    },
    {
      id: 6,
      language: 'maasai',
      title: 'STOP Tract - Maasai',
      description: 'Maasai version.',
      pdf: getAssetUrl('downloads/stop_tracts/maasai.pdf'),
    },
  ];

  const activeLanguage = languages.some(
    ({ id }) => id === searchParams.get('language'),
  )
    ? searchParams.get('language')
    : 'all';
  const filteredTracts =
    activeLanguage === 'all'
      ? tracts
      : tracts.filter((tract) => tract.language === activeLanguage);
  const selectLanguage = (event) => {
    const language = event.target.value;
    setSearchParams(
      (params) => {
        if (language === 'all') params.delete('language');
        else params.set('language', language);
        return params;
      },
      { preventScrollReset: true },
    );
  };
  const checkPdfAccess = (event) => {
    if (!checkAndRegister('pdf_download')) event.preventDefault();
  };

  return (
    <div className="stop-tracts-page">
      <header className="tract-intro">
        <h1>STOP Tracts</h1>
        <p>
          A direct Gospel message designed for street evangelism. Choose a
          language to read on your phone, download a copy, or print a booklet to
          share.
        </p>
      </header>

      <section className="tract-library" aria-label="STOP tracts by language">
        <div className="tract-toolbar">
          <div>
            <h2>Choose your translation</h2>
            <p role="status">
              {filteredTracts.length}{' '}
              {filteredTracts.length === 1 ? 'translation' : 'translations'} ·
              PDFs open in a new tab
            </p>
          </div>
          <div className="tract-filter">
            <label htmlFor="stop-language">Language</label>
            <select
              id="stop-language"
              value={activeLanguage}
              onChange={selectLanguage}
              aria-controls="stop-tract-list"
            >
              {languages.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <ul className="tract-list" id="stop-tract-list">
          {filteredTracts.map((tract) => {
            const language = languages.find(
              ({ id }) => id === tract.language,
            ).name;
            return (
              <li className="tract-row" key={tract.id}>
                <div className="tract-details">
                  <span className="tract-language">{language}</span>
                  <h3>{tract.title}</h3>
                  <p>{tract.description}</p>
                </div>
                <div className="tract-actions">
                  <a
                    className="tract-read"
                    href={tract.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={checkPdfAccess}
                    aria-label={`Read ${language} STOP tract (PDF, opens in a new tab)`}
                  >
                    Read PDF <span aria-hidden="true">↗</span>
                  </a>
                  <a
                    className="tract-download"
                    href={tract.pdf}
                    download
                    onClick={checkPdfAccess}
                    aria-label={`Download ${language} STOP tract (PDF)`}
                  >
                    Download PDF
                  </a>
                  <a
                    className="tract-download tract-print"
                    href={getOriginalAssetUrl(
                      `downloads/stop_tracts/${tract.language}.pdf`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Original ${language} print layout (PDF, opens in a new tab)`}
                  >
                    Original print layout
                  </a>
                </div>
              </li>
            );
          })}
        </ul>

        {/* <section className="tract-guidance" aria-labelledby="stop-guidance-title">
          <h2 id="stop-guidance-title">Sharing these tracts</h2>
          <p>The bold STOP sign and short message are designed to start conversations about sin, judgment, and the need for a Saviour. Read together on a phone or share a printed copy.</p>
          <h3>Reading on your phone</h3>
          <p>Read PDF and Download PDF use the same four-page reading edition: front cover, pages 2 and 3, then the back.</p>
          <h3>Printing a booklet</h3>
          <p>Choose “Original print layout” for two landscape A4 sheets. Print double-sided, flip on the short edge, and fold in half. Test one copy before printing a batch.</p>
          <p>For printing permission or help, <Link to="/contact">contact us</Link>.</p>
        </section> */}
      </section>
    </div>
  );
};

export default StopTracts;
