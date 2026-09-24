import { useRateLimit } from '../context/RateLimitContext';
import './Card.css';

/**
 * Resource card with optional source-document cover.
 * For PDF links: renders View + Download buttons.
 * For external links: renders a single link.
 */
const Card = ({
  title,
  description,
  link,
  linkText = 'Learn More',
  icon,
  image,
  printLink,
  variant = 'default'
}) => {
  const { checkAndRegister } = useRateLimit();
  const isPdf = link && (link.endsWith('.pdf') || link.includes('.pdf'));

  const openInNewTab = (e) => {
    if (e) e.preventDefault();
    if (checkAndRegister('pdf_download')) {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };


  return (
    <>
      <div className={`resource-card ${variant} reveal`}>
        {image && <img className="resource-cover" src={image} alt={`${title} cover`} loading="lazy" />}
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
            /* PDF: View + Download — both open in a new tab (works on all devices) */
            <div className="pdf-button-group">
              <button className="pdf-btn view-btn" onClick={openInNewTab}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                Read PDF
              </button>
              <a className="pdf-btn download-btn" href={link} download onClick={(e) => { if (!checkAndRegister('pdf_download')) e.preventDefault(); }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download PDF
              </a>
              {printLink && <a className="pdf-btn" href={printLink} target="_blank" rel="noopener noreferrer">Original print layout</a>}
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


    </>
  );
};

export default Card;
