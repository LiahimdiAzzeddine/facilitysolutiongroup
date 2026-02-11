import { Helmet } from 'react-helmet-async';

function SEO({ 
  title = "Facility Solution Group Maroc - Expert en Maintenance Multitechnique",
  description = "FSG Maroc : Leader en maintenance multitechnique, climatisation, froid industriel, électricité et plomberie. Solutions professionnelles pour entreprises au Maroc.",
  keywords = "maintenance multitechnique maroc, climatisation maroc, froid industriel, électricité industrielle, plomberie professionnelle, facility management maroc, maintenance préventive, maintenance curative",
  image = "/logoweb.png",
  url = "https://facilitysolutiongroup.ma",
  type = "website"
}) {
  const siteTitle = "Facility Solution Group Maroc";
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
      
      {/* Geo Tags */}
      <meta name="geo.region" content="MA" />
      <meta name="geo.placename" content="Maroc" />
      
      {/* Language */}
      <meta httpEquiv="content-language" content="fr-MA" />
    </Helmet>
  );
}

export default SEO;
