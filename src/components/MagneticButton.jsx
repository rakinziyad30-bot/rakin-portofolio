import React, { useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function MagneticButton({
  children,
  className = '',
  onClick,
  href,
  target,
  rel,
  strength = 0.22,
  cursorText = '',
  ariaLabel,
  type = 'button',
}) {
  const ref = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (prefersReducedMotion || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * strength, y: middleY * strength });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const motionProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: reset,
    animate: { x: position.x, y: position.y },
    transition: { type: 'spring', stiffness: 220, damping: 18, mass: 0.2 },
    className,
    ...(cursorText ? { 'data-cursor': cursorText } : {}),
    ...(ariaLabel ? { 'aria-label': ariaLabel } : {}),
  };

  if (href) {
    return (
      <motion.a href={href} target={target} rel={rel} onClick={onClick} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  );
}
