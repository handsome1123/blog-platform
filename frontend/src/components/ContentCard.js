import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './../assets/css/style.css';

function ContentCard({ imageUrl, altText, type, title, content, link, linkText, isVideo }) {
  return (
    <div class="content-card">
      <div class={`card-image ${isVideo ? 'video-thumbnail' : ''}`}>
        <img src={imageUrl} alt={altText || title} />
        {isVideo && (
          <span class="play-icon">
            <FontAwesomeIcon icon={faPlay} />
          </span>
        )}
      </div>

      <div class="card-content">
  {type && <span class="content-type">{type}</span>}
  <h3>{title}</h3>
  <p>{content.length > 120 ? content.slice(0, 120) + "..." : content}</p>
  {link && (
    <Link to={link} class="read-more">
      {linkText || (isVideo ? 'Watch Now' : 'Read More')}
    </Link>
  )}
</div>

    </div>
  );
}

export default ContentCard;
