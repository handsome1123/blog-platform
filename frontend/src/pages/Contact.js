import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import '../assets/css/style.css';
import { data } from 'react-router-dom';

const Contact = () => {
  return (
    <>
      <Header />
      <HeroBanner data={data} />
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
