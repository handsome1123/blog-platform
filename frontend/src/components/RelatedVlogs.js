import React from 'react';
import vlogs from '../data/vlogsData';

const RelatedVlogs = () => {
  return (
    <section className="related-vlogs">
      <div className="container">
        <h2 className="section-title">Related Vlogs</h2>
        <div className="content-grid">
          {vlogs.map((vlog, index) => (
            <div className="content-card" key={index}>
              <div className="card-image">
                <img src={vlog.image} alt={vlog.title} />
              </div>
              <div className="card-content">
                <h3>{vlog.title}</h3>
                <p>{vlog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedVlogs;
