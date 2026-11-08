import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';
import { educationData, trainingData } from '../data/experience';

export default function Education() {
  return (
    <section id="education" className="education-section" aria-labelledby="education-heading">
      <div className="container">
        {/* Section Index Bar */}
        <div className="section-index-bar">
          <div className="section-index-left">
            <span className="index-badge">05 // ACADEMIC & TRAINING</span>
            <span className="mono-label">FORMAL EDUCATION & PROFESSIONAL CERTIFICATIONS</span>
          </div>
          <span className="mono-label">UNINDRA // SMKN 26 JAKARTA</span>
        </div>

        <div className="projects-intro-row" style={{ marginBottom: '2.5rem' }}>
          <h2 id="education-heading" className="projects-heading">
            Education &amp;
            <br />
            Training.
          </h2>
        </div>

        {/* Clean Split-Column Editorial Layout */}
        <motion.div
          className="education-editorial-grid"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
        >
          {educationData.map((edu) => (
            <div className="edu-card-column" key={edu.id}>
              <div>
                <div className="edu-period-tag">
                  <Calendar size={13} />
                  <span>{edu.period}</span>
                </div>

                <div
                  className="mono-label"
                  style={{ color: 'var(--color-charcoal-muted)', marginBottom: '0.35rem' }}
                >
                  [{edu.index}] // {edu.status.toUpperCase()}
                </div>

                <h3 className="edu-institution">{edu.institution}</h3>
                <p className="edu-degree">{edu.degree}</p>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.65,
                    color: 'var(--color-charcoal-muted)',
                  }}
                >
                  {edu.description}
                </p>
              </div>

              {edu.gpa ? (
                <div className="edu-gpa-highlight">
                  <div>
                    <span
                      className="mono-label"
                      style={{ color: 'var(--color-olive)', display: 'block' }}
                    >
                      ACADEMIC PERFORMANCE
                    </span>
                    <span style={{ fontSize: '0.9rem' }}>Cumulative Grade Point Average</span>
                  </div>
                  <div className="edu-gpa-number">{edu.gpa}</div>
                </div>
              ) : (
                <div
                  className="edu-gpa-highlight"
                  style={{
                    backgroundColor: 'var(--color-ivory-muted)',
                    color: 'var(--color-charcoal)',
                  }}
                >
                  <div>
                    <span className="mono-label" style={{ display: 'block' }}>
                      FOUNDATIONAL DISCIPLINE
                    </span>
                    <span style={{ fontSize: '0.9rem' }}>
                      4-Year Technical &amp; Vocational Engineering Track
                    </span>
                  </div>
                  <GraduationCap size={26} />
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Specialized Training & Certifications Strip */}
        <motion.div
          className="training-strip"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.12 }}
        >
          <div>
            <span className="mono-label" style={{ color: 'var(--color-charcoal-muted)' }}>
              SPECIALIZED INDUSTRY TRAINING
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.35rem',
                fontWeight: 700,
                marginTop: '0.2rem',
              }}
            >
              Operational &amp; Parts Training
            </h3>
          </div>

          <div className="training-badges">
            {trainingData.map((trn) => (
              <div className="training-cert-item" key={trn.id}>
                <Award size={18} style={{ color: 'var(--color-charcoal)' }} />
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 700,
                      fontSize: '0.98rem',
                    }}
                  >
                    {trn.title}{' '}
                    {trn.year === '2023' && (
                      <span
                        className="index-badge"
                        style={{ marginLeft: '0.35rem', padding: '0.1rem 0.4rem' }}
                      >
                        2023
                      </span>
                    )}
                  </div>
                  <div className="mono-label" style={{ color: 'var(--color-charcoal-muted)' }}>
                    {trn.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
