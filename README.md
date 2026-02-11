# Facility Solution Group - Site Web

Site web professionnel pour Facility Solution Group Maroc, spécialisé dans les services industriels et de bâtiment.

## 🎯 SEO - Optimisation pour Google

**✅ Le site est maintenant entièrement optimisé pour le référencement Google !**

### 📚 Documentation SEO Complète

Consultez le guide complet : **[SEO_INDEX.md](./SEO_INDEX.md)**

#### Guides Disponibles :
- **[QUICK_START_SEO.md](./QUICK_START_SEO.md)** - Actions rapides (30 min)
- **[SEO_README.md](./SEO_README.md)** - Vue d'ensemble complète
- **[SEO_GUIDE.md](./SEO_GUIDE.md)** - Guide technique approfondi
- **[STRATEGIE_CONTENU_SEO.md](./STRATEGIE_CONTENU_SEO.md)** - Plan de contenu
- **[MOTS_CLES_SEO.md](./MOTS_CLES_SEO.md)** - Liste des mots-clés
- **[SEO_CHECKLIST.md](./SEO_CHECKLIST.md)** - Checklist complète

#### 🚀 Commencez Maintenant :
1. Lisez [QUICK_START_SEO.md](./QUICK_START_SEO.md) (10 min)
2. Créez Google Search Console et Google My Business (30 min)
3. Suivez la checklist dans [SEO_CHECKLIST.md](./SEO_CHECKLIST.md)

---

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

Le sitemap.xml sera automatiquement généré avant le build.

### Prévisualiser le build

```bash
npm run preview
```

### Générer le sitemap manuellement

```bash
npm run generate-sitemap
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
- **Maintenance Multitechnique** (`/maintenance-multitechnique`) - Services de maintenance
- **E-Plaquette** (`/e-plaquette`) - Plaquette digitale
- **Réalisations** (`/realisations`) - Portfolio des projets réalisés
- **Contact** (`/contact`) - Formulaire de contact et informations

## 🛠️ Technologies utilisées

- **React 19.2.4** - Framework UI
- **Vite 7.3.1** - Build tool ultra-rapide
- **React Router DOM 7.x** - Navigation
- **React Helmet Async 2.0.5** - Gestion SEO meta tags
- **Framer Motion** - Animations fluides
- **Swiper** - Slider moderne
- **React Icons** - Icônes
- **EmailJS** - Envoi d'emails
- **Tailwind CSS** - Framework CSS
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
- 📧 Formulaire de contact avec EmailJS
- 💬 Bouton WhatsApp flottant

## 🔍 Fonctionnalités SEO

- ✅ Meta tags dynamiques par page (title, description, keywords)
- ✅ Open Graph (Facebook, LinkedIn)
- ✅ Twitter Cards
- ✅ Sitemap.xml automatique
- ✅ Robots.txt optimisé
- ✅ Schema.org JSON-LD (données structurées)
- ✅ URLs canoniques
- ✅ Balises géographiques (Maroc)
- ✅ Composant SEO réutilisable

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
- **Horaires**: Lun-Sam 8h-17h
- **Assistance 24/7**: +212 664 518 537

## 📦 Structure du projet

```
facilitysolutiongroup/
├── public/              # Assets statiques
│   ├── sitemap.xml     # Sitemap SEO (auto-généré)
│   └── robots.txt      # Directives robots
├── scripts/
│   └── generate-sitemap.js  # Script génération sitemap
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── SEO.jsx     # Composant SEO (NOUVEAU)
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Clients.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   ├── pages/          # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── MaintenanceMultitechniquePage.jsx
│   │   ├── EPlaquettePage.jsx
│   │   ├── RealisationsPage.jsx
│   │   └── ContactPage.jsx
│   ├── App.jsx         # Composant principal
│   ├── App.css         # Styles globaux
│   ├── index.jsx       # Point d'entrée
│   └── index.css       # Styles de base
├── index.html          # Template HTML (meta tags SEO)
├── vite.config.js      # Configuration Vite
├── package.json        # Dépendances
├── SEO_INDEX.md        # Index documentation SEO
├── QUICK_START_SEO.md  # Guide rapide SEO
├── SEO_README.md       # Documentation SEO complète
├── SEO_GUIDE.md        # Guide technique SEO
├── STRATEGIE_CONTENU_SEO.md  # Stratégie de contenu
├── MOTS_CLES_SEO.md    # Liste mots-clés
└── SEO_CHECKLIST.md    # Checklist SEO
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
- Composant SEO réutilisable pour toutes les pages
- Sitemap généré automatiquement à chaque build

## 🎯 Prochaines Étapes SEO

1. **Configuration Google** (URGENT - 30 min)
   - Créer Google Search Console
   - Créer Google My Business
   - Soumettre sitemap.xml

2. **Contenu** (Cette semaine - 3h)
   - Créer page FAQ
   - Rédiger premier article de blog
   - Optimiser images

3. **Promotion** (Ce mois - 10h)
   - Obtenir 10+ avis Google
   - Créer profils réseaux sociaux
   - S'inscrire sur annuaires

**Consultez [QUICK_START_SEO.md](./QUICK_START_SEO.md) pour le plan détaillé !**

---

**Site optimisé pour Google et prêt à ranker !** 🚀
