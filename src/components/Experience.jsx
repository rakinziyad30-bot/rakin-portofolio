import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, MapPin, Calendar, Layers } from 'lucide-react';
import { experienceData } from '../data/experience';

export default function Experience() {
  // Default open the current position (EXP-01) so the user immediately sees rich content
  const [openIds, setOpenIds] = useState(['EXP-01']);

  const toggleItem = (id) => {
    setOpenIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  const expandAll = () => {
    setOpenIds(experienceData.map((e) => e.id));
  };

  const collapseAll = () => {
    setOpenIds([]);
  };

  return (
    <section
      id="experience"
      className="experience-section"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        {/* Section Index Bar (Dark Surface Variant) */}
        <div className="section-index-bar">
          <div className="section-index-left">
            <span className="index-badge index-badge--dark">03 // CAREER CHRONOLOGY</span>
            <span className="mono-label" style={{ color: 'var(--color-ivory)' }}>
              AUTOMOTIVE OPERATIONS & TECHNICAL LEDGER
            </span>
          </div>
          <span className="mono-label" style={{ color: 'var(--color-olive)' }}>
            2021 — PRESENT // 05 ROLES
          </span>
        </div>

        {/* Section Header & Expand Controls */}
        <div className="experience-header-grid">
          <div>
            <h2 id="experience-heading" className="experience-title">
              Professional
              <br />
              Experience.
            </h2>
          </div>

          <div className="experience-controls">
            <p
              style={{
                fontSize: '0.96rem',
                color: 'rgba(245, 242, 234, 0.82)',
                maxWidth: '460px',
                textAlign: 'right',
              }}
            >
              Real-world operational history across spare parts management, EPC catalog
              verification, quality control inspection, and mechanical diagnostics.
            </p>
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <button
                type="button"
                className="btn btn-dark-surface"
                style={{ padding: '0.5rem 0.9rem', fontSize: '0.7rem' }}
                onClick={expandAll}
              >
                Expand All ({experienceData.length})
              </button>
              <button
                type="button"
                className="btn btn-dark-surface"
                style={{ padding: '0.5rem 0.9rem', fontSize: '0.7rem' }}
                onClick={collapseAll}
              >
                Collapse All
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Expandable Timeline Ledger */}
        <div className="timeline-ledger" role="list">
          {experienceData.map((exp, idx) => {
            const isOpen = openIds.includes(exp.id);
            return (
              <motion.div
                key={exp.id}
                role="listitem"
                className={`timeline-item ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
              >
                <button
                  type="button"
                  className="timeline-trigger"
                  onClick={() => toggleItem(exp.id)}
                  aria-expanded={isOpen}
                  aria-controls={`exp-panel-${exp.id}`}
                  data-cursor={isOpen ? 'CLOSE' : 'EXPAND'}
                >
                  {/* Animated Timeline Node Indicator */}
                  <span className="timeline-index-node">
                    <span className="node-marker" aria-hidden="true" />
                    <span>[{exp.index}]</span>
                  </span>

                  {/* Company Name */}
                  <div>
                    <div className="timeline-company">{exp.company}</div>
                    {exp.isCurrent && (
                      <span
                        className="mono-label"
                        style={{
                          color: 'var(--color-olive)',
                          fontSize: '0.68rem',
                          display: 'inline-block',
                          marginTop: '0.2rem',
                        }}
                      >
                        ● CURRENT ROLE
                      </span>
                    )}
                  </div>

                  {/* Position Badge */}
                  <span className="timeline-role-badge">{exp.position}</span>

                  {/* Period & Location */}
                  <div className="timeline-period-loc">
                    <span>
                      <Calendar
                        size={12}
                        style={{ display: 'inline', verticalAlign: '-1px', marginRight: '5px' }}
                      />
                      {exp.period}
                    </span>
                    <span>
                      <MapPin
                        size={12}
                        style={{ display: 'inline', verticalAlign: '-1px', marginRight: '5px' }}
                      />
                      {exp.location}
                    </span>
                  </div>

                  {/* Expand / Collapse Icon */}
                  <span className="timeline-toggle-icon" aria-hidden="true">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </button>

                {/* Expandable Responsibilities Drawer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`exp-panel-${exp.id}`}
                      className="timeline-details-panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="timeline-details-inner">
                        <div>
                          <div
                            className="mono-label"
                            style={{ color: 'var(--color-olive)', marginBottom: '0.75rem' }}
                          >
                            KEY RESPONSIBILITIES & SCOPE:
                          </div>
                          <ul className="responsibility-list">
                            {exp.responsibilities.map((resp, rIdx) => (
                              <li className="responsibility-item" key={resp}>
                                <span className="responsibility-bullet">0{rIdx + 1} //</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="experience-context-box">
                          <div
                            className="mono-label"
                            style={{ color: 'var(--color-olive)', marginBottom: '0.45rem' }}
                          >
                            <Layers
                              size={13}
                              style={{
                                display: 'inline',
                                verticalAlign: '-2px',
                                marginRight: '6px',
                              }}
                            />
                            OPERATIONAL DISCIPLINE
                          </div>
                          <p
                            style={{
                              fontSize: '0.88rem',
                              lineHeight: 1.55,
                              color: 'rgba(245, 242, 234, 0.88)',
                            }}
                          >
                            {exp.operationalNote}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
