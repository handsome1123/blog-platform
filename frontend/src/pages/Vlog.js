import { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import RelatedVlogs from '../components/RelatedVlogs';
import SocialShowcase from '../components/SocialShowcase';
import LatestVideo from '../components/LatestVideo';
import Footer from '../components/Footer';

const Vlog = () => {

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
      <Header />
      <HeroBanner data={data}/>
      <main>
        <LatestVideo data={data} />
        <RelatedVlogs />
        <SocialShowcase />
      </main>
      <Footer />
    </>
  );
};

export default Vlog;
