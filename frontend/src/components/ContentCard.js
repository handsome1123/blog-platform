import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import './../assets/css/style.css';

function ContentCard({ imageUrl, altText, type, title, content, link, linkText, isVideo, videoUrl }) {
  // Convert standard YouTube URL to embed format
  const getYoutubeEmbedUrl = (url) => {
    if (!url) return '';
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  };

  return (
    <div className="content-card">
      <div className={`card-image ${isVideo ? 'video-thumbnail' : ''}`}>
        {isVideo && videoUrl ? (
          <iframe
            width="100%"
            height="215"
            src={getYoutubeEmbedUrl(videoUrl)}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="video-iframe"
          ></iframe>
        ) : (
          imageUrl && <img src={imageUrl} alt={altText || title} />
        )}
        {isVideo && !videoUrl && (
          <span className="play-icon">
            <FontAwesomeIcon icon={faPlay} />
          </span>
        )}
      </div>

      <div className="card-content">
        {type && <span className="content-type">{type}</span>}
        <h3>{title}</h3>
        <p>{content && content.length > 120 ? content.slice(0, 120) + "..." : content}</p>
        {link && (
          <Link to={link} className="read-more">
            {linkText || (isVideo ? 'Watch Now' : 'Read More')}
          </Link>
        )}
      </div>
    </div>
  );
}

// Optional: Default props to avoid undefined issues
ContentCard.defaultProps = {
  altText: '',
  linkText: '',
  isVideo: false,
  videoUrl: '',
};

export default ContentCard;
