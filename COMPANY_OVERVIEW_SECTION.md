# Section Aperçu de l'Entreprise - Page d'Accueil

## Vue d'ensemble

Nouvelle section ajoutée à la page d'accueil pour présenter brièvement FSG avec des statistiques clés et un lien vers la page À propos complète.

---

## Positionnement

### Dans la Page d'Accueil
```
1. Hero (Slider)
2. Services (4 cartes)
3. ✨ Company Overview (NOUVEAU)
4. About (3 cartes avec images)
5. Features
6. Clients
```

**Placement stratégique** : Entre Services et About pour créer une transition naturelle vers les informations détaillées de l'entreprise.

---

## Structure de la Section

### Layout Principal
```
┌─────────────────────────────────────────────┐
│                                             │
│  ┌──────────────────┐  ┌──────────────┐   │
│  │                  │  │  ┌────┬────┐ │   │
│  │  [BADGE FSG]     │  │  │Stat│Stat│ │   │
│  │                  │  │  └────┴────┘ │   │
│  │  TITRE           │  │  ┌────┬────┐ │   │
│  │                  │  │  │Stat│Stat│ │   │
│  │  Description...  │  │  └────┴────┘ │   │
│  │                  │  │              │   │
│  │  [EN SAVOIR +→]  │  │              │   │
│  │                  │  │              │   │
│  └──────────────────┘  └──────────────┘   │
│                                             │
└─────────────────────────────────────────────┘
```

### Grid Layout
- **Desktop** : 2 colonnes (Contenu | Stats)
- **Mobile** : 1 colonne (Contenu au-dessus, Stats en dessous)

---

## Composants

### 1. Badge FSG
```jsx
<span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider mb-4">
  Facility Solution Group
</span>
```

**Style:**
- Background rouge clair (10% opacity)
- Texte rouge primaire
- Border radius complet (pill shape)
- Uppercase avec letterspacing

### 2. Titre Principal
```jsx
<h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-secondary uppercase mb-6 leading-tight">
  Votre Partenaire en <span className="text-primary">Solutions Techniques</span>
</h2>
```

**Caractéristiques:**
- Responsive : 3xl → 4xl → 5xl
- Font-weight 900 (black)
- Mot-clé en rouge primaire
- Leading-tight pour espacement

### 3. Description
```jsx
<p className="text-lg text-gray-700 leading-relaxed mb-6">
  <strong className="text-primary">FSG</strong> intervient sur tout le Maroc...
</p>

<p className="text-base text-gray-600 leading-relaxed mb-8">
  Du génie climatique au froid industriel...
</p>
```

**Hiérarchie:**
- Premier paragraphe : text-lg (plus important)
- Deuxième paragraphe : text-base (détails)
- Mots-clés en gras et/ou en couleur

### 4. Bouton CTA
```jsx
<motion.a
  href="/a-propos"
  className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-lg font-bold uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl group"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  En savoir plus
  <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
</motion.a>
```

**Effets:**
- Dégradé rouge
- Icône flèche avec translation au hover
- Scale animation
- Shadow progressive

---

## Cartes de Statistiques

### Structure d'une Carte
```jsx
<div className="stat-card">
  <div className="stat-icon-wrapper bg-gradient-to-br ${color}">
    <div className="stat-icon">{icon}</div>
  </div>
  <div className="stat-number">{number}</div>
  <div className="stat-label">{label}</div>
</div>
```

### 4 Statistiques Clés

| Stat | Icône | Nombre | Label | Couleur |
|------|-------|--------|-------|---------|
| Équipe | `<FaUsers />` | 50+ | Collaborateurs | Bleu → Cyan |
| Expérience | `<FaAward />` | 10+ | Ans d'Expérience | Violet → Indigo |
| Couverture | `<FaMapMarkerAlt />` | 100% | Maroc | Vert → Émeraude |
| Disponibilité | `<FaClock />` | 24/7 | Disponibilité | Rouge → Rose |

### Design des Cartes

#### Icône Wrapper
```css
.stat-icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.stat-icon-wrapper::before {
  content: '';
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: inherit;
  opacity: 0.2;
  filter: blur(15px);
}
```

**Effet:**
- Cercle avec dégradé
- Glow effect avec pseudo-element
- Icône 2.5rem (40px)
- Rotation 360° au hover

#### Nombre
```css
.stat-number {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--secondary);
}
```

#### Label
```css
.stat-label {
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
```

### Hover Effects

#### Carte
```css
.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  border-color: var(--primary);
}
```

