import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  href?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const MagneticButton: React.FC<MagneticButtonProps> = ({ 
  children, 
  className = 'btn-primary', 
  onClick,
  style,
  href,
  target,
  rel,
  disabled
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    // Limit attraction pull distance to max 15px
    setPosition({ x: x * 0.35, y: y * 0.35 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const buttonContent = (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={{ display: 'inline-flex', ...style }}
    >
      {children}
    </motion.div>
  );

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
      {href ? (
        <a href={href} target={target} rel={rel} onClick={onClick} style={{ textDecoration: 'none', cursor: 'none' }}>
          {buttonContent}
        </a>
      ) : (
        <button onClick={onClick} disabled={disabled} style={{ background: 'none', border: 'none', padding: 0, cursor: 'none', outline: 'none' }}>
          {buttonContent}
        </button>
      )}
    </div>
  );
};

export default MagneticButton;
