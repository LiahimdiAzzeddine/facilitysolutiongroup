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
        title="Accueil - Expert en Maintenance Multitechnique au Maroc"
        description="Facility Solution Group : Votre partenaire de confiance pour la maintenance multitechnique, climatisation, froid industriel, électricité et plomberie au Maroc. Solutions professionnelles et service de qualité."
        keywords="facility solution group, maintenance maroc, climatisation maroc, froid industriel maroc, électricité industrielle, plomberie professionnelle, facility management, maintenance préventive maroc, maintenance curative"
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
