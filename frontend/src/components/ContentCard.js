import React from 'react';
import './../assets/css/style.css';

function ContentCard({ image, altText, type, title, description, link, linkText, isVideo }) {
  return (
    <div className="content-card">
      <div className={`card-image ${isVideo ? 'video-thumbnail' : ''}`}>
        <img src={image} alt={altText} />
        {isVideo && <span className="play-icon"><i className="fas fa-play"></i></span>}
      </div>
      <div className="card-content">
        <span className="content-type">{type}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="read-more">{linkText}</a>
      </div>
    </div>
  );
}

export default ContentCard;