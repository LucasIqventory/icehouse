import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function SisterBrandCta() {
  return (
    <div className="cta-slab cta-slab--cmv">
      <div className="cmv-cta-copy">
        <p className="cmv-eyebrow">Sister Brand</p>
        <h2>More interested in custom and prebuilt vans?</h2>
        <p className="cmv-lede">Crescent Moon Vans builds custom campervans, mobile business builds, shell builds, and ready-to-go floorplans.</p>
        <p className="cmv-hand">do whatever you want, wherever you want</p>
      </div>
      <div className="cmv-cta-card">
        <p className="cmv-card-brand">Crescent Moon Vans</p>
        <p className="cmv-card-copy">Explore custom builds, prebuilt van options, and the full Crescent Moon Vans process.</p>
        <a className="cmv-button" href="https://crescentmoonvans.com/" target="_blank" rel="noopener noreferrer">Visit Crescent Moon Vans</a>
      </div>
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    document.title = 'Ice House Tailgating | Towable Tailgating Trailers';
  }, []);

  return (
    <main id="main">
      <section className="hero hero-split hero-home" aria-label="Ice House off-grid tailgating trailer">
        <div className="section-shell hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Off-Grid Game Day Fortress</p>
            <h1>ICE HOUSE</h1>
            <p className="hero-kicker">Off-Grid Game Day.</p>
            <p className="hero-copy">Featuring fully off-grid electrical systems, climate-controlled comfort, and everything needed to elevate the tailgate experience.</p>
            <div className="action-row">
              <Link className="ice-button primary" to="/products">Explore Products</Link>
              <Link className="ice-button ghost" to="/contact">Contact Us</Link>
            </div>
          </div>
          <figure className="hero-product">
            <img src="/optimized/media/tailgatehero.avif" alt="Ice House off-grid tailgating trailer at a game day tailgate" decoding="async" fetchPriority="high" />
          </figure>
        </div>
      </section>

      <section className="section-band frost-band">
        <div className="section-shell split-layout">
          <figure className="angled-image feature-photo-large">
            <img src="/optimized/media/tailgatehero2.avif" alt="Ice House trailer set up for tailgating on game day" loading="lazy" decoding="async" />
          </figure>
          <div className="copy-block">
            <p className="eyebrow">Section 01 - The Fortress</p>
            <h2>HANDMADE GAME DAY SOLUTIONS</h2>
            <p>Built for fans who want more than folding chairs and coolers.</p>
            <p>Every Ice House trailer is handcrafted to deliver power, comfort, entertainment, and convenience wherever game day takes you.</p>
            <dl className="equipment-strip" aria-label="Core Ice House capabilities">
              <div><dt>Power</dt><dd>Off-grid electric systems</dd></div>
              <div><dt>Comfort</dt><dd>Climate-controlled interiors</dd></div>
              <div><dt>Utility</dt><dd>Storage, seating, and counter space</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section-band feature-section">
        <div className="section-shell">
          <div className="section-heading"><p className="eyebrow">Inside The Ice House</p><h2>KEY FEATURES</h2></div>
          <div className="feature-stack">
            <article className="feature-row feat-entertainment">
              <figure className="feature-media"><img src="/optimized/media/tv.avif" alt="Mounted smart TV and built-in sound system inside an Ice House trailer" loading="lazy" decoding="async" /></figure>
              <div className="feature-text"><p className="feature-index">02</p><h3>Entertainment</h3><p>Blue light from the mounted smart TV washes across frozen steel. A built-in sound system, electric cooler, and portable propane grill keep the party going all day long.</p><ul className="feature-list"><li>Mounted Smart TV</li><li>Built-In Sound System</li><li>Electric Cooler</li><li>Portable Grill</li></ul></div>
            </article>
            <article className="feature-row reverse feat-offgrid">
              <figure className="feature-media"><img src="/optimized/media/icehouse.avif" alt="Ice House flagship tailgating trailer" loading="lazy" decoding="async" /></figure>
              <div className="feature-text"><p className="feature-index">03</p><h3>Off-Grid Power</h3><p>Leave the generator at home. A lithium battery bank and pure inverter system run your entire setup - quiet, clean, and completely off-grid.</p><ul className="feature-list"><li>Lithium Battery Power</li><li>Pure Inverter Systems</li><li>No Generator Required</li><li>Quiet Operation</li></ul></div>
            </article>
            <article className="feature-row feat-comfort">
              <figure className="feature-media"><img src="/optimized/media/cooler.avif" alt="Electric cooler and finished interior inside an Ice House trailer" loading="lazy" decoding="async" /></figure>
              <div className="feature-text"><p className="feature-index">04</p><h3>Comfort</h3><p>A warm, finished interior set against the cold - built-in shelves, counter space, comfortable seating, and climate control that hold the line on game day.</p><ul className="feature-list"><li>Integrated Storage</li><li>Counter Space</li><li>Comfortable Seating</li><li>Climate-Controlled Interior</li></ul></div>
            </article>
          </div>
        </div>
      </section>

      <section className="section-band frost-band product-preview-section">
        <div className="section-shell">
          <div className="section-heading narrow-heading"><p className="eyebrow">Choose Your Build</p><h2>PRODUCT PREVIEW</h2></div>
          <div className="product-preview-grid">
            <article className="model-panel large-model"><img src="/optimized/media/icehouse.avif" alt="Ice House flagship trailer" loading="lazy" decoding="async" /><div className="model-panel-content"><span>ICE HOUSE</span><h3>Flagship Model</h3><p>Starting at $19,500</p><Link className="ice-link" to="/products#ice-house">EXPLORE MODEL</Link></div></article>
            <article className="model-panel compact-model"><img src="/optimized/media/icechest.avif" alt="Ice Chest compact trailer" loading="lazy" decoding="async" /><div className="model-panel-content"><span>ICE CHEST</span><h3>Compact Model</h3><p>Starting at $12,500</p><Link className="ice-link" to="/products#ice-chest">EXPLORE MODEL</Link></div></article>
          </div>
        </div>
      </section>

      <section className="section-band final-cta">
        <div className="section-shell cta-stack">
          <div className="cta-slab"><div><p className="eyebrow">Game Day Awaits</p><h2>READY FOR GAME DAY?</h2></div><div className="cta-actions"><div className="cta-action-card"><p className="eyebrow">Contact Ice House</p><p className="cta-action-copy">Contact us to talk through trailer models, customization options, and next steps.</p><Link className="ice-button primary" to="/contact">CONTACT ICE HOUSE</Link></div></div></div>
          <SisterBrandCta />
        </div>
      </section>
    </main>
  );
}