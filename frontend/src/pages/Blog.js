import React from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import BlogCard from '../components/BlogCard';
import AboutUsSection from '../components/AboutUsSection';
import ContactSection from '../components/ContactSection';
import blogImage from '../assets/images/blog_post.png';
import Footer from '../components/Footer';

const Blog = () => {
  return (
    <div className="bg-gray-100 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <HeroBanner />
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Exploring Life Abroad in Thailand
        </h1>

        {[1, 2].map((row) => (
          <section key={row} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <BlogCard title="Latest Blogs" description="Blog post description or excerpt goes here..." image={blogImage} />
            <BlogCard title="Latest Vlogs" description="Vlog post description or excerpt goes here..." image={blogImage} />
          </section>
        ))}

        <AboutUsSection />
        <ContactSection />
      </main>
        <Footer />
    </div>
  );
};

export default Blog;
