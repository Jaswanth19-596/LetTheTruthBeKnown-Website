import { Link, useSearchParams } from 'react-router-dom';
import { useRateLimit } from '../context/RateLimitContext';
import { getAssetUrl } from '../config/assets';
import './GospelTracts.css';
import './TractLibrary.css';

const GospelTracts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { checkAndRegister } = useRateLimit();

  const languages = [
    { id: 'all',      name: 'All Languages', code: 'ALL' },
    { id: 'english',  name: 'English',   code: 'EN' },
    { id: 'swahili',  name: 'Swahili',   code: 'SW' },
    { id: 'luo',      name: 'Luo',       code: 'LU' },
    { id: 'kikuyu',   name: 'Kikuyu',    code: 'KI' },
    { id: 'kalenjin', name: 'Kalenjin',  code: 'KA' },
    { id: 'arabic',   name: 'Arabic',    code: 'AR' },
    { id: 'amharic',  name: 'Amharic',   code: 'AM' },
    { id: 'maasai',   name: 'Maasai',    code: 'MA' },
    { id: 'kamba',    name: 'Kamba',     code: 'KM' },
    { id: 'french',   name: 'French',    code: 'FR' },
  ];

  const tracts = [
    { id: 1,  language: 'english',  title: "God's Simple Plan of Salvation", description: 'The Bible says there is only one way to Heaven. Jesus said: "I am the way, the truth, and the life: no man cometh unto the Father, but by me."', pdf: getAssetUrl("downloads/gospel_tracts/english.pdf") },
    { id: 2,  language: 'swahili',  title: 'Mpango Rahisi wa Mungu wa Wokovu', description: 'Biblia inasema kuna njia moja tu ya kwenda Mbinguni. Yesu alisema: "Mimi ndimi njia, na kweli, na uzima; mtu haji kwa Baba, ila kwa njia ya mimi."', pdf: getAssetUrl("downloads/gospel_tracts/swahili.pdf") },
    { id: 3,  language: 'french',   title: 'Le Plan Simple de Dieu pour le Salut', description: 'La Bible dit qu\'il n\'y a qu\'un seul chemin vers le Ciel. Jésus a dit: "Je suis le chemin, la vérité, et la vie. Nul ne vient au Père que par moi."', pdf: null },
    { id: 4,  language: 'luo',      title: "God's Simple Plan - Luo",      description: 'Luo language version for Kenya.',      pdf: getAssetUrl("downloads/gospel_tracts/luo.pdf") },
    { id: 5,  language: 'kikuyu',   title: "God's Simple Plan - Kikuyu",   description: 'Kikuyu language version for Kenya.',   pdf: getAssetUrl("downloads/gospel_tracts/kikuyu.pdf") },
    { id: 6,  language: 'kalenjin', title: "God's Simple Plan - Kalenjin", description: 'Kalenjin language version for Kenya.', pdf: getAssetUrl("downloads/gospel_tracts/kalenjin.pdf") },
    { id: 7,  language: 'arabic',   title: "God's Simple Plan - Arabic",   description: 'Arabic language version.',             pdf: null },
    { id: 8,  language: 'amharic',  title: "God's Simple Plan - Amharic",  description: 'Amharic language version for Ethiopia.',pdf: getAssetUrl("downloads/gospel_tracts/amharic.pdf") },
    { id: 9,  language: 'maasai',   title: "God's Simple Plan - Maasai",   description: 'Maasai language version for Kenya/Tanzania.', pdf: getAssetUrl("downloads/gospel_tracts/maasai.pdf") },
    { id: 10, language: 'kamba',    title: "God's Simple Plan - Kamba",    description: 'Kamba language version for Kenya.',   pdf: getAssetUrl("downloads/gospel_tracts/kamba.pdf") },
  ];

  const activeLanguage = languages.some(({ id }) => id === searchParams.get('language'))
    ? searchParams.get('language') : 'all';
  const filteredTracts = activeLanguage === 'all'
    ? tracts
    : tracts.filter(tract => tract.language === activeLanguage);

  const selectLanguage = (event) => {
    const language = event.target.value;
    setSearchParams((params) => {
      if (language === 'all') params.delete('language');
      else params.set('language', language);
      return params;
    }, { preventScrollReset: true });
  };
  const checkPdfAccess = (event) => {
    if (!checkAndRegister('pdf_download')) event.preventDefault();
  };

  return (
    <div className="gospel-tracts-page">
      <header className="tract-intro">
        <h1>Gospel Tracts</h1>
        <p>God’s Simple Plan of Salvation explains the Gospel of Jesus Christ and how to be saved. Choose a language to read on your phone or download a copy to share.</p>
      </header>

      <section className="tract-library" aria-label="Gospel tracts by language">
        <div className="tract-toolbar">
          <div>
            <h2>God’s Simple Plan of Salvation</h2>
            <p id="tract-results" role="status">{filteredTracts.length} {filteredTracts.length === 1 ? 'translation' : 'translations'} · PDFs open in a new tab</p>
          </div>
          <div className="tract-filter">
            <label htmlFor="tract-language">Language</label>
            <select id="tract-language" value={activeLanguage} onChange={selectLanguage} aria-controls="tract-list">
              {languages.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
            </select>
          </div>
        </div>

        <ul className="tract-list" id="tract-list">
          {filteredTracts.map(tract => {
            const language = languages.find(({ id }) => id === tract.language).name;
            return (
              <li className="tract-row" key={tract.id}>
                <div className="tract-details">
                  <span className="tract-language">{language}</span>
                  <h3>{tract.title}</h3>
                  <p>{tract.pdf ? tract.description : 'This translation is not yet available.'}</p>
                </div>
                {tract.pdf ? (
                  <div className="tract-actions">
                    <a className="tract-read" href={tract.pdf} target="_blank" rel="noopener noreferrer"
                      onClick={checkPdfAccess} aria-label={`Read ${language} tract (PDF, opens in a new tab)`}>Read PDF <span aria-hidden="true">↗</span></a>
                    <a className="tract-download" href={tract.pdf} download onClick={checkPdfAccess}
                      aria-label={`Download ${language} tract (PDF)`}>Download PDF</a>
                  </div>
                ) : <span className="tract-unavailable">Not yet available</span>}
              </li>
            );
          })}
        </ul>

        <section className="tract-guidance" aria-labelledby="tract-guidance-title">
          <h2 id="tract-guidance-title">Sharing these tracts</h2>
          <p>Read together on a phone or use a printed copy. Invite the person to read each Scripture passage, listen to their understanding, and talk through their questions using the Bible.</p>
          <p>Allow time to work through the Gospel message. If they wish to receive Christ, use the tract’s explanation and Scripture to guide them.</p>
          <h3>Printing a copy</h3>
          <p>Download the A4 reading edition and print pages in order using “Fit to printable area”. For permission and a booklet printing layout, <Link to="/contact">contact us</Link>. Ask your printer to prepare a proof copy before printing booklets.</p>
        </section>
      </section>
    </div>
  );
};

export default GospelTracts;
