import React from 'react';
import './Clients.css';

function Clients() {
  return (
    <section className="section clients">
      <div className="container">
        <h2 className="section-title">NOS CLIENTS</h2>
        <p className="section-subtitle">Ils nous font confiance.</p>
        
        <div className="clients-grid">
          {/* Placeholder pour les logos clients */}
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#999' }}>
            <p>Logos des clients partenaires</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
