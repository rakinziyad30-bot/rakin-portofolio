import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileDown, Menu, X, ArrowUpRight } from 'lucide-react';
import MagneticButton from './MagneticButton';
import { downloadResumePlaceholder } from '../assets/resumeGenerator';

const NAV_ITEMS = [
  { id: 'about', label: 'About', index: '01' },
  { id: 'projects', label: 'Projects', index: '02' },
  { id: 'experience', label: 'Experience', index: '03' },
  { id: 'skills', label: 'Skills', index: '04' },
  { id: 'contact', label: 'Contact', index: '05' },
];

export default function Navbar({ onCvNotice }) {
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 240;

      if (window.scrollY < 180) {
        setActiveSection('');
        return;
      }

      for (const item of NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadCv = () => {
    downloadResumePlaceholder();
    if (onCvNotice) {
      onCvNotice('Downloaded verified CV summary (.txt) — Official PDF CV asset placeholder.');
    }
  };

  return (
    <header className="navbar-wrapper" role="banner">
      <div className="container navbar-inner">
        {/* Monogram Logo: RZ. */}
        <a
          href="#top"
          className="brand-monogram"
          data-cursor="HOME"
          aria-label="Muhammad Rakin Ziyad — Back to top"
        >
          <span className="monogram-box">RZ.</span>
          <div className="brand-meta">
            <span className="brand-meta-name">M. RAKIN ZIYAD</span>
            <span className="brand-meta-role">IT UNDERGRAD // DEV</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-links-desktop" aria-label="Primary Navigation">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className={`nav-item-btn ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="navActivePill"
                    className="nav-active-pill"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  />
                )}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Actions: Download CV & Mobile Toggle */}
        <div className="nav-actions">
          <MagneticButton
            className="btn btn-primary nav-cv-btn"
            onClick={handleDownloadCv}
            cursorText="CV"
            ariaLabel="Download CV"
          >
            <FileDown size={14} strokeWidth={2.2} />
            <span>Download CV</span>
          </MagneticButton>

          <button
            type="button"
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            className="mobile-nav-drawer"
            aria-label="Mobile Navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <ul className="mobile-nav-list">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      style={{ width: '100%' }}
                      className={`mobile-nav-link ${isActive ? 'is-active' : ''}`}
                      onClick={() => scrollToSection(item.id)}
                    >
                      <span>
                        [{item.index}] {item.label}
                      </span>
                      <ArrowUpRight size={16} />
                    </button>
                  </li>
                );
              })}
            </ul>
            <button
              type="button"
              className="btn btn-primary"
              style={{ width: '100%' }}
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadCv();
              }}
            >
              <FileDown size={15} />
              <span>Download CV [Verified Summary]</span>
            </button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
