# Refonte Services : De Cartes à Sections Complètes

## Vue d'ensemble

Transformation complète de la page Services, passant d'une grille de cartes à des sections pleine largeur pour chaque service, offrant une présentation plus détaillée et immersive.

---

## Changements Majeurs

### Avant : Grille de Cartes
```
┌────────┬────────┐
│ Card 1 │ Card 2 │
├────────┼────────┤
│ Card 3 │ Card 4 │
└────────┴────────┘
```

### Après : Sections Complètes
```
┌─────────────────┐
│   Section 1     │
│  (Full Width)   │
├─────────────────┤
│   Section 2     │
│  (Full Width)   │
├─────────────────┤
│   Section 3     │
│  (Full Width)   │
├─────────────────┤
│   Section 4     │
│  (Full Width)   │
└─────────────────┘
```

---

## Structure d'une Section de Service

### 1. Header de Section
```
┌─────────────────────────────────────┐
│  [ICÔNE]  TITRE DU SERVICE          │
│           Sous-titre                │
└─────────────────────────────────────┘
```

**Composants:**
- Icône circulaire colorée (120px) avec effet de glow
- Titre en majuscules, responsive (2rem - 3.5rem)
- Sous-titre en couleur primaire

**Animations:**
- Icône: Scale + Rotation (0 → 1, -180° → 0°)
- Texte: Fade in + Slide up

### 2. Contenu Principal (Grid 2 colonnes)
```
┌──────────────┬──────────────┐
│              │              │
│    IMAGE     │  DESCRIPTION │
│              │   + DÉTAILS  │
│              │              │
└──────────────┴──────────────┘
```

**Colonne Gauche - Image:**
- Aspect ratio 4:3
- Border radius 2xl
- Overlay coloré subtil (10% opacity)
- Shadow importante
- Animation: Slide from left/right (alterné)

**Colonne Droite - Texte:**
- Description (1.125rem, line-height 1.8)
- Grille de détails avec icônes
- Chaque détail dans une carte blanche
- Hover: Border colorée + Translation

### 3. Section Spécialités
```
┌─────────────────────────────────────┐
│          NOS ENJEUX                 │
│         ─────────                   │
│                                     │
│  ┌──────┐ ┌──────┐ ┌──────┐       │
│  │ Sp 1 │ │ Sp 2 │ │ Sp 3 │       │
│  └──────┘ └──────┘ └──────┘       │
│  ┌──────┐                          │
│  │ Sp 4 │                          │
│  └──────┘                          │
└─────────────────────────────────────┘
```

**Caractéristiques:**
- Background dégradé subtil
- Padding généreux (3rem)
- Titre centré avec ligne décorative
- Grille responsive (auto-fit, min 280px)
- Cartes avec accent coloré en haut

### 4. Call-to-Action
```
┌─────────────────────────────────────┐
│  [Demander un devis pour Service →] │
└─────────────────────────────────────┘
```

**Design:**
- Bouton avec dégradé du service
- Effet de shine au survol
- Texte personnalisé par service
- Centré, pleine largeur sur mobile

---

## Code Structure

### JSX Structure
```jsx
<section className="service-section">
  <div className="service-section-container">
    {/* Header */}
    <div className="service-section-header">
      <div className="service-section-icon">
        {icon}
      </div>
      <div className="service-section-title-block">
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>

    {/* Content */}
    <div className="service-section-content">
      <div className="service-section-image">
        <img src={image} alt={title} />
        <div className="service-section-image-overlay" />
      </div>
      <div className="service-section-text">
        <p className="service-section-description">
          {description}
        </p>
        <div className="service-section-details">
          {details.map(detail => (
            <div className="service-detail-item">
              <FaCheckCircle />
              <span>{detail}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Specialties */}
    <div className="service-section-specialties">
      <h4>Nos Enjeux</h4>
      <div className="specialties-section-grid">
        {specialties.map(specialty => (
          <div className="specialty-section-card">
            <div className="specialty-card-accent" />
            <h5>{specialty.name}</h5>
            <p>{specialty.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="service-section-cta">
      <a href="/contact" className="service-section-button">
        Demander un devis pour {title}
      </a>
    </div>
  </div>
</section>
```

---

## Animations Framer Motion

### Section Principale
```javascript
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true, margin: "-100px" }}
```

### Icône
```javascript
initial={{ scale: 0, rotate: -180 }}
whileInView={{ scale: 1, rotate: 0 }}
transition={{ duration: 0.6, delay: 0.2 }}
```

### Image (Alternée)
```javascript
initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8, delay: 0.3 }}
```

### Détails (Cascade)
```javascript
initial={{ opacity: 0, x: -20 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.4, delay: 0.5 + idx * 0.05 }}
```

### Spécialités (Cascade)
```javascript
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }}
whileHover={{ y: -5 }}
```

---

## CSS Highlights

### Icône avec Glow Effect
```css
.service-section-icon {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
}

.service-section-icon::before {
  content: '';
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  background: inherit;
  opacity: 0.2;
  filter: blur(20px);
}
```

### Détail avec Hover Effect
```css
.service-detail-item {
  padding: 1rem;
  background: white;
  border: 1px solid var(--gray-200);
  transition: all var(--transition-base);
}

.service-detail-item:hover {
  border-color: var(--primary);
  box-shadow: 0 4px 12px rgba(214, 40, 40, 0.1);
  transform: translateX(5px);
}
```

