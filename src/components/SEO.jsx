import { Helmet } from 'react-helmet-async';

function SEO({ 
  title = "Facility Solution Group - Maintenance Multitechnique Tanger & Tétouan",
  description = "FSG : Expert en maintenance multitechnique à Tanger et Tétouan. Climatisation CVC, froid industriel, électricité, courant faible. Intervention 24/7 dans le Nord Maroc.",
  keywords = "maintenance multitechnique Tanger, climatisation Tanger, froid industriel Tanger, électricité industrielle Tanger, maintenance Tétouan, facility management Tanger, CVC Tanger, maintenance préventive Tanger, dépannage Tanger, nord maroc maintenance",
  image = "/logoweb.png",
  url = "https://facilitysolutiongroup.ma",
  type = "website"
}) {
  const siteTitle = "Facility Solution Group";
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="fr_MA" />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Geo Tags - Tanger précis */}
      <meta name="geo.region" content="MA-TNG" />
      <meta name="geo.placename" content="Tanger, Maroc" />
      <meta name="geo.position" content="35.7595;-5.8340" />
      <meta name="ICBM" content="35.7595, -5.8340" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="fr-MA" />
    </Helmet>
  );
}

export default SEO;
