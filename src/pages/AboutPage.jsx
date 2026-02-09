import React from 'react';
import './AboutPage.css';

function AboutPage() {
  return (
    <div className="about-page">
      <div className="page-hero">
        <div className="container">
          <h1>À Propos de FSG</h1>
          <p>Votre partenaire de confiance pour tous vos besoins industriels</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="about-intro">
            <h2>FACILITY SOLUTION GROUP</h2>
            <p className="lead">
              Nous Opérons dans le Secteur Industrielle et Bâtiment, Offrant des Services de Rénovation, d'Agencement et d'Entretien.
            </p>
            <p>
              FSG Vous assure un service personnalisé et clé en main pour tous vos travaux. 
              Notre expertise et notre engagement envers l'excellence font de nous le partenaire idéal 
              pour vos projets industriels et de bâtiment.
            </p>
          </div>

          <div className="about-values">
            <h2>Nos Valeurs</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">🎯</div>
                <h3>Excellence</h3>
                <p>Nous visons l'excellence dans chaque projet, garantissant des résultats de haute qualité.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">🤝</div>
                <h3>Confiance</h3>
                <p>Votre fidélité est la preuve de notre expertise et de notre engagement.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">⚡</div>
                <h3>Réactivité</h3>
                <p>Assistance technique 24/7 pour répondre à vos urgences.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">✓</div>
                <h3>Conformité</h3>
                <p>Respect strict des normes et de votre cahier des charges.</p>
              </div>
            </div>
          </div>

          <div className="about-expertise">
            <h2>Notre Expertise</h2>
            <div className="expertise-content">
              <div className="expertise-text">
                <p>
                  Avec des années d'expérience dans le secteur industriel et du bâtiment, 
                  FSG s'est imposé comme un acteur majeur au Maroc. Notre équipe de professionnels 
                  qualifiés intervient sur tous types de projets, de l'installation à la maintenance.
                </p>
                <ul>
                  <li>Équipes techniques spécialisées et certifiées</li>
                  <li>Matériel de pointe et technologies modernes</li>
                  <li>Respect des délais et du budget</li>
                  <li>Service après-vente réactif</li>
                  <li>Conseils personnalisés</li>
                </ul>
              </div>
              <div className="expertise-stats">
                <div className="stat-item">
                  <div className="stat-number">24/7</div>
                  <div className="stat-label">Assistance</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Satisfaction</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">+10</div>
                  <div className="stat-label">Ans d'expérience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
