import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SisterBrandCta() {
  return (
    <div className="cta-slab cta-slab--cmv">
      <div className="cmv-cta-copy"><p className="cmv-eyebrow">Sister Brand</p><h2>More interested in custom and prebuilt vans?</h2><p className="cmv-lede">Crescent Moon Vans builds custom campervans, mobile business builds, shell builds, and ready-to-go floorplans.</p><p className="cmv-hand">do whatever you want, wherever you want</p></div>
      <div className="cmv-cta-card"><p className="cmv-card-brand">Crescent Moon Vans</p><p className="cmv-card-copy">Explore custom builds, prebuilt van options, and the full Crescent Moon Vans process.</p><a className="cmv-button" href="https://crescent-moon-vans.web.app/" target="_blank" rel="noopener noreferrer">Visit Crescent Moon Vans</a></div>
    </div>
  );
}

function Model({ id, compact = false }) {
  const model = compact ? {
    name: 'ICE CHEST', label: 'Compact Model', price: '$12,500', image: 'icechest.avif', alt: 'Ice Chest compact tailgating trailer exterior', description: 'Two thirds of the size of our flagship model and still all the fun.', dimensions: "5' x 8'", height: "5'1\"", battery: '300Ah', inverter: '1000W', features: 'Features: 300Ah lithium battery bank, 1000W inverter, Dometic electric cooler, simple finished interior, side door with storage, mounted smart tv, built in sound system, outlets, hangable propane grill.',
  } : {
    name: 'ICE HOUSE', label: 'Flagship Model', price: '$19,500', image: 'icehouse.avif', alt: 'Ice House flagship tailgating trailer exterior', description: 'Our flagship model', dimensions: "6' x 10'", height: "6'7\"", battery: '460Ah', inverter: '3000W', features: 'Features: 460Ah lithium battery bank, 3000W inverter, Dometic electric cooler, mounted smart tv, built-in sound system, hangable propane grill, outlets, finished interior seating & storage area, air conditioning, fans, bar sink, exterior awning.',
  };

  return (
    <article className={`product-showcase${compact ? ' reverse' : ''}`} id={id}>
      <figure className="product-image-slab"><img src={`/media/${model.image}`} alt={model.alt} /></figure>
      <div className="product-detail-slab">
        <p className="eyebrow">{model.label}</p><h3>{model.name}</h3><p className="price-line">Starting at {model.price}</p><p>{model.description}</p>
        <dl className="model-spec-list"><div><dt>Dimensions</dt><dd>{model.dimensions}</dd></div><div><dt>Interior Height</dt><dd>{model.height}</dd></div><div><dt>GVWR</dt><dd>2990</dd></div></dl>
        <dl className="tech-callouts" aria-label={`${model.name} power system`}><div><dt>Battery</dt><dd>{model.battery}</dd></div><div><dt>Inverter</dt><dd>{model.inverter}</dd></div><div><dt>Power</dt><dd>Off-Grid</dd></div></dl>
        <p className="features-line">{model.features}</p><p>Customizable interior colors & other amenity upgrade packages available as add-ons.</p>
        <Link className="ice-button primary model-contact-button" to="/contact">INQUIRE ABOUT THE {model.name}</Link>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  useEffect(() => {
    document.title = 'Our Products | Ice House Tailgating';
  }, []);

  return (
    <main id="main">
      <section className="hero hero-products" aria-label="Our products"><div className="hero-media" aria-hidden="true"><img src="/media/tailgatehero2.avif" alt="" /></div><div className="section-shell hero-content product-hero-copy"><p className="eyebrow">HANDMADE GAME DAY SOLUTIONS</p><h1>OUR PRODUCTS</h1></div></section>
      <section className="section-band models-section" id="models"><div className="section-shell"><div className="section-heading narrow-heading"><p className="eyebrow">Compare Your Setup</p><h2>TAILGATING TRAILER MODELS</h2></div><Model id="ice-house" /><Model id="ice-chest" compact /></div></section>
      <section className="section-band frost-band product-feature-section" id="key-features"><div className="section-shell"><div className="section-heading"><p className="eyebrow">Built For Game Day</p><h2>KEY FEATURES</h2></div><div className="feature-stack">
        <article className="feature-row feat-entertainment"><figure className="feature-media"><img src="/media/radio.avif" alt="Built-in sound system inside an Ice House trailer" /></figure><div className="feature-text"><p className="feature-index">01</p><h3>Entertainment for Everyone</h3><p>Keep the party going all day long with a mounted smart TV, built-in sound system, electric cooler, and portable propane grill.</p></div></article>
        <article className="feature-row reverse feat-comfort"><figure className="feature-media"><img src="/media/icehouse.avif" alt="Ice House flagship tailgating trailer exterior" /></figure><div className="feature-text"><p className="feature-index">02</p><h3>Designed with tailgating in mind</h3><p>Each model comes with built in shelves for storage, countertop space for refreshments, and seating for ultimate comfort. Our flagship model includes a permanent air conditioner.</p></div></article>
        <article className="feature-row feat-offgrid"><figure className="feature-media"><img src="/media/icechest.avif" alt="Ice Chest compact tailgating trailer exterior" /></figure><div className="feature-text"><p className="feature-index">03</p><h3>Go Off-Grid</h3><p>Leave the generator at home. ICE HOUSE&apos;s battery-powered electrical system powers your game day setup.</p></div></article>
      </div></div></section>
      <section className="section-band frost-band final-cta"><div className="section-shell cta-stack"><div className="cta-slab"><div><p className="eyebrow">Next Step</p><h2>BUILD YOUR ICE HOUSE</h2></div><div className="cta-actions"><div className="cta-action-card"><p className="eyebrow">Contact Ice House</p><p className="cta-action-copy">Contact us to learn more about available models, customization options, and ordering.</p><Link className="ice-button primary" to="/contact">CONTACT US</Link></div></div></div><SisterBrandCta /></div></section>
    </main>
  );
}