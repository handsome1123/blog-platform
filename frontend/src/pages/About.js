// src/pages/About.js
import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import TeamSection from '../components/TeamSection';
import JoinUsSection from '../components/JoinUsSection';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <>
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <TeamSection />
        <JoinUsSection />
      </main>
      <Footer />
    </>
  );
};

export default About;
