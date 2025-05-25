import React from 'react';
import ContentCard from './ContentCard';
import contentData from '../data/contentData'; // Import your data
import './../assets/css/style.css';

function ContentPreview() {
  return (
    <section className="content-preview">
      <div className="container">
        <h2 className="section-title" data-lang="discover">Discover More</h2>
        <div className="content-grid">
          {contentData.map((item, index) => (
            <ContentCard
              key={index} // In a real app, use a unique ID from your data
              image={item.image}
              altText={item.altText}
              type={item.type}
              title={item.title}
              description={item.description}
              link={item.link}
              linkText={item.linkText}
              isVideo={item.isVideo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContentPreview;