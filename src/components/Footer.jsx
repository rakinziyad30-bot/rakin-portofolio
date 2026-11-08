import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <span
            className="monogram-box"
            style={{
              width: '32px',
              height: '32px',
              fontSize: '0.85rem',
              backgroundColor: 'var(--color-olive)',
              color: 'var(--color-charcoal)',
              boxShadow: 'none',
            }}
          >
            RZ.
          </span>
          <span className="mono-label">
            © {new Date().getFullYear()} MUHAMMAD RAKIN ZIYAD — JAKARTA, INDONESIA
          </span>
        </div>

        <div className="mono-label" style={{ color: 'rgba(245, 242, 234, 0.72)' }}>
          BUILT WITH REACT, VITE &amp; FRAMER MOTION // 60:30:10 EDITORIAL SYSTEM
        </div>
      </div>
    </footer>
  );
}
