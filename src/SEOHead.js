import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "VitalDex - AI-Powered Health Symptom Checker", 
  description = "Get instant health insights with VitalDex. Check your symptoms across heart, kidney, respiratory, digestive, and neurological conditions. AI-powered analysis for better health decisions.",
  keywords = "health checker, symptom checker, medical diagnosis, health analysis, heart symptoms, kidney problems, respiratory issues, VitalDex",
  image = "https://amitvitaldx.vercel.app/vitaldex-preview.jpg",
  url = "https://amitvitaldx.vercel.app"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="author" content="VitalDex" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="VitalDex" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Additional SEO */}
      <meta name="theme-color" content="#667eea" />
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "VitalDex",
          "description": description,
          "url": url,
          "applicationCategory": "HealthApplication",
          "operatingSystem": "Any",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;
