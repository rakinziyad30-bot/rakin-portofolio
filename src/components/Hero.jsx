import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, FileDown, MapPin, Clock, Terminal, Layers, Camera } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { downloadResumePlaceholder } from '../assets/resumeGenerator';

const SCHEMATIC_MODES = {
  bridge: {
    label: '01 // DOMAIN BRIDGE',
    code: 'SYS-MAP: EPC -> CODE',
    nodes: [
      {
        key: 'EPC CATALOG VERIFICATION',
        val: 'Structured Data Lookup & Schema Accuracy',
      },
      {
        key: 'ENGINE & VEHICLE DIAGNOSTICS',
        val: 'Systematic Debugging & State Inspection',
      },
      {
        key: 'SPARE PARTS INVENTORY LEDGER',
        val: 'CRUD Operations, MySQL & localStorage',
      },
      {
        key: 'COST & COMPONENT ESTIMATION',
        val: 'Algorithmic Logic & Edge-Case Validation',
      },
    ],
  },
  stack: {
    label: '02 // ACTIVE FOCUS',
    code: 'UNINDRA // IT UNDERGRAD',
    nodes: [
      {
        key: 'FRONTEND INTERFACES',
        val: 'HTML, CSS, JavaScript, React Fundamentals',
      },
      {
        key: 'OBJECT-ORIENTED & DATA',
        val: 'Java (OOP), MySQL, Node.js Fundamentals',
      },
      {
        key: 'MODERN WORKFLOW',
        val: 'Git, GitHub, Vite, VS Code, REST APIs',
      },
      {
        key: 'ACADEMIC STANDING',
        val: 'GPA 3.64 / 4.00 — Universitas Indraprasta PGRI',
      },
    ],
  },
};

