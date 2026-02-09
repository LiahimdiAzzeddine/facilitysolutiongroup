import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Pour de plus amples informations sur nos prestations</h2>
        <p className="section-subtitle">N'hésitez pas à nous contacter!</p>
        
        <div className="contact-grid">
          <div className="contact-card">
            <h3>NOUS CONTACTER</h3>
            <p><a href="mailto:contact@facilitysolutiongroup.ma">contact@facilitysolutiongroup.ma</a></p>
          </div>
          
          <div className="contact-card">
            <h3>HORAIRES</h3>
            <p>Lundi - Vendredi 8.00 - 18.00</p>
            <p>Samedi 8.00 - 13.00</p>
          </div>
          
          <div className="contact-card">
            <h3>CENTRE D'APPELS</h3>
            <p><a href="tel:+212664518537">+212 664 518 537</a></p>
          </div>
          
          <div className="contact-card">
            <h3>ADRESSE</h3>
            <p>Bd Mohamed V, Technoparc T215</p>
            <p>90100 Tanger, Maroc</p>
          </div>
        </div>
        
        <div className="assistance">
          <h3>Bénéficiez de l'Assistance Technique 24/7</h3>
          <p className="assistance-phone">+212 664 518 537</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
