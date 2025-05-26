import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './../assets/css/style.css';

function ContentCard({ imageUrl, altText, type, title, content, link, linkText, isVideo }) {
  return (
    <div className="content-card">
      <div className={`card-image ${isVideo ? 'video-thumbnail' : ''}`}>
        <img src={imageUrl} alt={altText || title} />
        {isVideo && (
          <span className="play-icon">
            <FontAwesomeIcon icon={faPlay} />
          </span>
        )}
      </div>

      <div className="card-content">
  {type && <span className="content-type">{type}</span>}
  <h3>{title}</h3>
  <p>{content.length > 120 ? content.slice(0, 120) + "..." : content}</p>
  {link && (
    <Link to={link} className="read-more">
      {linkText || (isVideo ? 'Watch Now' : 'Read More')}
    </Link>
  )}
</div>

    </div>
  );
}

export default ContentCard;
