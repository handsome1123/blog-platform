
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import LatestVideo from '../components/LatestVideo';
import ContentPreview from '../components/ContentPreview'; // We'll create this
import SocialShowcase from '../components/SocialShowcase';
import Footer from '../components/Footer';


export default function Home() {

  return (
    <>
      <Header />
      <HeroBanner />
      <LatestVideo />
      <ContentPreview />
      <SocialShowcase />
      <Footer />
    </>
  );
}
