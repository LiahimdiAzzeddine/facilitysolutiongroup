import Hero from '../components/Hero';
import CompanyOverview from '../components/CompanyOverview';
import Services from '../components/Services';
import About from '../components/About';
import Features from '../components/Features';
import GMAO from '../components/GMAO';
import Team from '../components/Team';
import Clients from '../components/Clients';
import SEO from '../components/SEO';

function Home() {
  return (
    <>
      <SEO 
        title="Maintenance Multitechnique Tanger & Tétouan - Facility Solution Group"
        description="Facility Solution Group : Expert en maintenance multitechnique à Tanger et Tétouan. Climatisation CVC, froid industriel, électricité industrielle, courant faible. Intervention 24/7 dans la région Tanger-Tétouan-Al Hoceïma."
        keywords="maintenance multitechnique Tanger, climatisation Tanger, froid industriel Tanger, électricité Tanger, maintenance Tétouan, facility management Tanger, CVC Tanger, maintenance préventive Tanger, dépannage climatisation Tanger, nord maroc maintenance, facility solution group Tanger"
        url="https://facilitysolutiongroup.ma"
      />
      <Hero />
      <CompanyOverview />
      <About />
      <Services />
      <Features />
      <GMAO />
      {/* <Team /> */}
      <Clients />
    </>
  );
}

export default Home;
