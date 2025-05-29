import React from 'react';
import './../assets/css/style.css';

export default function LatestVideo({ data }) {
  const youtubeUrl = data?.latestVideoUrl || '';
  
  // Convert to embed format
  const getEmbedUrl = (url) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu.be\/)([^&]+)/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : '';
  };

  return (
    <section id="latest-video" className="featured-video">
      <div className="container">
        <h2 className="section-title" data-lang="latest-episode">Latest Episode</h2>

        <div className="video-container">
          {youtubeUrl ? (
            <iframe
              src={getEmbedUrl(youtubeUrl)}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Latest Episode"
            />
          ) : (
            <p>No video available</p>
          )}
        </div>

        <div className="video-description">
          <h3 data-lang="video-title">{data?.contentPreview?.title}</h3>
          <p data-lang="video-description">{data?.contentPreview?.summary}</p>
        </div>

        <a href="https://www.youtube.com/@cantwait2say-d8p" className="cta-button youtube" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube"></i> <span data-lang="subscribe">Subscribe on YouTube</span>
        </a>
      </div>
    </section>
  );
}
