import React from 'react';
import './RealisationsPage.css';

function RealisationsPage() {
  const projects = [
    {
      title: 'Installation CVC - Zone Industrielle',
      category: 'CVC',
      description: 'Installation complète d\'un système de climatisation pour un complexe industriel de 5000m².',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/service-cvc.jpg'
    },
    {
      title: 'Électrification - Usine de Production',
      category: 'Électricité',
      description: 'Mise en place du réseau électrique complet pour une nouvelle usine de production.',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/service-elec.jpg'
    },
    {
      title: 'Chambre Froide - Entrepôt Logistique',
      category: 'Froid Industriel',
      description: 'Installation de chambres froides pour un entrepôt logistique de 3000m².',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/service-froid.jpg'
    },
    {
      title: 'Réseau de Gaz - Site Industriel',
      category: 'Gaz & Fluides',
      description: 'Installation et mise en service d\'un réseau de gaz industriel.',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/service-gaz.jpg'
    },
    {
      title: 'Maintenance CVC - Centre Commercial',
      category: 'CVC',
      description: 'Contrat de maintenance annuelle pour un centre commercial.',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/about-cvc.jpg'
    },
    {
      title: 'Rénovation Électrique - Bâtiment Administratif',
      category: 'Électricité',
      description: 'Rénovation complète de l\'installation électrique d\'un bâtiment de bureaux.',
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/about-elec.jpg'
    }
  ];

  return (
    <div className="realisations-page">
      <div className="page-hero">
        <div className="container">
          <h1>Nos Réalisations</h1>
          <p>Découvrez quelques-uns de nos projets réussis</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-category">{project.category}</div>
                </div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cta-section">
            <h2>Vous avez un projet ?</h2>
            <p>Contactez-nous pour discuter de vos besoins et obtenir un devis gratuit</p>
            <a href="/contact" className="btn">Demander un devis</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RealisationsPage;
