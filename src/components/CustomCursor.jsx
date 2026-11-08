import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';

export default function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [cursorLabel, setCursorLabel] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 320, mass: 0.4 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (prefersReducedMotion) return undefined;

    const handleMouseMove = (e) => {
      const sizeOffset = isHovered ? 32 : 16;
      mouseX.set(e.clientX - sizeOffset);
      mouseY.set(e.clientY - sizeOffset);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, [data-cursor]');
      if (target) {
        setIsHovered(true);
        const customText = target.getAttribute('data-cursor');
        setCursorLabel(customText || '');
      } else {
        setIsHovered(false);
        setCursorLabel('');
      }
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
    };
  }, [prefersReducedMotion, isHovered, isVisible, mouseX, mouseY]);

  if (prefersReducedMotion || !isVisible) {
    return null;
  }

  return (
    <motion.div
      className={`custom-cursor-ring ${isHovered ? 'is-hovered' : ''}`}
      style={{ x, y }}
      aria-hidden="true"
    >
      {cursorLabel && <span className="custom-cursor-label">{cursorLabel}</span>}
    </motion.div>
  );
}
