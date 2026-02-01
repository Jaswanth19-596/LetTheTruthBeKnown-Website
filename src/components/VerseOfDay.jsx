import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './VerseOfDay.css';
import WhatsAppShare from './WhatsAppShare';

const VerseOfDay = () => {
  const { t, language } = useLanguage();
  const [verse, setVerse] = useState(null);
  const [copied, setCopied] = useState(false);

  // Collection of Bible verses with translations
  const verses = [
    {
      en: { text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", reference: "John 3:16" },
      sw: { text: "Kwa maana jinsi hii Mungu aliupenda ulimwengu, hata akamtoa Mwanawe pekee, ili kila mtu amwaminiye asipotee, bali awe na uzima wa milele.", reference: "Yohana 3:16" },
      fr: { text: "Car Dieu a tant aimé le monde qu'il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu'il ait la vie éternelle.", reference: "Jean 3:16" }
    },
    {
      en: { text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.", reference: "Proverbs 3:5" },
      sw: { text: "Mtumaini Bwana kwa moyo wako wote, wala usizitegemee akili zako mwenyewe.", reference: "Mithali 3:5" },
      fr: { text: "Confie-toi en l'Éternel de tout ton cœur, Et ne t'appuie pas sur ta sagesse.", reference: "Proverbes 3:5" }
    },
    {
      en: { text: "I can do all things through Christ which strengtheneth me.", reference: "Philippians 4:13" },
      sw: { text: "Nayaweza mambo yote katika Yeye anitiaye nguvu.", reference: "Wafilipi 4:13" },
      fr: { text: "Je puis tout par celui qui me fortifie.", reference: "Philippiens 4:13" }
    },
    {
      en: { text: "The LORD is my shepherd; I shall not want.", reference: "Psalm 23:1" },
      sw: { text: "Bwana ndiye mchungaji wangu, sitapungukiwa na kitu.", reference: "Zaburi 23:1" },
      fr: { text: "L'Éternel est mon berger: je ne manquerai de rien.", reference: "Psaume 23:1" }
    },
    {
      en: { text: "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.", reference: "Joshua 1:9" },
      sw: { text: "Je! sikukuamuru? Uwe hodari na shujaa; usiogope wala usifadhaike; kwa kuwa Bwana, Mungu wako, yu pamoja nawe kila uendako.", reference: "Yoshua 1:9" },
      fr: { text: "Ne t'ai-je pas donné cet ordre: Fortifie-toi et prends courage? Ne t'effraie point et ne t'épouvante point, car l'Éternel, ton Dieu, est avec toi dans tout ce que tu entreprendras.", reference: "Josué 1:9" }
    },
    {
      en: { text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", reference: "Romans 8:28" },
      sw: { text: "Nasi twajua ya kuwa katika mambo yote Mungu hufanya kazi pamoja na wale wampendao katika kuwapatia mema.", reference: "Warumi 8:28" },
      fr: { text: "Nous savons, du reste, que toutes choses concourent au bien de ceux qui aiment Dieu.", reference: "Romains 8:28" }
    },
    {
      en: { text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.", reference: "Matthew 6:33" },
      sw: { text: "Bali utafuteni kwanza ufalme wake na haki yake, na hayo yote mtazidishiwa.", reference: "Mathayo 6:33" },
      fr: { text: "Cherchez premièrement le royaume et la justice de Dieu; et toutes ces choses vous seront données par-dessus.", reference: "Matthieu 6:33" }
    }
  ];

  useEffect(() => {
    // Get a verse based on the day of the year
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const verseIndex = dayOfYear % verses.length;
    setVerse(verses[verseIndex]);
  }, []);

  const handleCopy = async () => {
    if (!verse) return;
    const currentVerse = verse[language] || verse.en;
    const textToCopy = `"${currentVerse.text}" - ${currentVerse.reference}`;
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleShare = async () => {
    if (!verse) return;
    const currentVerse = verse[language] || verse.en;
    const textToShare = `"${currentVerse.text}" - ${currentVerse.reference}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: t('verseOfDay.title'),
          text: textToShare,
          url: window.location.href
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  if (!verse) return null;

  const currentVerse = verse[language] || verse.en;

  return (
    <section className="verse-section">
      <div className="container">
        <div className="verse-card">
          <div className="verse-header">
            <span className="verse-badge">{t('verseOfDay.title')}</span>
          </div>
          <blockquote className="verse-text">
            "{currentVerse.text}"
          </blockquote>
          <cite className="verse-reference">— {currentVerse.reference}</cite>
          
          <div className="verse-actions">
            <button className="verse-btn" onClick={handleCopy}>
              {copied ? t('common.copied') : t('common.copy')}
            </button>
            <button className="verse-btn" onClick={handleShare}>
              {t('common.share')}
            </button>
          </div>

          <WhatsAppShare verse={currentVerse.text} reference={currentVerse.reference} />
        </div>
      </div>
    </section>
  );
};

export default VerseOfDay;
