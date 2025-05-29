import { useEffect, useState } from 'react';
import HeroBanner from '../components/HeroBanner';
import LatestVideo from '../components/LatestVideo';
import ContentPreview from '../components/ContentPreview';
import SocialShowcase from '../components/SocialShowcase';
import Footer from '../components/Footer';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/homepage') // Replace with your backend API
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error('Failed to load homepage data', err));
  }, []);

  if (!data) return <p>Loading homepage...</p>;

  return (
    <>
      <HeroBanner data={data} />
      <LatestVideo data={data} />
      <ContentPreview data={data} />
      <SocialShowcase data={data} />
      <Footer />
    </>
  );
}
