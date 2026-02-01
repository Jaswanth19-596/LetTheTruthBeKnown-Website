import { useState } from 'react';
import './PDFViewer.css';

const PDFViewer = ({ pdfUrl, title, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Use Google Docs Viewer to embed external PDFs
  const getViewerUrl = (url) => {
    // Encode the PDF URL for use with Google Docs Viewer
    const encodedUrl = encodeURIComponent(url);
    return `https://docs.google.com/viewer?url=${encodedUrl}&embedded=true`;
  };

  const handleDownload = () => {
    // Open in new tab to trigger download
    window.open(pdfUrl, '_blank');
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('pdf-viewer-backdrop')) {
      onClose();
    }
  };

  return (
    <div className="pdf-viewer-backdrop" onClick={handleBackdropClick}>
      <div className="pdf-viewer-container">
        <div className="pdf-viewer-header">
          <h3 className="pdf-viewer-title">{title || 'PDF Document'}</h3>
          <div className="pdf-viewer-actions">
            <button className="pdf-action-btn download-btn" onClick={handleDownload}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download
            </button>
            <button className="pdf-action-btn close-btn" onClick={onClose}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>
        </div>
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

