import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <motion.div className="scroll-progress-bar" style={{ scaleX }} />
    </div>
  );
}
