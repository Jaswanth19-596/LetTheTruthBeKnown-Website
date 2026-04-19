import { useState } from 'react';
import PDFViewer from './PDFViewer';
import './Card.css';

/**
 * Universal resource card — no thumbnails.
 * For PDF links: renders View + Download buttons.
 * For external links: renders a single link.
 */
const Card = ({
  title,
  description,
  link,
  linkText = 'Learn More',
  icon,
  variant = 'default'
}) => {
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const isPdf = link && (link.endsWith('.pdf') || link.includes('.pdf'));

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = link;
    a.download = title || 'document.pdf';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <div className={`resource-card ${variant} reveal`}>
        {/* Optional icon (non-image decorative icon) */}
        {icon && (
          <div className="resource-card-icon">{icon}</div>
        )}

        <div className="resource-card-body">
          <h3 className="resource-card-title">{title}</h3>
          {description && (
            <p className="resource-card-description">{description}</p>
          )}

          {isPdf ? (
            /* PDF: View + Download */
            <div className="pdf-button-group">
              <button className="pdf-btn view-btn" onClick={() => setShowPdfViewer(true)}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                View
              </button>
              <button className="pdf-btn download-btn" onClick={handleDownload}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download
              </button>
            </div>
          ) : (
            /* External link */
            link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-card-link"
              >
                {linkText}
                <span className="link-arrow">→</span>
              </a>
            )
          )}
        </div>
      </div>

      {showPdfViewer && (
        <PDFViewer
          pdfUrl={link}
          title={title}
          onClose={() => setShowPdfViewer(false)}
        />
      )}
    </>
  );
};

export default Card;
