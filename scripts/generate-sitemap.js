// Script pour générer automatiquement le sitemap.xml
// Usage: node scripts/generate-sitemap.js

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOMAIN = 'https://facilitysolutiongroup.ma';
const OUTPUT_PATH = path.join(__dirname, '../public/sitemap.xml');

// Liste des routes de votre application
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/services', priority: '0.9', changefreq: 'weekly' },
  { path: '/a-propos', priority: '0.8', changefreq: 'monthly' },
  { path: '/maintenance-multitechnique', priority: '0.9', changefreq: 'weekly' },
  { path: '/contact', priority: '0.7', changefreq: 'monthly' },
  { path: '/e-plaquette', priority: '0.6', changefreq: 'monthly' },
  { path: '/realisations', priority: '0.7', changefreq: 'weekly' }
];

function generateSitemap() {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${DOMAIN}${route.path}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${route.changefreq}</changefreq>\n`;
    xml += `    <priority>${route.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  
  fs.writeFileSync(OUTPUT_PATH, xml, 'utf8');
  console.log('✅ Sitemap généré avec succès:', OUTPUT_PATH);
  console.log(`📊 ${routes.length} URLs ajoutées au sitemap`);
}

try {
  generateSitemap();
} catch (error) {
  console.error('❌ Erreur lors de la génération du sitemap:', error);
  process.exit(1);
}
