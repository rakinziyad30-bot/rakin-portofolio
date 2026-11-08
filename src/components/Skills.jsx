import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsData } from '../data/skills';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [highlightedSkill, setHighlightedSkill] = useState(null);

  const filteredCategories =
    activeCategory === 'ALL'
      ? skillsData
      : skillsData.filter((cat) => cat.id === activeCategory);

  const totalSkillsCount = skillsData.reduce((acc, cat) => acc + cat.items.length, 0);

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <div className="container">
        {/* Section Index Bar */}
        <div className="section-index-bar">
          <div className="section-index-left">
            <span className="index-badge">04 // CAPABILITY MATRIX</span>
            <span className="mono-label">TECHNICAL, OPERATIONAL & INTERPERSONAL INVENTORY</span>
          </div>
          <span className="mono-label">
            05 CATEGORIES // {totalSkillsCount} VERIFIED COMPETENCIES
          </span>
        </div>

        {/* Heading & Interactive Category Filter */}
        <div className="projects-intro-row" style={{ marginBottom: '2rem' }}>
          <div>
            <h2 id="skills-heading" className="projects-heading">
              Technical
              <br />
              Skills.
            </h2>
          </div>

          <div className="projects-authenticity-note">
            <strong>NO ARTIFICIAL PERCENTAGES:</strong> Skills are categorized transparently based
            on practical coursework, personal projects, and professional operations experience.
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="skills-filter-bar" role="tablist" aria-label="Filter skills by category">
          <button
            type="button"
            role="tab"
            aria-selected={activeCategory === 'ALL'}
            className={`skill-filter-btn ${activeCategory === 'ALL' ? 'is-active' : ''}`}
            onClick={() => setActiveCategory('ALL')}
          >
            ALL CATEGORIES ({skillsData.length})
          </button>

          {skillsData.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`skill-filter-btn ${activeCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.category} ({cat.items.length})
            </button>
          ))}
        </div>

        {/* Asymmetric 12-Column Specification Bento Matrix */}
        <motion.div layout className="skills-bento-matrix">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((group) => {
              const spanClass = activeCategory === 'ALL' ? group.gridSpan : 'span-7';
              return (
                <motion.div
                  layout
                  key={group.id}
                  className={`skill-category-block ${spanClass}`}
                  style={
                    activeCategory !== 'ALL' ? { gridColumn: 'span 12' } : undefined
                  }
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                >
                  <div className="skill-block-header">
                    <div>
                      <span
                        className="mono-label"
                        style={{ color: 'var(--color-charcoal-muted)', display: 'block' }}
                      >
                        {group.code}
                      </span>
                      <h3 className="skill-block-title">{group.category}</h3>
                    </div>
                    <span className="index-badge">{group.items.length} ITEMS</span>
                  </div>

                  <div className="skill-block-body">
                    {group.items.map((skill) => {
                      const isSelected = highlightedSkill === skill.refCode;
                      return (
                        <button
                          key={skill.refCode}
                          type="button"
                          className="skill-node-pill"
                          onClick={() =>
                            setHighlightedSkill(isSelected ? null : skill.refCode)
                          }
                          style={
                            isSelected
                              ? {
                                  backgroundColor: 'var(--color-olive)',
                                  boxShadow: '3px 3px 0px var(--color-charcoal)',
                                }
                              : undefined
                          }
                        >
                          <span className="skill-node-code">[{skill.refCode}]</span>
                          <span>{skill.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="skill-block-footer">
                    <span>{group.subtitle}</span>
                    <span>STATUS: ACTIVE</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
