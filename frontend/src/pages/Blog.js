import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';
import { data } from 'react-router-dom';
import BlogContent from '../components/BlogContent';
import SocialShowcase from '../components/SocialShowcase';

const Blog = () => {
  return (
    <>
      <Header />
      <main >
        <HeroBanner data={data} />
        <BlogContent/>
        <SocialShowcase data={data} />
      </main>
        <Footer />
    </>
  );
};

export default Blog;
