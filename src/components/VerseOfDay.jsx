import { useState, useEffect } from 'react';
import './VerseOfDay.css';

const VerseOfDay = () => {
  const [verse, setVerse] = useState(null);
  const [copied, setCopied] = useState(false);

  // Collection of Bible verses with translations
  const verses = [
    { text: "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.", reference: "John 3:16" },
    { text: "Trust in the LORD with all thine heart; and lean not unto thine own understanding.", reference: "Proverbs 3:5" },
    { text: "I can do all things through Christ which strengtheneth me.", reference: "Philippians 4:13" },
    { text: "The LORD is my shepherd; I shall not want.", reference: "Psalm 23:1" },
    { text: "Be strong and of a good courage; be not afraid, neither be thou dismayed: for the LORD thy God is with thee whithersoever thou goest.", reference: "Joshua 1:9" },
    { text: "And we know that all things work together for good to them that love God, to them who are the called according to his purpose.", reference: "Romans 8:28" },
    { text: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.", reference: "Matthew 6:33" }
  ];

  useEffect(() => {
    // Get a verse based on the day of the year
    const dayOfYear = Math.floor((new Date() - new Date(new Date().getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    const verseIndex = dayOfYear % verses.length;
    setVerse(verses[verseIndex]);
  }, []);

  const handleCopy = async () => {
    if (!verse) return;
    const textToCopy = `"${verse.text}" - ${verse.reference}`;
    
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
    const textToShare = `"${verse.text}" - ${verse.reference}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Verse of the Day',
          text: textToShare,
          url: window.location.href
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };

  if (!verse) return null;

  return (
    <section className="verse-section">
      <div className="container">
        <div className="verse-card">
          <div className="verse-header">
            <span className="verse-badge">Verse of the Day</span>
          </div>
          <blockquote className="verse-text">
            "{verse.text}"
          </blockquote>
          <cite className="verse-reference">— {verse.reference}</cite>
          
          <div className="verse-actions">
            <button className="verse-btn" onClick={handleCopy}>
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button className="verse-btn" onClick={handleShare}>
              Share
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VerseOfDay;
