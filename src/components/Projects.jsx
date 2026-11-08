import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Github,
  ExternalLink,
  Maximize2,
  Terminal,
  Database,
  Cpu,
  Code,
} from 'lucide-react';
import { projectsData } from '../data/projects';
import MagneticButton from './MagneticButton';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  const getProjectIcon = (index) => {
    switch (index) {
      case '01':
        return <Terminal size={15} />;
      case '02':
        return <Database size={15} />;
      case '03':
        return <Cpu size={15} />;
      default:
        return <Code size={15} />;
    }
  };

  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <div className="container">
        {/* Section Index Bar */}
        <div className="section-index-bar">
          <div className="section-index-left">
            <span className="index-badge">02 // SELECTED WORKS</span>
            <span className="mono-label">HANDS-ON DEVELOPMENT ARCHIVE</span>
          </div>
          <span className="mono-label">04 DOCUMENTED PROJECTS</span>
        </div>

        {/* Section Intro & Authenticity Notice */}
        <div className="projects-intro-row">
          <div>
            <h2 id="projects-heading" className="projects-heading">
              Featured
              <br />
              Projects.
            </h2>
          </div>
          <div className="projects-authenticity-note">
            <strong>TRANSPARENCY NOTE:</strong> All projects link directly to verified GitHub
            repositories and live GitHub Pages demos (where applicable). Unprovided screenshots are
            explicitly represented via interactive technical schematics.
          </div>
        </div>

        {/* Distinct Layouts for Each Project */}
        <div className="projects-showcase-stack">
          {projectsData.map((project, idx) => {
            const isReversed = project.layoutVariant === 'split-right';
            const isFullBanner = project.layoutVariant === 'full-banner';
            const isOopBlueprint = project.layoutVariant === 'oop-blueprint';

            let bodyLayoutClass = 'project-body-split';
            if (isReversed) bodyLayoutClass = 'project-body-split is-reversed';
            if (isFullBanner || isOopBlueprint) bodyLayoutClass = 'project-body-full';

            return (
              <motion.article
                key={project.id}
                className="project-feature-item"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: idx * 0.06 }}
              >
                {/* Brutalist Top Metadata Bar */}
                <div className="project-top-meta">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span style={{ color: 'var(--color-olive)', fontWeight: 700 }}>
                      [{project.index}]
                    </span>
                    <span>{project.id}</span>
                    <span>—</span>
                    <span>{project.category}</span>
                  </div>
                  <div className="project-top-meta-right">
                    <span>REPO // {project.links.repoLabel}</span>
                  </div>
                </div>

                {/* Unique Split / Blueprint Body */}
                <div className={bodyLayoutClass}>
                  {/* Interactive Large Schematic Preview Stage */}
                  <div
                    className="project-preview-stage"
                    onClick={() => setSelectedProject(project)}
                    data-cursor="INSPECT"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="placeholder-schematic-frame">
                      <div className="placeholder-banner-badge">
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          {getProjectIcon(project.index)}
                          {project.screenshotPlaceholder.status}
                        </span>
                        <span>CLICK TO INSPECT</span>
                      </div>

                      <div className="wireframe-canvas">
                        <div
                          className="mono-label"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            borderBottom: '1px solid var(--color-charcoal)',
                            paddingBottom: '0.45rem',
                            marginBottom: '0.25rem',
                          }}
                        >
                          <span>{project.screenshotPlaceholder.schematicTitle}</span>
                          <span>SPEC #{project.index}</span>
                        </div>

                        {project.screenshotPlaceholder.rows.map((row, rIdx) => {
                          const rowKey = `${project.id}-${rIdx}`;
                          const isRowActive = hoveredRow === rowKey;
                          return (
                            <div
                              key={row.label}
                              className="wireframe-row"
                              onMouseEnter={() => setHoveredRow(rowKey)}
                              onMouseLeave={() => setHoveredRow(null)}
                              style={{
                                backgroundColor: isRowActive
                                  ? 'var(--color-olive)'
                                  : 'var(--color-ivory)',
                                transition: 'background-color 150ms ease',
                              }}
                            >
                              <span style={{ fontWeight: 600 }}>{row.label}</span>
                              <span>{row.value}</span>
                            </div>
                          );
                        })}

                        {/* Extra visual distinction for OOP Blueprint (Project 04) */}
                        {isOopBlueprint && (
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '1fr auto 1fr',
                              alignItems: 'center',
                              gap: '0.5rem',
                              marginTop: '0.35rem',
                              padding: '0.55rem',
                              backgroundColor: 'var(--color-charcoal)',
                              color: 'var(--color-ivory)',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '0.7rem',
                            }}
                          >
                            <div style={{ textAlign: 'center' }}>
                              <strong style={{ color: 'var(--color-olive)' }}>Class A</strong>
                              <div>Data Management</div>
                            </div>
                            <div style={{ color: 'var(--color-olive)' }}>⇄</div>
                            <div style={{ textAlign: 'center' }}>
                              <strong style={{ color: 'var(--color-olive)' }}>Class B</strong>
                              <div>Program Execution</div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div
                        className="mono-label"
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          color: 'var(--color-charcoal-muted)',
                        }}
                      >
                        <span>ARCH: {project.architectureType}</span>
                        <span
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            color: 'var(--color-charcoal)',
                            fontWeight: 600,
                          }}
                        >
                          <Maximize2 size={12} /> Modal Spec
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Editorial Info Panel */}
                  <div className="project-info-panel">
                    <div>
                      <div
                        className="mono-label"
                        style={{ color: 'var(--color-charcoal-muted)', marginBottom: '0.45rem' }}
                      >
                        PROJECT // 0{idx + 1}
                      </div>

                      <h3 className="project-title">{project.title}</h3>

                      <p className="project-description">{project.description}</p>

                      <div className="mono-label" style={{ marginBottom: '0.5rem' }}>
                        TECHNOLOGY STACK:
                      </div>
                      <div className="project-tech-stack">
                        {project.technologies.map((tech, tIdx) => (
                          <span
                            key={tech}
                            className={`tech-tag ${tIdx === 0 ? 'tech-tag--highlight' : ''}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Links & Modal Trigger Footer */}
                    <div className="project-actions-footer">
                      <div className="project-links-group">
                        {project.links.repoUrl ? (
                          <MagneticButton
                            href={project.links.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            style={{ padding: '0.6rem 1rem', fontSize: '0.72rem' }}
                            cursorText="GITHUB"
                          >
                            <Github size={14} />
                            <span>GitHub Repository</span>
                            <ArrowUpRight size={14} />
                          </MagneticButton>
                        ) : (
                          <span className="placeholder-link-pill">
                            <Github size={13} />
                            <span>{project.links.repoPlaceholderLabel}</span>
                          </span>
                        )}

                        {project.links.demoUrl ? (
                          <MagneticButton
                            href={project.links.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            style={{ padding: '0.6rem 1rem', fontSize: '0.72rem' }}
                            cursorText="LIVE"
                          >
                            <ExternalLink size={14} />
                            <span>Live Demo</span>
                          </MagneticButton>
                        ) : (
                          <span
                            className="placeholder-link-pill"
                            title="Live demo URL not provided"
                          >
                            <ExternalLink size={13} />
                            <span>{project.links.demoPlaceholderLabel}</span>
                          </span>
                        )}
                      </div>

                      <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
                        <MagneticButton
                          className="btn btn-primary"
                          style={{ padding: '0.6rem 1.05rem', fontSize: '0.72rem' }}
                          onClick={() => setSelectedProject(project)}
                          cursorText="SPEC"
                        >
                          <span>Inspect Details</span>
                          <ArrowUpRight size={15} />
                        </MagneticButton>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
