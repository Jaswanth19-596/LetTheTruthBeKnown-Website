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
  const isPdf = link && link.endsWith('.pdf');

  // For PDF downloads, wrap the whole card in an anchor
  if (isPdf && image) {
    return (
      <a 
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`resource-card ${variant} reveal`}
      >
        <div className="resource-card-image">
          <img src={image} alt={title} />
          <div className="card-shine"></div>
          <div className="card-overlay">
            <div className="download-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
            <span>{linkText}</span>
          </div>
        </div>
        <div className="resource-card-body">
          <h3 className="resource-card-title">{title}</h3>
          {description && (
            <p className="resource-card-description">{description}</p>
          )}
        </div>
      </a>
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
