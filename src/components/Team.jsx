import { useState } from 'react';
import './Team.css';

function Team() {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 1,
      name: 'Amine',
      role: 'Directeur Général',
      image: 'https://i.pravatar.cc/300?img=12',
      bio: 'Travaillant à l\'intersection de la gestion stratégique et de l\'innovation technique, Ahmed a le privilège de collaborer avec une variété de clients et a perfectionné ses compétences dans la livraison de solutions de haute qualité.',
      loves: 'Leadership, Innovation, Développement d\'équipe',
      hates: 'Procrastination, Inefficacité'
    },
    
    {
      id: 3,
      name: 'Azzeddine',
      role: 'Assistance Informatique',
      image: '/public/azzeddine.jpg',
      bio: 'Expert en support informatique et solutions technologiques. Azzeddine assure la maintenance des systèmes informatiques et accompagne l\'équipe dans l\'optimisation des outils numériques.',
      loves: 'Technologies de l\'information, Résolution de problèmes, Automatisation',
      hates: 'Bugs non résolus, Systèmes obsolètes'
    },
    {
      id: 4,
      name: 'Samira Idrissi',
      role: 'Ingénieure Électrique',
      image: 'https://i.pravatar.cc/300?img=44',
      bio: 'Ingénieure certifiée en installations électriques avec une passion pour l\'automatisation et la sécurité. Samira apporte son expertise technique pour garantir des installations conformes et performantes.',
      loves: 'Automatisation, Sécurité électrique, Nouvelles technologies',
      hates: 'Non-conformité, Installations dangereuses'
    }
  ];

  const openModal = (member) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="team-section">
      <div className="team-container">
        <div className="team-header">
          <h2 className="team-title">RENCONTREZ L'ÉQUIPE</h2>
          <p className="team-subtitle">
            L'esprit d'équipe commence avec des personnes passionnées. Nous croyons qu'un excellent travail<br />
            commence avec des collaborateurs heureux et se termine avec des clients satisfaits.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="team-member"
              onClick={() => openModal(member)}
            >
              <div className="team-avatar">
                <img src={member.image} alt={member.name} />
              </div>
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedMember && (
        <div className="team-modal-overlay" onClick={closeModal}>
          <div className="team-modal" onClick={(e) => e.stopPropagation()}>
            <button className="team-modal-close" onClick={closeModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="team-modal-content">
              <div className="team-modal-image">
                <img src={selectedMember.image} alt={selectedMember.name} />
              </div>
              
              <div className="team-modal-info">
                <h3 className="team-modal-name">{selectedMember.name}</h3>
                <p className="team-modal-role">{selectedMember.role}</p>
                
                <p className="team-modal-bio">{selectedMember.bio}</p>
                
                <div className="team-modal-section">
                  <h4 className="team-modal-section-title">AIME</h4>
                  <p className="team-modal-section-text">{selectedMember.loves}</p>
                </div>
                
                <div className="team-modal-section">
                  <h4 className="team-modal-section-title">N'AIME PAS</h4>
                  <p className="team-modal-section-text">{selectedMember.hates}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Team;