#### Top Border Animation
```css
.stat-card::before {
  content: '';
  height: 4px;
  background: linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%);
  transform: scaleX(0);
}

.stat-card:hover::before {
  transform: scaleX(1);
}
```

---

## Animations Framer Motion

### Contenu Gauche
```javascript
initial={{ opacity: 0, x: -50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
```

### Stats Droite
```javascript
initial={{ opacity: 0, x: 50 }}
whileInView={{ opacity: 1, x: 0 }}
transition={{ duration: 0.8 }}
viewport={{ once: true }}
```

### Cartes Individuelles (Cascade)
```javascript
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5, delay: index * 0.1 }}
viewport={{ once: true }}
whileHover={{ y: -10 }}
```

### Icônes
```javascript
whileHover={{ rotate: 360, scale: 1.2 }}
transition={{ duration: 0.6 }}
```

### Bouton CTA
```javascript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
```

---

## Background Décoratif

### Cercles Flous
```jsx
<div className="absolute inset-0 opacity-5">
  <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full filter blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full filter blur-3xl"></div>
</div>
```

**Effet:**
- Cercles géants (384px)
- Blur extrême (3xl)
- Opacity très faible (5%)
- Positionnés aux coins opposés
- Ajoute de la profondeur subtile

---

## Responsive Design

### Desktop (> 1024px)
- Grid 2 colonnes (50/50)
- Gap 3rem entre colonnes
- Stats en grille 2x2
- Icônes 80px
- Nombres 2.5rem

### Tablet (768px - 1024px)
- Grid 2 colonnes
- Gap 2rem
- Stats en grille 2x2
- Tailles légèrement réduites

### Mobile (< 768px)
- Grid 1 colonne
- Contenu en premier
- Stats en grille 2x2 en dessous
- Icônes 60px
- Nombres 2rem
- Padding réduit

---

## Intégration avec la Page À Propos

### Lien Direct
```jsx
<a href="/a-propos">En savoir plus</a>
```

### Cohérence du Contenu
- **Aperçu** : Présentation courte (2 paragraphes)
- **À Propos** : Contenu complet détaillé

### Statistiques Communes
Les 4 stats de l'aperçu sont également présentes sur la page À Propos, créant une continuité visuelle.

---

## Avantages de cette Section

### UX/UI
✅ Transition naturelle entre Services et About
✅ Présentation concise de l'entreprise
✅ Call-to-action clair vers page détaillée
✅ Statistiques visuelles impactantes
✅ Design moderne et professionnel

### SEO
✅ Contenu riche avec mots-clés
✅ Structure sémantique claire
✅ Lien interne vers page À Propos
✅ Améliore le temps sur site

### Conversion
✅ Encourage à en savoir plus
✅ Établit la crédibilité (stats)
✅ Appel à l'action visible
✅ Réduit le taux de rebond

### Performance
✅ Composant léger
✅ Animations optimisées
✅ Lazy loading avec viewport
✅ CSS minimal

---

## Fichiers Créés

### 1. src/components/CompanyOverview.jsx
- Composant React complet
- 4 statistiques avec icônes
- Contenu texte
- Bouton CTA
- Animations Framer Motion

### 2. src/components/CompanyOverview.css
- Styles des cartes de stats
- Hover effects
- Responsive design
- Animations CSS

### 3. src/pages/Home.jsx (modifié)
- Import du nouveau composant
- Ajout entre Services et About

---

## Maintenance

### Modifier les Statistiques
```javascript
const stats = [
  { 
    icon: <FaIcon />, 
    number: 'XX', 
    label: 'Label',
    color: 'from-color-500 to-color-600'
  },
  // ...
];
```

### Changer le Texte
Modifier directement dans le JSX les paragraphes de description.

### Ajuster les Couleurs
Modifier les classes Tailwind `from-*` et `to-*` pour chaque stat.

---

## Prochaines Étapes

### Court Terme
- [ ] Ajouter des animations au scroll plus complexes
- [ ] Intégrer un compteur animé pour les nombres
- [ ] Ajouter des tooltips sur les stats

### Moyen Terme
- [ ] Rendre les stats dynamiques (API)
- [ ] Ajouter plus de statistiques
- [ ] Intégrer des témoignages courts

### Long Terme
- [ ] Version multilingue
- [ ] A/B testing du contenu
- [ ] Analytics sur le taux de clic

---

**Date**: Février 2026
**Version**: 1.0
**Statut**: ✅ Production Ready
