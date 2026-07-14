import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    document.title = 'Contact | Ice House Tailgating';
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setStatus('Message staged for the mockup.');
    event.currentTarget.reset();
  }

  return (
    <main id="main">
      <section className="hero hero-contact" aria-label="Contact Ice House"><div className="hero-media" aria-hidden="true"><img src="/media/tailgatehero.avif" alt="" /></div><div className="section-shell hero-content product-hero-copy"><p className="eyebrow">Let&apos;s Talk Game Day.</p><h1>CONTACT ICE HOUSE</h1><p className="hero-copy">Contact us to learn more about available models, customization options, and ordering.</p></div></section>
      <section className="section-band frost-band contact-section"><div className="section-shell contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-heading"><p className="eyebrow">Contact Form</p><h2>SEND MESSAGE</h2></div>
          <div className="form-grid">
            <label><span>First Name</span><input type="text" name="first-name" autoComplete="given-name" required /></label>
            <label><span>Last Name</span><input type="text" name="last-name" autoComplete="family-name" required /></label>
            <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
            <label><span>Phone</span><input type="tel" name="phone" autoComplete="tel" /></label>
            <label className="full-field"><span>Subject</span><input type="text" name="subject" required /></label>
            <label className="full-field"><span>Message</span><textarea name="message" rows="3" required /></label>
          </div>
          <button className="ice-button primary" type="submit">SEND MESSAGE</button>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
        <div className="contact-side-rail">
          <aside className="company-panel" aria-label="Company information"><p className="eyebrow">Company Information</p><h2>ICE HOUSE TAILGATING</h2><p>A Division of Crescent Moon Vans, LLC</p><address>995 Holland Ave<br />Cayce, SC 29033</address><p>By Appointment Only</p><figure className="contact-logo-mark"><img src="/IceHouselogos/Color%20Igloo%20+%20White%20Tag.png" alt="Ice House Tailgating logo" /></figure></aside>
          <div className="contact-cmv-card"><p className="cmv-eyebrow">Sister Brand</p><h3 className="contact-cmv-title">More interested in custom and prebuilt vans?</h3><p className="contact-cmv-copy">Crescent Moon Vans builds custom campervans, mobile business builds, shell builds, and ready-to-go floorplans.</p><p className="cmv-hand">do whatever you want, wherever you want</p><a className="cmv-button" href="https://crescent-moon-vans.web.app/" target="_blank" rel="noopener noreferrer">Visit Crescent Moon Vans</a></div>
        </div>
      </div></section>
    </main>
  );
}