import React, { useState } from 'react';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire
    alert('Message envoyé ! Nous vous contacterons bientôt.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container">
          <h1>Contactez-Nous</h1>
          <p>N'hésitez pas à nous contacter pour toute demande d'information</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form-section">
              <h2>Envoyez-nous un message</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Nom complet *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Sujet *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn">Envoyer le message</button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Informations de contact</h2>
              
              <div className="contact-info-card">
                <h3>📧 Email</h3>
                <p><a href="mailto:contact@facilitysolutiongroup.ma">contact@facilitysolutiongroup.ma</a></p>
              </div>

              <div className="contact-info-card">
                <h3>📞 Téléphone</h3>
                <p><a href="tel:+212664518537">+212 664 518 537</a></p>
              </div>

              <div className="contact-info-card">
                <h3>📍 Adresse</h3>
                <p>Bd Mohamed V, Technoparc T215<br />90100 Tanger, Maroc</p>
              </div>

              <div className="contact-info-card">
                <h3>🕐 Horaires</h3>
                <p>
                  Lundi - Vendredi: 8h00 - 18h00<br />
                  Samedi: 8h00 - 13h00<br />
                  Dimanche: Fermé
                </p>
              </div>

              <div className="contact-info-card emergency">
                <h3>🚨 Assistance Technique 24/7</h3>
                <p className="emergency-phone">+212 664 518 537</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
