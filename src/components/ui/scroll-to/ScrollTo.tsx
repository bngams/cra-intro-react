import React, { ReactNode, MutableRefObject } from 'react';
import './ScrollTo.css'; // Create a CSS file for styles

interface ScrollToProps {
  target: MutableRefObject<HTMLElement | null>;
  children: ReactNode; // Content of the component, e.g., button or link text
  className?: 'link' | 'button' | string; // Optional custom class for styling
}

const ScrollTo: React.FC<ScrollToProps> = ({ target, children, className }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent default behavior (e.g., for links)
    if (target.current) {
      target.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // if no valid href anchor, we need to use a button 
  // see: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/anchor-is-valid.md
  return ( 
    <button className={`scroll-to ${className}`} onClick={handleClick}>
      {children}
    </button>
  );
};

export default ScrollTo;