export default function Hero({ onCvNotice }) {
  const [jakartaTime, setJakartaTime] = useState('');
  const [activeSchematic, setActiveSchematic] = useState('bridge');
  const [photoIndex, setPhotoIndex] = useState(0);

  const photos = [
    {
      src: '/images/profile-main.jpg',
      label: 'FIG 01 // FIELD PORTRAIT',
      alt: 'Muhammad Rakin Ziyad — Outdoor Portrait',
    },
    {
      src: '/images/profile-alt.jpg',
      label: 'FIG 02 // CLOSE-UP PORTRAIT',
      alt: 'Muhammad Rakin Ziyad — Portrait',
    },
  ];

  useEffect(() => {
    const updateClock = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        });
        setJakartaTime(`${formatter.format(now)} WIB (UTC+7)`);
      } catch {
        setJakartaTime('JAKARTA // UTC+7');
      }
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleExploreProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleDownloadResume = () => {
    downloadResumePlaceholder();
    if (onCvNotice) {
      onCvNotice('Downloaded verified Resume summary (.txt) — Official PDF Resume placeholder.');
    }
  };

  const currentSchematic = SCHEMATIC_MODES[activeSchematic];
  const currentPhoto = photos[photoIndex];

  return (
    <section id="top" className="hero-section" aria-label="Introduction">
      <div className="container">
        {/* Top Telemetry / Specification Strip */}
        <motion.div
          className="hero-telemetry-bar"
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="telemetry-cell">
            <span className="telemetry-label">AVAILABILITY STATUS</span>
            <span className="telemetry-value">
              <span className="status-dot-pulse" aria-hidden="true" />
              <span>Open for Junior Dev Opportunities</span>
            </span>
          </div>

          <div className="telemetry-cell">
            <span className="telemetry-label">BASE LOCATION</span>
            <span className="telemetry-value">
              <MapPin size={14} strokeWidth={2.2} />
              <span>Jakarta, Indonesia</span>
            </span>
          </div>

          <div className="telemetry-cell">
            <span className="telemetry-label">LOCAL TIME (LIVE)</span>
            <span className="telemetry-value">
              <Clock size={14} strokeWidth={2.2} />
              <span>{jakartaTime || 'LOADING CLOCK...'}</span>
            </span>
          </div>

          <div className="telemetry-cell">
            <span className="telemetry-label">DISCIPLINE INDEX</span>
            <span className="telemetry-value">
              <span>[IT UNDERGRAD // GPA 3.64]</span>
            </span>
          </div>
        </motion.div>

        {/* Main Asymmetric Hero Grid */}
        <div className="hero-main-grid">
          {/* Left Column: Oversized Editorial Typography */}
          <div className="hero-editorial-col">
            <div>
              <motion.div
                className="hero-identity-tag"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <span className="accent">PORTFOLIO EDITION // 2026</span>
                <span className="mono-label">DOSSIER REF: MRZ-JKT</span>
              </motion.div>

              <motion.p
                className="hero-name-kicker"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.18 }}
              >
                MUHAMMAD RAKIN ZIYAD
              </motion.p>

              <motion.h1
                className="hero-headline"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              >
                From Automotive Operations to{' '}
                <span className="hero-headline-highlight">Software</span> Development.
              </motion.h1>
            </div>

            <div>
              <motion.div
                className="hero-supporting-wrap"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <span className="hero-supporting-index">ABSTRACT</span>
                <p className="hero-supporting-text">
                  An Information Technology undergraduate exploring the intersection of
                  technology, problem-solving, and practical software development.
                </p>
              </motion.div>

              <motion.div
                className="hero-cta-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42 }}
              >
                <MagneticButton
                  className="btn btn-primary"
                  onClick={handleExploreProjects}
                  cursorText="VIEW"
                >
                  <span>Explore Projects</span>
                  <ArrowDownRight size={16} strokeWidth={2.3} />
                </MagneticButton>

                <MagneticButton
                  className="btn btn-secondary"
                  onClick={handleDownloadResume}
                  cursorText="FILE"
                >
                  <FileDown size={15} strokeWidth={2.2} />
                  <span>Download Resume</span>
                </MagneticButton>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Editorial Profile Portrait + Interactive Technical Schematic */}
          <motion.aside
            className="hero-schematic-card"
            aria-label="Profile Portrait and Operational to Software Mapping"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              {/* Editorial Brutalist Portrait Frame */}
              <div className="hero-portrait-frame">
                <div className="hero-portrait-topbar">
                  <span className="mono-label" style={{ color: 'var(--color-charcoal)' }}>
                    <Camera
                      size={12}
                      style={{ display: 'inline', verticalAlign: '-2px', marginRight: '5px' }}
                    />
                    {currentPhoto.label}
                  </span>
                  <button
                    type="button"
                    className="portrait-switch-btn"
                    onClick={() => setPhotoIndex((prev) => (prev === 0 ? 1 : 0))}
                    data-cursor="SWITCH"
                  >
                    SWITCH PHOTO [{photoIndex + 1}/2]
                  </button>
                </div>

                <div className="hero-portrait-img-wrap">
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt}
                    className="hero-portrait-img"
                  />
                  <div className="portrait-corner-tag">MRZ // JAKARTA</div>
                </div>
              </div>

              <div className="schematic-header" style={{ marginTop: '1.15rem' }}>
                <span className="mono-label" style={{ color: 'var(--color-olive)' }}>
                  <Terminal
                    size={13}
                    style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }}
                  />
                  INTERACTIVE SPECIFICATION
                </span>
                <span className="mono-label">{currentSchematic.code}</span>
              </div>

              {/* Interactive Mode Switcher */}
              <div className="schematic-tabs" role="tablist" aria-label="Specification view">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSchematic === 'bridge'}
                  className={`schematic-tab-btn ${activeSchematic === 'bridge' ? 'is-active' : ''}`}
                  onClick={() => setActiveSchematic('bridge')}
                >
                  01 // Ops → Code
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeSchematic === 'stack'}
                  className={`schematic-tab-btn ${activeSchematic === 'stack' ? 'is-active' : ''}`}
                  onClick={() => setActiveSchematic('stack')}
                >
                  02 // Core Profile
                </button>
              </div>

              <div className="schematic-diagram-box">
                <motion.div
                  key={activeSchematic}
                  className="schematic-node-list"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {currentSchematic.nodes.map((node) => (
                    <div className="schematic-node" key={node.key}>
                      <span className="schematic-node-key">{node.key}</span>
                      <span className="schematic-node-val">{node.val}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            <div className="schematic-footer">
              <span>
                <Layers
                  size={13}
                  style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }}
                />
                LOC: JAKARTA, INDONESIA
              </span>
              <span>[INTERACTIVE PANEL]</span>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
