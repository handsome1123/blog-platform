// src/components/AboutStory.js
import React from 'react';

const AboutStory = () => {
  return (
    <section class="about-story">
            <div class="container">
                <div class="about-content">
                    <div class="about-image">
                        <img src="assets/images/about-us.jpg" alt="Founders of Can'twait2say" />
                    </div>
                    <div class="about-text">
                        <h2 data-lang="who-we-are">Who We Are</h2>
                        <p data-lang="about-intro">
                            We are a group of passionate Myanmar expats living in Thailand who wanted to create a digital bridge between our homeland culture and our new lives abroad. Each of us brings a unique perspective – from culinary expertise to historical knowledge, artistic talents to travel experience.
                        </p>
                        
                        <h2 data-lang="our-mission">Our Mission</h2>
                        <p data-lang="mission-text">
                            Through Can'twait2say, we aim to preserve and share Myanmar's rich cultural heritage with the world while documenting our experiences adapting to life in Thailand. We believe that understanding cultural roots helps build stronger identities in new environments.
                        </p>
                        
                        <h2 data-lang="what-we-cover">What We Cover</h2>
                        <div class="content-categories">
                            <div class="category-item">
                                <div class="category-icon">
                                    <i class="fas fa-landmark"></i>
                                </div>
                                <h3 data-lang="history">History & Heritage</h3>
                                <p data-lang="history-desc">Exploring Myanmar's rich historical sites, traditions, and cultural practices that have shaped our identity.</p>
                            </div>
                            
                            <div class="category-item">
                                <div class="category-icon">
                                    <i class="fas fa-utensils"></i>
                                </div>
                                <h3 data-lang="food">Food & Cuisine</h3>
                                <p data-lang="food-desc">Discovering Burmese culinary traditions, both authentic recipes and fusion creations in Thailand.</p>
                            </div>
                            
                            <div class="category-item">
                                <div class="category-icon">
                                    <i class="fas fa-suitcase"></i>
                                </div>
                                <h3 data-lang="travel">Travel & Experience</h3>
                                <p data-lang="travel-desc">Sharing our journeys between Myanmar and Thailand, highlighting cultural similarities and differences.</p>
                            </div>
                            
                            <div class="category-item">
                                <div class="category-icon">
                                    <i class="fas fa-users"></i>
                                </div>
                                <h3 data-lang="community">Community Life</h3>
                                <p data-lang="community-desc">Documenting how Myanmar communities maintain their cultural identity while embracing new experiences abroad.</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="our-journey">
                    <h2 data-lang="journey-title">Our Journey So Far</h2>
                    <div class="timeline">
                        <div class="timeline-item">
                            <div class="timeline-date">2020</div>
                            <div class="timeline-content">
                                <h3 data-lang="journey-start">The Beginning</h3>
                                <p data-lang="journey-start-desc">Our small group started documenting personal experiences of Myanmar culture in Thailand through social media.</p>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-date">2021</div>
                            <div class="timeline-content">
                                <h3 data-lang="youtube-launch">YouTube Channel Launch</h3>
                                <p data-lang="youtube-launch-desc">We launched our YouTube channel to reach a wider audience with video content exploring cultural connections.</p>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-date">2022</div>
                            <div class="timeline-content">
                                <h3 data-lang="community-growth">Community Growth</h3>
                                <p data-lang="community-growth-desc">Our audience expanded beyond Myanmar expats, attracting viewers interested in Southeast Asian cultures.</p>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-date">2023</div>
                            <div class="timeline-content">
                                <h3 data-lang="collaborations">Collaborations</h3>
                                <p data-lang="collaborations-desc">Partnered with other content creators and cultural organizations to expand our reach and content diversity.</p>
                            </div>
                        </div>
                        
                        <div class="timeline-item">
                            <div class="timeline-date">2025</div>
                            <div class="timeline-content">
                                <h3 data-lang="website-launch">Website Launch</h3>
                                <p data-lang="website-launch-desc">Launched this website to create a dedicated hub for all our content and build a stronger community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  );
};

export default AboutStory;
