import { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import LatestVideo from '../components/LatestVideo';
import ContentPreview from '../components/ContentPreview'; // We'll create this
import SocialShowcase from '../components/SocialShowcase';
import Footer from '../components/Footer';


export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://blog-platform-lgg3.onrender.com/api/homepage') // Replace with your backend API
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error('Failed to load homepage data', err));
  }, []);

  if (!data) return <p>Loading homepage...</p>;

  return (
    <>
      <Header />
      <HeroBanner data={data} />
      <LatestVideo data={data} />
      <ContentPreview data={data} />
      <SocialShowcase data={data} />
      <Footer />
    </>
  );
}
