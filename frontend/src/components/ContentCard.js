import React from 'react';
import { Link } from 'react-router-dom';

function ContentCard({ imageUrl, altText, type, title, description, link, linkText, isVideo }) {
  return (
    <div className="content-card">
      {imageUrl && <img src={imageUrl} alt={altText || title} className="content-image" />}
      <div className="content-info">
        {type && <span className="content-type">{type}</span>}
        <h3>{title}</h3>
        <p>{description}</p>
        {link && (
          <Link to={link} className="content-link">
            {linkText || 'Read More'}
          </Link>
        )}
        {isVideo && <span className="video-badge">🎥 Video</span>}
      </div>
    </div>
  );
}

export default ContentCard;
