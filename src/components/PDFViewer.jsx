import { useState, useEffect } from 'react';
import './PDFViewer.css';

const PDFViewer = ({ pdfUrl, title, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Lock body scroll when modal is open — prevents page scrolling behind modal
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const getViewerUrl = (url) => {
    const encodedUrl = encodeURIComponent(url);
    return `https://docs.google.com/viewer?url=${encodedUrl}&embedded=true`;
  };

  const handleDownload = () => {
    const a = document.createElement('a');
    a.href = pdfUrl;
    a.download = title || 'document.pdf';
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="pdf-viewer-backdrop" onClick={handleBackdropClick}>
      <div className="pdf-viewer-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="pdf-viewer-header">
          <h3 className="pdf-viewer-title">{title || 'PDF Document'}</h3>
          <div className="pdf-viewer-actions">
            <button className="pdf-action-btn download-btn" onClick={handleDownload}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download
            </button>
            <button className="pdf-action-btn close-btn" onClick={onClose} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>

        {/* PDF Content */}
        <div className="pdf-viewer-content">
          {isLoading && (
            <div className="pdf-loading">
              <div className="pdf-spinner"></div>
              <p>Loading PDF...</p>
            </div>
          )}
          <iframe
            src={getViewerUrl(pdfUrl)}
            title={title}
            className="pdf-iframe"
            onLoad={() => setIsLoading(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default PDFViewer;
