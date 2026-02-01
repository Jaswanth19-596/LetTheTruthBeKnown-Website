import { useState } from 'react';
import PDFViewer from './PDFViewer';
import './Card.css';

const Card = ({ 
  image, 
  title, 
  description, 
  link, 
  linkText = 'Download PDF',
  icon,
  variant = 'default' // default, feature, resource
}) => {
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const isPdf = link && link.endsWith('.pdf');

  const handleView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowPdfViewer(true);
  };

  const handleDownload = (e) => {
    e.stopPropagation();
    const downloadLink = document.createElement('a');
    downloadLink.href = link;
    downloadLink.download = title || 'document.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // For PDF cards with image
  if (isPdf && image) {
    return (
      <>
        <div className={`resource-card ${variant} reveal pdf-card`}>
          <div className="resource-card-image" onClick={handleView}>
            <img src={image} alt={title} />
            <div className="card-shine"></div>
            <div className="card-overlay">
              <div className="view-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </div>
              <span>Click to View</span>
            </div>
          </div>
          <div className="resource-card-body">
            <h3 className="resource-card-title">{title}</h3>
            {description && (
              <p className="resource-card-description">{description}</p>
            )}
            <div className="pdf-button-group">
              <button className="pdf-btn view-btn" onClick={handleView}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                View
              </button>
              <button className="pdf-btn download-btn" onClick={handleDownload}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7,10 12,15 17,10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download
              </button>
            </div>
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
  }

  // Default card layout for non-PDF links
  return (
    <div className={`resource-card ${variant} reveal`}>
      {image && (
        <div className="resource-card-image">
          <img src={image} alt={title} />
          <div className="card-shine"></div>
          <div className="image-overlay"></div>
        </div>
      )}
      {icon && !image && (
        <div className="resource-card-icon">
          {icon}
        </div>
      )}
      <div className="resource-card-body">
        <h3 className="resource-card-title">{title}</h3>
        {description && (
          <p className="resource-card-description">{description}</p>
        )}
        {link && (
          <a 
            href={link} 
            target={isPdf ? '_blank' : '_self'}
            rel={isPdf ? 'noopener noreferrer' : undefined}
            className="resource-card-link"
          >
            {linkText}
            <span className="link-arrow">→</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;

