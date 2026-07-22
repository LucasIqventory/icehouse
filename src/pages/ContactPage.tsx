import { useEffect, useState } from 'react';
import { CONTACT_SOURCE, submitContact, type ContactFormValues } from '../api/contact.ts';
import { icehouseProducts } from '../data/products';

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

interface FieldErrors {
  name: string;
  email: string;
}

interface FormStatus {
  tone: 'idle' | 'success' | 'error';
  message: string;
}

const initialFormValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  type: '',
  message: '',
  heardFrom: ''
};

const initialFieldErrors: FieldErrors = {
  name: '',
  email: ''
};

const initialStatus: FormStatus = {
  tone: 'idle',
  message: ''
};

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function validateFormValues(values: ContactFormValues): FieldErrors {
  const errors: FieldErrors = { ...initialFieldErrors };
  const trimmedName = values.name.trim();
  const trimmedEmail = values.email.trim();

  if (!trimmedName) {
    errors.name = 'Please enter your name.';
  }

  if (!trimmedEmail) {
    errors.email = 'Please enter your email address.';
  } else if (!isValidEmail(trimmedEmail)) {
    errors.email = 'Please enter a valid email address.';
  }

  return errors;
}

function hasFieldErrors(errors: FieldErrors): boolean {
  return Boolean(errors.name || errors.email);
}

export default function ContactPage() {
  const [formValues, setFormValues] = useState<ContactFormValues>(initialFormValues);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>(initialFieldErrors);
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = 'Contact | Ice House Tailgating';
  }, []);

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ): void {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name === 'heard-from' ? 'heardFrom' : name]: value,
    }));

    if (name === 'name' || name === 'email') {
      setFieldErrors((currentErrors) => {
        if (!currentErrors[name]) {
          return currentErrors;
        }

        return {
          ...currentErrors,
          [name]: ''
        };
      });
    }

    setStatus((currentStatus) => (currentStatus.tone === 'error' ? initialStatus : currentStatus));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    const nextFieldErrors = validateFormValues(formValues);
    setFieldErrors(nextFieldErrors);

    if (hasFieldErrors(nextFieldErrors)) {
      setStatus({ tone: 'error', message: 'Please correct the highlighted fields and try again.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(initialStatus);

    const result = await submitContact(formValues, CONTACT_SOURCE);

    setStatus({
      tone: result.ok ? 'success' : 'error',
      message: result.message,
    });

    if (result.ok) {
      setFormValues(initialFormValues);
      setFieldErrors(initialFieldErrors);
    }

    setIsSubmitting(false);
  }

  return (
    <main id="main">
      <section className="hero hero-contact" aria-label="Contact Ice House"><div className="hero-media" aria-hidden="true"><img src="/optimized/media/tailgatehero.avif" alt="" decoding="async" fetchPriority="high" /></div><div className="section-shell hero-content product-hero-copy"><p className="eyebrow">Let&apos;s Talk Game Day.</p><h1>CONTACT ICE HOUSE</h1><p className="hero-copy">Contact us to learn more about available models, customization options, and ordering.</p></div></section>
      <section className="section-band frost-band contact-section"><div className="section-shell contact-grid">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-heading"><p className="eyebrow">Contact Form</p><h2>SEND MESSAGE</h2></div>
          <div className="form-grid">
            <label><span>Your name</span><input type="text" name="name" autoComplete="name" required value={formValues.name} onChange={handleInputChange} aria-invalid={fieldErrors.name ? 'true' : 'false'} aria-describedby={fieldErrors.name ? 'contact-name-error' : undefined} /></label>
            <label><span>Email</span><input type="email" name="email" autoComplete="email" required value={formValues.email} onChange={handleInputChange} aria-invalid={fieldErrors.email ? 'true' : 'false'} aria-describedby={fieldErrors.email ? 'contact-email-error' : undefined} /></label>
            <label><span>Phone</span><input type="tel" name="phone" autoComplete="tel" value={formValues.phone ?? ''} onChange={handleInputChange} /></label>
            <label><span>What are we building?</span><select name="type" value={formValues.type ?? ''} onChange={handleInputChange}><option value="">Select one</option>{buildTypeOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
            <label className="full-field"><span>Tell us about it</span><textarea name="message" rows="3" placeholder="Where will it take you? Who's coming along?" value={formValues.message ?? ''} onChange={handleInputChange} /></label>
            <label className="full-field"><span>How did you hear about us?</span><select name="heard-from" value={formValues.heardFrom ?? ''} onChange={handleInputChange}><option value="">Select one</option>{hearOptions.map((option) => <option key={option} value={option}>{option}</option>)}</select></label>
            {fieldErrors.name ? <p className="field-error-message full-field" id="contact-name-error">{fieldErrors.name}</p> : null}
            {fieldErrors.email ? <p className="field-error-message full-field" id="contact-email-error">{fieldErrors.email}</p> : null}
          </div>
          <button className="ice-button primary" type="submit" disabled={isSubmitting}>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</button>
          <p className={`form-status${status.tone === 'success' ? ' is-success' : ''}${status.tone === 'error' ? ' is-error' : ''}`} role="status" aria-live="polite">{status.message}</p>
        </form>
        <div className="contact-side-rail">
          <aside className="company-panel" aria-label="Company information"><p className="eyebrow">Company Information</p><h2>ICE HOUSE TAILGATING</h2><p>A Division of Crescent Moon Vans, LLC</p><address>995 Holland Ave<br />Cayce, SC 29033</address><p>By Appointment Only</p><figure className="contact-logo-mark"><img src="/IceHouselogos/Color%20Igloo%20+%20White%20Tag.png" alt="Ice House Tailgating logo" loading="lazy" decoding="async" /></figure></aside>
          <div className="contact-cmv-card"><p className="cmv-eyebrow">Sister Brand</p><h3 className="contact-cmv-title">More interested in custom and prebuilt vans?</h3><p className="contact-cmv-copy">Crescent Moon Vans builds custom campervans, mobile business builds, shell builds, and ready-to-go floorplans.</p><p className="cmv-hand">do whatever you want, wherever you want</p><a className="cmv-button" href="https://crescentmoonvans.com/" target="_blank" rel="noopener noreferrer">Visit Crescent Moon Vans</a></div>
        </div>
      </div></section>
    </main>
  );
}