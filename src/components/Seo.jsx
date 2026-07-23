import { useEffect } from 'react';
import { icehouseProducts } from '../data/products';

const siteUrl = 'https://icehousetailgating.com';
const defaultImage = `${siteUrl}/optimized/media/exteriorhero3.avif`;

const pageMetadata = {
  '/': {
    title: 'Ice House Tailgating | Off-Grid Towable Tailgating Trailers',
    description: 'Handmade off-grid towable tailgating trailers with power, climate-controlled comfort, entertainment, and game-day amenities.',
  },
  '/products': {
    title: 'Ice House & Ice Chest Tailgating Trailers | Ice House Tailgating',
    description: 'Compare the Ice House and Ice Chest off-grid tailgating trailers, including power, comfort, entertainment, and customization options.',
  },
  '/contact': {
    title: 'Contact Ice House Tailgating | Cayce, South Carolina',
    description: 'Contact Ice House Tailgating in Cayce, South Carolina to learn about trailer models, customization options, and ordering.',
  },
};

function setMeta(attribute, name, content) {
  let element = document.head.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.content = content;
}

export default function Seo({ path }) {
  useEffect(() => {
    const metadata = pageMetadata[path] ?? pageMetadata['/'];
    const url = `${siteUrl}${path === '/' ? '/' : path}`;
    const canonical = document.head.querySelector('link[rel="canonical"]') ?? document.head.appendChild(document.createElement('link'));
    canonical.rel = 'canonical';
    canonical.href = url;
    document.title = metadata.title;
    setMeta('name', 'description', metadata.description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', 'Ice House Tailgating');
    setMeta('property', 'og:title', metadata.title);
    setMeta('property', 'og:description', metadata.description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', defaultImage);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', metadata.title);
    setMeta('name', 'twitter:description', metadata.description);
    setMeta('name', 'twitter:image', defaultImage);

    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${siteUrl}/#organization`,
          name: 'Ice House Tailgating',
          url: `${siteUrl}/`,
          logo: `${siteUrl}/IceHouselogos/Black%20Tag%20-%20Ice%20House.png`,
          description: 'Handmade off-grid towable tailgating trailers with power, comfort, entertainment, and game-day amenities.',
          parentOrganization: { name: 'Crescent Moon Vans, LLC' },
          address: {
            '@type': 'PostalAddress',
            streetAddress: '995 Holland Ave',
            addressLocality: 'Cayce',
            addressRegion: 'SC',
            postalCode: '29033',
            addressCountry: 'US',
          },
          knowsAbout: ['Towable tailgating trailers', 'Off-grid power systems', 'Tailgating amenities'],
        },
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          name: 'Ice House Tailgating',
          url: `${siteUrl}/`,
          publisher: { '@id': `${siteUrl}/#organization` },
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          url,
          name: metadata.title,
          description: metadata.description,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
        },
        ...(path === '/products' ? icehouseProducts.map((product) => ({
          '@type': 'Product',
          name: product.name,
          description: product.description,
          image: `${siteUrl}/optimized/media/${product.image}`,
          brand: { '@type': 'Brand', name: 'Ice House Tailgating' },
          offers: {
            '@type': 'Offer',
            price: product.price.replace(/[$,]/g, ''),
            priceCurrency: 'USD',
            url: `${siteUrl}/products#${product.slug}`,
          },
        })) : []),
      ],
    };
    let schemaElement = document.getElementById('icehouse-seo-schema');
    if (!schemaElement) {
      schemaElement = document.createElement('script');
      schemaElement.id = 'icehouse-seo-schema';
      schemaElement.type = 'application/ld+json';
      document.head.appendChild(schemaElement);
    }
    schemaElement.textContent = JSON.stringify(schema);
  }, [path]);

  return null;
}