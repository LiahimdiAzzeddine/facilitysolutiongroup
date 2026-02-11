import React from 'react';
import Hero from '../components/Hero';
import CompanyOverview from '../components/CompanyOverview';
import Services from '../components/Services';
import About from '../components/About';
import Features from '../components/Features';
import Clients from '../components/Clients';

function Home() {
  return (
    <>
      <Hero />
      <CompanyOverview />
      <Services />
      <About />
      <Features />
      <Clients />
    </>
  );
}

export default Home;
