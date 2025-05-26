import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import '../assets/css/style.css';

const Contact = () => {
  return (
    <>
      <Header />
      <HeroBanner />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
