import React from 'react';

const JoinUsSection = () => {
  return (
    <section className="join-us">
      <div className="container">
        <div className="join-content">
          <h2 data-lang="join-us">Join Our Journey</h2>
          <p data-lang="join-us-desc">
            We're always looking to connect with fellow Myanmar nationals abroad and those interested in our culture. Subscribe to our YouTube channel, follow us on social media, and be part of our growing community.
          </p>
          <div className="join-buttons">
            <a
              href="https://www.youtube.com"
              className="cta-button youtube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-youtube"></i> <span data-lang="subscribe-youtube">Subscribe on YouTube</span>
            </a>
            <a href="contact.html" className="cta-button">
              <i className="far fa-envelope"></i> <span data-lang="contact-us">Contact Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUsSection;