### Titre avec Ligne Décorative
```css
.specialties-section-title {
  position: relative;
  text-align: center;
}

.specialties-section-title::after {
  content: '';
  position: absolute;
  bottom: -1rem;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
}
```

### Bouton avec Shine Effect
```css
.service-section-button {
  position: relative;
  overflow: hidden;
}

.service-section-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.2);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.service-section-button:hover::before {
  transform: translateX(0);
}
```

---

## Responsive Design

### Desktop (> 1024px)
- Grid 2 colonnes pour contenu
- Icône 120px
- Titre 3.5rem max
- Spécialités en grille auto-fit

### Tablet (768px - 1024px)
- Grid 1 colonne pour contenu
- Image en haut, texte en bas
- Détails en 1 colonne
- Spécialités 2 colonnes

### Mobile (< 768px)
- Header centré, vertical
- Icône 100px
- Titre 2rem
- Tout en 1 colonne
- Bouton pleine largeur
- Padding réduit

---

## Avantages de la Nouvelle Structure

### UX/UI
✅ Plus d'espace pour le contenu
✅ Lecture linéaire et naturelle
✅ Meilleure hiérarchie visuelle
✅ Images plus grandes et impactantes
✅ Sections clairement séparées

### Performance
✅ Animations optimisées (viewport once)
✅ Images avec aspect-ratio (pas de CLS)
✅ Transitions GPU (transform, opacity)
✅ Lazy loading des sections

### SEO
✅ Structure sémantique claire
✅ Headings hiérarchisés (h1 → h5)
✅ Alt text sur toutes les images
✅ Contenu plus riche et détaillé

### Accessibilité
✅ Contraste respecté (WCAG AA)
✅ Tailles de texte lisibles
✅ Navigation au clavier
✅ Focus visible
✅ Zones de clic suffisantes

---

## Comparaison Avant/Après

| Aspect | Cartes (Avant) | Sections (Après) |
|--------|----------------|------------------|
| Layout | Grille 2x2 | Sections empilées |
| Largeur | 50% container | 100% container |
| Image | Petite, background | Grande, featured |
| Détails | Liste simple | Cartes interactives |
| Spécialités | Dans carte | Section dédiée |
| CTA | Générique | Personnalisé |
| Espace | Compact | Généreux |
| Scroll | Court | Long (storytelling) |

---

## Services Présentés

### 1. GÉNIE CLIMATIQUE
- **Couleur**: Bleu → Cyan
- **Icône**: Flocon de neige
- **Focus**: CVC, ventilation, chauffage
- **Enjeux**: Concevoir, Mettre en œuvre, Maintenir, Accompagner

### 2. GÉNIE ÉLECTRIQUE
- **Couleur**: Jaune → Orange
- **Icône**: Éclair
- **Focus**: Distribution de puissance, courant fort
- **Enjeux**: Expertise CVC, Process, Confort, Gestion d'énergie

### 3. FROID INDUSTRIEL & COMMERCIAL
- **Couleur**: Violet → Indigo
- **Icône**: Clé à molette
- **Focus**: Chambres froides, réfrigération
- **Enjeux**: Froid industriel, Commercial, Optimisation, Conception

### 4. COURANT FAIBLE
- **Couleur**: Rouge → Rose
- **Icône**: Flamme
- **Focus**: Sécurité, connectivité, GTB
- **Enjeux**: Sécurité & Sûreté, Réseaux, GTB, Garantie FSG

---

## Maintenance

### Ajouter un Service
```javascript
{
  title: 'NOUVEAU SERVICE',
  subtitle: 'Description courte',
  description: 'Description longue...',
  icon: <FaIcon />,
  details: ['Détail 1', 'Détail 2', ...],
  specialties: [
    { name: 'Enjeu 1', desc: 'Description...' },
    // ...
  ],
  image: '/image.jpg',
  color: 'from-color-500 to-color-600'
}
```

### Modifier l'Ordre
Réorganiser l'array `services` dans ServicesPage.jsx

### Changer les Couleurs
Modifier la propriété `color` de chaque service

### Ajuster les Animations
Modifier les valeurs `delay` dans les transitions Framer Motion

---

## Performance Metrics

### Objectifs
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- FCP: < 1.8s

### Optimisations
- Images optimisées (WebP)
- Lazy loading des sections
- Animations GPU
- CSS minifié
- Viewport once pour animations

---

## Prochaines Étapes

### Court Terme
- [ ] Ajouter des vidéos de démonstration
- [ ] Intégrer des témoignages clients
- [ ] Ajouter des statistiques par service

### Moyen Terme
- [ ] Créer des pages dédiées par service
- [ ] Ajouter un configurateur de projet
- [ ] Intégrer un système de devis en ligne

### Long Terme
- [ ] Espace client avec suivi
- [ ] Calculateur d'économies d'énergie
- [ ] Réalité augmentée pour visualisation

---

## Support Technique

### Dépendances
- React 18+
- Framer Motion 10+
- React Icons 4+
- Tailwind CSS 3+

### Navigateurs Supportés
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

### Fichiers Modifiés
- `src/pages/ServicesPage.jsx` - Structure complète
- `src/pages/ServicesPage.css` - Styles des sections
- `src/components/Services.jsx` - Titres mis à jour

---

**Date**: Février 2026
**Version**: 4.0
**Type**: Sections Complètes
**Statut**: ✅ Production Ready
