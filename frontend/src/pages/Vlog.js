import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import VlogVideo from '../components/VlogVideo';
import RelatedVlogs from '../components/RelatedVlogs';
import SocialShowcase from '../components/SocialShowcase';
import Footer from '../components/Footer';

const Vlog = () => {
  return (
    <>
      <Header />
      <HeroBanner
        title="Welcome to My Vlog"
        subtitle="Latest adventures and stories"
      />
      <main>
        <VlogVideo />
        <RelatedVlogs />
        <SocialShowcase />
      </main>
      <Footer />
    </>
  );
};

export default Vlog;
