import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Briefcase, Camera } from 'lucide-react';

export default function About() {
  const [activePhoto, setActivePhoto] = useState(0);

  const photos = [
    {
      src: '/images/profile-main.jpg',
      caption: 'FIG. 01 // OUTDOOR FIELD PORTRAIT',
      alt: 'Muhammad Rakin Ziyad — Field Portrait',
    },
    {
      src: '/images/profile-alt.jpg',
      caption: 'FIG. 02 // CLOSE-UP PORTRAIT',
      alt: 'Muhammad Rakin Ziyad — Close-up Portrait',
    },
  ];

  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div className="container">
        {/* Section Index Bar */}
        <div className="section-index-bar">
          <div className="section-index-left">
            <span className="index-badge">01 // BIOGRAPHY</span>
            <h2 id="about-heading" className="mono-label">
              EDITORIAL PROFILE &amp; ACADEMIC STANDING
            </h2>
          </div>
          <span className="mono-label">JAKARTA, INDONESIA // UNINDRA IT</span>
        </div>

        {/* Asymmetric Editorial Spread */}
        <div className="about-editorial-layout">
          {/* Left Column: Structured Dossier Specification Card with Profile Portrait */}
          <motion.aside
            className="about-sidebar-dossier"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55 }}
          >
            <div className="dossier-title-bar">
              <span>PERSONNEL DOSSIER // MRZ</span>
              <span style={{ color: 'var(--color-olive)' }}>VERIFIED RECORD</span>
            </div>

            {/* Editorial Profile Photo Block inside Dossier */}
            <div className="dossier-portrait-block">
              <div className="dossier-portrait-img-container">
                <img
                  src={photos[activePhoto].src}
                  alt={photos[activePhoto].alt}
                  className="dossier-portrait-img"
                />
                <div className="dossier-portrait-overlay-badge">
                  <span>{photos[activePhoto].caption}</span>
                </div>
              </div>

              <div className="dossier-photo-controls">
                <span className="mono-label" style={{ fontSize: '0.68rem' }}>
                  <Camera
                    size={12}
                    style={{ display: 'inline', verticalAlign: '-2px', marginRight: '5px' }}
                  />
                  SELECT PORTRAIT VIEW:
                </span>
                <div style={{ display: 'flex', gap: '0.35rem' }}>
                  <button
                    type="button"
                    className={`dossier-photo-tab ${activePhoto === 0 ? 'is-active' : ''}`}
                    onClick={() => setActivePhoto(0)}
                  >
                    01 // FIELD
                  </button>
                  <button
                    type="button"
                    className={`dossier-photo-tab ${activePhoto === 1 ? 'is-active' : ''}`}
                    onClick={() => setActivePhoto(1)}
                  >
                    02 // CLOSE-UP
                  </button>
                </div>
              </div>
            </div>

            <div className="dossier-grid">
              <div className="dossier-row">
                <span className="dossier-key">FULL NAME</span>
                <span className="dossier-val">Muhammad Rakin Ziyad</span>
              </div>

              <div className="dossier-row">
                <span className="dossier-key">ACADEMIC INSTITUTION</span>
                <span className="dossier-val">
                  <GraduationCap
                    size={16}
                    style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }}
                  />
                  Universitas Indraprasta PGRI (UNINDRA)
                </span>
                <span className="mono-label" style={{ marginTop: '0.2rem' }}>
                  Bachelor&apos;s Degree in Information Technology (July 2024 – Present)
                </span>
              </div>

              <div className="dossier-row">
                <span className="dossier-key">CUMULATIVE GPA</span>
                <div className="dossier-gpa-badge">
                  <span>3.64</span>
                  <span style={{ fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>/ 4.00</span>
                </div>
              </div>

              <div className="dossier-row">
                <span className="dossier-key">CURRENT OPERATIONAL ROLE</span>
                <span className="dossier-val">
                  <Briefcase
                    size={15}
                    style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }}
                  />
                  Partsman — PT Astrido Jaya Mobilindo
                </span>
              </div>

              <div className="dossier-row">
                <span className="dossier-key">LOCATION</span>
                <span className="dossier-val">
                  <MapPin
                    size={15}
                    style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }}
                  />
                  Jakarta, Indonesia
                </span>
              </div>
            </div>
          </motion.aside>

          {/* Right Column: Editorial Typography & Narrative */}
          <div className="about-narrative-col">
            <motion.p
              className="about-lead-statement"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              Muhammad Rakin Ziyad is an{' '}
              <mark>Information Technology undergraduate</mark> at Universitas Indraprasta PGRI
              with a background in automotive operations, spare parts management, inventory
              administration, and vehicle inspection.
            </motion.p>

            <motion.div
              className="about-body-columns"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              <p className="about-paragraph">
                He is developing his software development skills through practical projects
                involving <strong>JavaScript, React fundamentals, Java, HTML, CSS, and MySQL</strong>.
                Rather than treating code in isolation, he approaches software as a practical tool
                for organizing data, validating inputs, and solving operational bottlenecks.
              </p>

              <p className="about-paragraph">
                His professional experience has helped him develop{' '}
                <strong>
                  attention to detail, problem-solving, teamwork, and an understanding of
                  real-world business operations
                </strong>
                — habits formed through verifying vehicle models in Electronic Parts Catalogs (EPC),
                conducting quality control inspections, and managing stock accuracy.
              </p>
            </motion.div>

            {/* 3-Column Supporting Visual Pillars */}
            <motion.div
              className="about-pillars-strip"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              <div className="about-pillar-cell">
                <span className="about-pillar-num">PILLAR // 01</span>
                <h3 className="about-pillar-title">Operational Precision</h3>
                <p className="about-pillar-desc">
                  Grounded in real-world spare parts administration, EPC model verification, and
                  standardized vehicle quality inspection.
                </p>
              </div>

              <div className="about-pillar-cell">
                <span className="about-pillar-num">PILLAR // 02</span>
                <h3 className="about-pillar-title">Hands-On Development</h3>
                <p className="about-pillar-desc">
                  Building functional web interfaces and OOP applications with HTML, CSS,
                  JavaScript, React fundamentals, Vite, and Java.
                </p>
              </div>

              <div className="about-pillar-cell">
                <span className="about-pillar-num">PILLAR // 03</span>
                <h3 className="about-pillar-title">Continuous Growth</h3>
                <p className="about-pillar-desc">
                  Balancing full-time operational responsibility with an IT degree at UNINDRA
                  (3.64/4.00 GPA) and consistent project practice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
