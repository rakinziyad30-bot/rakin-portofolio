import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Github,
  ExternalLink,
  Layers,
  CheckSquare,
  FileWarning,
  ArrowUpRight,
} from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
        >
          <motion.div
            className="modal-window"
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Modal Header */}
            <div className="modal-header">
              <div>
                <span className="mono-label" style={{ color: 'var(--color-olive)' }}>
                  TECHNICAL SPECIFICATION // {project.id}
                </span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={onClose}
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="modal-content">
              <div>
                <span className="mono-label" style={{ color: 'var(--color-charcoal-muted)' }}>
                  {project.category}
                </span>
                <h3
                  id="modal-project-title"
                  className="project-title"
                  style={{ marginTop: '0.35rem', marginBottom: '0.75rem' }}
                >
                  {project.title}
                </h3>
                <p className="project-description" style={{ marginBottom: 0 }}>
                  {project.description}
                </p>
              </div>

              {/* Screenshot Placeholder Notice & Wireframe */}
              <div className="placeholder-schematic-frame">
                <div className="placeholder-banner-badge">
                  <span>
                    <FileWarning
                      size={13}
                      style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }}
                    />
                    {project.screenshotPlaceholder.status}
                  </span>
                  <span>[{project.id}]</span>
                </div>
                <div className="wireframe-canvas">
                  <div
                    className="mono-label"
                    style={{ marginBottom: '0.35rem', color: 'var(--color-charcoal-muted)' }}
                  >
                    {project.screenshotPlaceholder.schematicTitle}
                  </div>
                  {project.screenshotPlaceholder.rows.map((row) => (
                    <div className="wireframe-row" key={row.label}>
                      <strong>{row.label}</strong>
                      <span>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture & Technologies Grid */}
              <div className="modal-spec-grid">
                <div className="modal-spec-cell">
                  <span className="dossier-key">ARCHITECTURAL PATTERN</span>
                  <p style={{ fontWeight: 600, marginTop: '0.35rem', fontSize: '0.95rem' }}>
                    <Layers
                      size={15}
                      style={{ display: 'inline', verticalAlign: '-2px', marginRight: '6px' }}
                    />
                    {project.architectureType}
                  </p>
                </div>
                <div className="modal-spec-cell">
                  <span className="dossier-key">TECHNOLOGIES USED</span>
                  <div
                    className="project-tech-stack"
                    style={{ marginTop: '0.5rem', marginBottom: 0 }}
                  >
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag tech-tag--highlight">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Documented Capabilities */}
              <div>
                <span className="dossier-key" style={{ display: 'block', marginBottom: '0.75rem' }}>
                  DOCUMENTED FUNCTIONAL SCOPE (VERIFIED)
                </span>
                <div className="modal-feature-list">
                  {project.coreCapabilities.map((item) => (
                    <div className="modal-feature-item" key={item}>
                      <CheckSquare
                        size={16}
                        style={{ flexShrink: 0, marginTop: '3px', color: 'var(--color-charcoal)' }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Repository & Live Demo Links */}
              <div className="project-actions-footer">
                <div className="project-links-group">
                  {project.links.demoUrl ? (
                    <a
                      href={project.links.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink size={15} />
                      <span>Launch Live Demo</span>
                      <ArrowUpRight size={15} />
                    </a>
                  ) : (
                    <span className="placeholder-link-pill">
                      <ExternalLink size={14} />
                      <span>{project.links.demoPlaceholderLabel}</span>
                    </span>
                  )}
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                  {project.links.repoUrl && (
                    <a
                      href={project.links.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                    >
                      <Github size={15} />
                      <span>Open Repo ({project.links.repoLabel})</span>
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
