// This is the entry component for the landing page of the application.
// It sequentially renders the primary sections of the landing page including Hero, Features, Product, Pricing, Faq, and Footer components.

import Features from './Features';
import FeaturedOn from './FeaturedOn';
import Footer from './Footer';
import Faq from './Faq';
import Hero from './Hero';
import Pricing from './Pricing';
import WorkFlow from './WorkFlow';
import Navbar from './Navbar';

export default async function LandingPage1() {
  return (
    <>
      <Navbar />
      <div className='bg-[#031614]'>
        <div className='max-w-5xl mx-auto pt-20'>
          <Hero />
          <FeaturedOn />
          <Features />
          <WorkFlow />
          <Pricing />
          <Faq />
          <Footer />
        </div>
      </div>
    </>
  );
}
