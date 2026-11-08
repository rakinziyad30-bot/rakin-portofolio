import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Copy,
  Check,
  Github,
  Linkedin,
  MapPin,
  ArrowUp,
  ArrowUpRight,
} from 'lucide-react';
import MagneticButton from './MagneticButton';

const EMAIL_ADDRESS = 'rakinziyad30@gmail.com';
const GITHUB_URL = 'https://github.com/rakinziyad30-bot';
const LINKEDIN_URL = 'https://www.linkedin.com/in/muhammad-rakin-ziyad-06a767233/';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      // Fallback copy method
      const textArea = document.createElement('textarea');
      textArea.value = EMAIL_ADDRESS;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="container">
        {/* Section Index Bar */}
        <div className="section-index-bar">
          <div className="section-index-left">
            <span className="index-badge">06 // DIRECT CHANNEL</span>
            <span className="mono-label">INITIATE CONVERSATION OR REQUEST DOSSIER</span>
          </div>
          <span className="mono-label">JAKARTA, INDONESIA</span>
        </div>

        <motion.div
          className="contact-brutalist-frame"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          {/* Top Dark Header Bar */}
          <div className="contact-top-banner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span className="status-dot-pulse" aria-hidden="true" />
              <span className="mono-label">
                AVAILABLE FOR JUNIOR FRONTEND, WEB &amp; SOFTWARE DEVELOPER ROLES
              </span>
            </div>
            <span className="mono-label" style={{ color: 'var(--color-olive)' }}>
              RESPONSE CHANNEL // ACTIVE
            </span>
          </div>

          {/* Main Contact Grid */}
          <div className="contact-main-body">
            <div>
              <span className="mono-label" style={{ color: 'var(--color-charcoal-muted)' }}>
                MUHAMMAD RAKIN ZIYAD
              </span>
              <h2 id="contact-heading" className="contact-headline" style={{ marginTop: '0.35rem' }}>
                Let&apos;s build practical, dependable software.
              </h2>
              <p style={{ fontSize: '1.05rem', maxWidth: '540px', lineHeight: 1.65 }}>
                Whether you are hiring for a Junior Developer position, looking for an intern who
                understands real-world operations, or want to discuss a project, reach out directly
                below.
              </p>

              {/* Email Action Box */}
              <div className="contact-email-box">
                <div>
                  <span className="dossier-key">PRIMARY EMAIL ADDRESS</span>
                  <div className="contact-email-address">{EMAIL_ADDRESS}</div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  <MagneticButton
                    href={`mailto:${EMAIL_ADDRESS}`}
                    className="btn btn-primary"
                    cursorText="MAIL"
                  >
                    <Mail size={15} />
                    <span>Send Email</span>
                  </MagneticButton>

                  <MagneticButton
                    onClick={handleCopyEmail}
                    className="btn btn-secondary"
                    cursorText="COPY"
                    ariaLabel="Copy email address to clipboard"
                  >
                    {copied ? <Check size={15} /> : <Copy size={15} />}
                    <span>{copied ? 'Email Copied to Clipboard!' : 'Copy Email Address'}</span>
                  </MagneticButton>
                </div>
              </div>
            </div>

            {/* Right Column: Verified Contact Directory */}
            <div>
              <div className="contact-directory-card">
                <div className="dossier-title-bar">
                  <span>CONTACT DIRECTORY</span>
                  <span style={{ color: 'var(--color-olive)' }}>VERIFIED LINKS</span>
                </div>

                <div className="contact-dir-row">
                  <div>
                    <span className="dossier-key">FULL NAME</span>
                    <div style={{ fontWeight: 700, fontFamily: 'var(--font-heading)' }}>
                      Muhammad Rakin Ziyad
                    </div>
                  </div>
                  <span className="index-badge">ID</span>
                </div>

                <div className="contact-dir-row">
                  <div>
                    <span className="dossier-key">LOCATION</span>
                    <div style={{ fontWeight: 600 }}>Jakarta, Indonesia</div>
                  </div>
                  <MapPin size={18} />
                </div>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-dir-row"
                  data-cursor="GITHUB"
                >
                  <div>
                    <span className="dossier-key">GITHUB PROFILE</span>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.86rem',
                        fontWeight: 600,
                      }}
                    >
                      github.com/rakinziyad30-bot
                    </div>
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Github size={17} />
                    <ArrowUpRight size={15} />
                  </span>
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-dir-row"
                  data-cursor="LINKEDIN"
                >
                  <div>
                    <span className="dossier-key">LINKEDIN PROFILE</span>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.84rem',
                        fontWeight: 600,
                      }}
                    >
                      in/muhammad-rakin-ziyad-06a767233
                    </div>
                  </div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Linkedin size={17} />
                    <ArrowUpRight size={15} />
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Memorable Closing Statement + Back-to-Top Button */}
          <div className="contact-closing-bar">
            <p className="closing-quote">
              &ldquo;Trained on the workshop floor to inspect every component; driven in software
              to make every line of logic count.&rdquo;
            </p>

            <MagneticButton
              onClick={scrollToTop}
              className="btn btn-secondary"
              cursorText="TOP"
              ariaLabel="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp size={15} />
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
