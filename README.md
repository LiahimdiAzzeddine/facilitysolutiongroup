# Facility Solution Group - Site Web

Site web professionnel pour Facility Solution Group Maroc, spécialisé dans les services industriels et de bâtiment.

## 🚀 Démarrage Rapide avec Vite

### Installation

```bash
npm install
```

### Lancement en développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build pour production

```bash
npm run build
```

### Prévisualiser le build

```bash
npm run preview
```

## ⚡ Pourquoi Vite ?

- **Démarrage ultra-rapide** : Le serveur de développement démarre instantanément
- **HMR rapide** : Hot Module Replacement ultra-réactif
- **Build optimisé** : Utilise Rollup pour des builds de production optimaux
- **Support moderne** : ESM natif, pas de bundling en dev

## 📄 Pages du site

- **Accueil** (`/`) - Page d'accueil avec slider et présentation des services
- **Services** (`/services`) - Détails de tous les services (CVC, Électricité, Gaz, Froid)
- **À propos** (`/a-propos`) - Présentation de l'entreprise et valeurs
- **Réalisations** (`/realisations`) - Portfolio des projets réalisés
- **Contact** (`/contact`) - Formulaire de contact et informations

## 🛠️ Technologies utilisées

- **React 19.2.4** - Framework UI
- **Vite 7.3.1** - Build tool ultra-rapide
- **React Router DOM 7.x** - Navigation
- **Framer Motion** - Animations fluides
- **Swiper** - Slider moderne
- **React Icons** - Icônes
- **CSS3** - Design responsive

## 🎨 Fonctionnalités UI

- ✨ Animations Framer Motion sur toutes les sections
- 🎭 Slider Swiper avec effet fade
- 📱 Design 100% responsive
- 🎯 Navigation avec effet hover sophistiqué
- 🌊 Scroll animations
- 🔝 Bouton scroll to top animé
- 💫 Effets glassmorphism
- 🎨 Gradients modernes

## 📱 Responsive

Le site est entièrement responsive et s'adapte à tous les écrans :
- Desktop (1200px+)
- Tablette (768px - 1199px)
- Mobile (< 768px)

## 🎨 Couleurs principales

- Rouge principal: #e74c3c
- Gris foncé: #2c3e50
- Gris clair: #f8f9fa
- Blanc: #ffffff

## 📞 Contact

- **Téléphone**: +212 664 518 537
- **Email**: contact@facilitysolutiongroup.ma
- **Adresse**: Bd Mohamed V, Technoparc T215, 90100 Tanger, Maroc
- **Assistance 24/7**: +212 664 518 537

## 📦 Structure du projet

```
facilitysolutiongroup/
├── public/              # Assets statiques
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Clients.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/          # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── RealisationsPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx         # Composant principal
│   ├── App.css         # Styles globaux
│   ├── index.jsx       # Point d'entrée
│   └── index.css       # Styles de base
├── index.html          # Template HTML
├── vite.config.js      # Configuration Vite
└── package.json        # Dépendances
```

## 🚀 Performance

Grâce à Vite, le projet bénéficie de :
- Temps de démarrage < 1 seconde
- HMR instantané
- Build optimisé avec code splitting
- Lazy loading des routes
- Images optimisées

## 📝 Notes de développement

- Les fichiers utilisent l'extension `.jsx` pour une meilleure compatibilité avec Vite
- Les imports incluent l'extension `.jsx` explicitement
- Le mode strict de React est activé
- Les animations sont optimisées pour les performances
