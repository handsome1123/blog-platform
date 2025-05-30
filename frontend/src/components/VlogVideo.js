import React from 'react';

const VlogVideo = () => {
  return (
    <section class="vlog-details">
      <div class="container">
        <div class="video-container">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Vlog Video"
          ></iframe>
        </div>
        <div class="vlog-description">
          <h2>My Latest Adventure in the Mountains</h2>
          <p>
            Join me on this journey as I explore the breathtaking mountain views, hike through scenic trails,
            and enjoy some downtime in nature...
          </p>
        </div>
      </div>
    </section>
  );
};

export default VlogVideo;
