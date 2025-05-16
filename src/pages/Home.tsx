import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Testimonials from '../components/home/Testimonials';
import CtaSection from '../components/home/CtaSection';

const Home: React.FC = () => {
  // Update document title when component mounts
  React.useEffect(() => {
    document.title = 'InteriorBlend - Creating Beautiful Spaces';
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <CtaSection />
    </>
  );
};

export default Home;