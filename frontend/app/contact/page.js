'use client';
import { useState } from 'react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise(r => setTimeout(r, 1000));
    setStatus({ type: 'success', text: 'Thank you! We will get back to you soon.' });
    setForm({ name: '', email: '', message: '' });
    setLoading(false);
  };

  return (
    <>
      <section className={styles.pageHeader}>
        <div className="container">
          <h1>Contact Us</h1>
          <p>We&apos;d love to hear from you</p>
        </div>
      </section>

      <section className={`section`}>
        <div className="container">
          <div className={styles.grid}>
            {/* Contact Info */}
            <div className={styles.info}>
              <h2>Get In Touch</h2>
              <p className={styles.infoDesc}>
                Have questions about our courses? Want to enroll your child? Reach out to us through any of these channels.
              </p>

              <div className={styles.infoCards}>
                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>📞</span>
                  <div>
                    <h4>Phone</h4>
                    <a href="tel:+919566079479">+91 9566079479</a>
                    <br />
                    <a href="tel:+919840883393">+91 9840883393</a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>📧</span>
                  <div>
                    <h4>Email</h4>
                    <a href="mailto:krishkidsisland@gmail.com">krishkidsisland@gmail.com</a>
                  </div>
                </div>

                <div className={styles.infoCard}>
                  <span className={styles.infoIcon}>📍</span>
                  <div>
                    <h4>Address</h4>
                    <p>Plot No 122, Door No 7, 6th Street,<br />JB Estate, Avadi, Chennai - 600054</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919566079479?text=Hi,%20I%20am%20interested%20in%20your%20abacus%20courses"
                className={styles.whatsappBtn}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className={styles.formWrapper}>
              <div className={styles.formCard}>
                <h3>Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter your name"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Enter your email"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea
                      className="form-input form-textarea"
                      placeholder="How can we help you?"
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      required
                    ></textarea>
                  </div>
                  {status && (
                    <div className={`${styles.alert} ${styles[status.type]}`}>
                      {status.text}
                    </div>
                  )}
                  <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className={styles.mapSection}>
        <div className={styles.mapPlaceholder}>
          <span className={styles.mapIcon}>📍</span>
          <p>Map will be embedded here with your exact location</p>
          <p className={styles.mapAddress}>Plot No 122, Door No 7, 6th Street, JB Estate, Avadi, Chennai - 600054</p>
        </div>
      </section>
    </>
  );
}
