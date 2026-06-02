import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './PDFViewer.css';

const PDFViewer = ({ pdfUrl, title, onClose }) => {

  // Lock body scroll when modal is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

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

  // Render via portal directly into document.body so no parent
  // stacking context (navbar, transforms, etc.) can clip the z-index
  return createPortal(
    <div
      className="pdf-viewer-backdrop"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="pdf-viewer-container" onClick={(e) => e.stopPropagation()}>
        {/* Header — always visible, never scrolls */}
        <div className="pdf-viewer-header">
          <h3 className="pdf-viewer-title">{title || 'PDF Document'}</h3>
          <div className="pdf-viewer-actions">
            <button className="pdf-action-btn download-btn" onClick={handleDownload}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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

        {/* PDF iframe */}
        <div className="pdf-viewer-content">
          <object
            data={pdfUrl}
            type="application/pdf"
            className="pdf-iframe"
          >
            <div className="pdf-fallback">
              <p>Your browser does not support viewing PDFs directly.</p>
              <a href={pdfUrl} download>Download the PDF</a>
            </div>
          </object>
        </div>
      </div>
    </div>,
    document.body   // ← portal target: bypasses ALL parent stacking contexts
  );
};

export default PDFViewer;
