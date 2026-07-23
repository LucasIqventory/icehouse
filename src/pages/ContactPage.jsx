import { useEffect, useState } from 'react';
import { icehouseProducts } from '../data/products';

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').replace(/\/$/, '');

const hearOptions = [
  'Google or online search',
  'Social media',
  'Referral from a friend or client',
  'Local event or saw a trailer nearby',
  'Game day or stadium parking lot',
  'Other'
];

const buildTypeOptions = [
  ...icehouseProducts.map((product) => product.name),
  'Customization / add-ons',
  "Not sure yet, let's talk"
];

export default function ContactPage() {
  const [status, setStatus] = useState('');

  useEffect(() => {
    document.title = 'Contact | Ice House Tailgating';
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const fields = new FormData(form);
    setStatus('Sending message...');

    try {
      const response = await fetch(`${apiBaseUrl}/cmv-icehouse/submitContact/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.get('name'),
          email: fields.get('email'),
          phone: fields.get('phone'),
          type: fields.get('type'),
          message: fields.get('message'),
          'heard-from': fields.get('heard-from'),
          source: 'icehouse'
        })
      });

      if (!response.ok) {
        throw new Error('Message could not be sent right now.');
      }

      form.reset();
      setStatus('Message sent. We will be in touch.');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Message could not be sent right now.');
    }
  }

  return (
    <main id="main">
      <section className="hero hero-contact" aria-label="Contact Ice House"><div className="hero-media" aria-hidden="true"><img src="/optimized/media/tailgatehero.avif" alt="" decoding="async" fetchPriority="high" /></div><div className="section-shell hero-content product-hero-copy"><p className="eyebrow">Let&apos;s Talk Game Day.</p><h1>CONTACT ICE HOUSE</h1><p className="hero-copy">Contact us to learn more about available models, customization options, and ordering.</p></div></section>
      <section className="section-band frost-band contact-section"><div className="section-shell contact-grid">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <input type="hidden" name="site" value="icehouse" />
          <input type="hidden" name="form-context" value="contact-page" />
          <div className="form-heading"><p className="eyebrow">Contact Form</p><h2>SEND MESSAGE</h2></div>
          <div className="form-grid">
            <label><span>Your name</span><input type="text" name="name" autoComplete="name" required /></label>
            <label><span>Email</span><input type="email" name="email" autoComplete="email" required /></label>
            <label><span>Phone</span><input type="tel" name="phone" autoComplete="tel" /></label>
            <label><span>What are we building?</span><select name="type" defaultValue=""><option value="">Select one</option>{buildTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
            <label className="full-field"><span>Tell us about it</span><textarea name="message" rows="3" placeholder="Where will it take you? Who's coming along?" /></label>
            <label className="full-field"><span>How did you hear about us?</span><select name="heard-from" defaultValue=""><option value="">Select one</option>{hearOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
          </div>
          <button className="ice-button primary" type="submit">SEND MESSAGE</button>
          <p className="form-status" role="status" aria-live="polite">{status}</p>
        </form>
        <div className="contact-side-rail">
          <aside className="company-panel" aria-label="Company information"><p className="eyebrow">Company Information</p><h2>ICE HOUSE TAILGATING</h2><p>A Division of Crescent Moon Vans, LLC</p><address>995 Holland Ave<br />Cayce, SC 29033</address><p>By Appointment Only</p><figure className="contact-logo-mark"><img src="/IceHouselogos/Color%20Igloo%20+%20White%20Tag.png" alt="Ice House Tailgating logo" loading="lazy" decoding="async" /></figure></aside>
          <div className="contact-cmv-card"><p className="cmv-eyebrow">Sister Brand</p><h3 className="contact-cmv-title">More interested in custom and prebuilt vans?</h3><p className="contact-cmv-copy">Crescent Moon Vans builds custom campervans, mobile business builds, shell builds, and ready-to-go floorplans.</p><p className="cmv-hand">do whatever you want, wherever you want</p><a className="cmv-button" href="https://crescentmoonvans.com/" target="_blank" rel="noopener noreferrer">Visit Crescent Moon Vans</a></div>
        </div>
      </div></section>
    </main>
  );
}