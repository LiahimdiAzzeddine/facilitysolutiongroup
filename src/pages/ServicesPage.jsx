import React from 'react';
import './ServicesPage.css';

function ServicesPage() {
  const services = [
    {
      title: 'CVC (Climatisation, Ventilation, Chauffage)',
      description: 'FSG Maroc assure la maintenance de vos systèmes CVC : Climatisation - Ventilation - Chauffage.',
      details: [
        'Installation de systèmes de climatisation',
        'Maintenance préventive et curative',
        'Dépannage d\'urgence 24/7',
        'Optimisation énergétique',
        'Contrôle et régulation'
      ],
      image: '/energetique_froid_AdobeStock_2956959112.jpg'
    },
    {
      title: 'Électricité Industrielle',
      description: 'Hors-terre, sous-terre, la transmission de l\'énergie qui provient d\'un distributeur d\'énergie.',
      details: [
        'Installation électrique industrielle',
        'Mise aux normes électriques',
        'Maintenance des installations',
        'Tableaux électriques',
        'Câblage et distribution'
      ],
      image: 'https://facilitysolutiongroup.ma/wp-content/uploads/2024/01/service-elec.jpg'
    },
    {
      title: 'Gaz et Fluides Spéciaux',
      description: 'Travaux d\'installation et de maintenance de gaz et fluides spéciaux.',
      details: [
        'Installation de réseaux de gaz',
        'Maintenance des systèmes',
        'Contrôle de conformité',
        'Détection de fuites',
        'Mise en service'
      ],
      image: '/kv-sirius-180308.jpg'
    },
    {
      title: 'Froid Industriel',
      description: 'Vos besoins professionnels en matière de froid passent par le maintien d\'une température idéale pour vos produits.',
      details: [
        'Chambres froides',
        'Groupes frigorifiques',
        'Maintenance préventive',
        'Dépannage rapide',
        'Optimisation des performances'
      ],
      image: '/energetique_froid_AdobeStock_2956959112.jpg'
    }
  ];

  return (
    <div className="services-page">
      <div className="page-hero">
        <div className="container">
          <h1>Nos Services</h1>
          <p>Des solutions complètes pour tous vos besoins industriels</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-detail-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-detail-content">
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-list">
                  {service.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn">Demander un devis</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
