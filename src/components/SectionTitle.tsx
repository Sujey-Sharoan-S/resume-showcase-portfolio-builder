
import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
}

const SectionTitle = ({ children, className = '' }: SectionTitleProps) => {
  return (
    <h2 className={`text-2xl md:text-3xl font-heading font-bold text-gray-900 mb-8 ${className}`}>
      {children}
    </h2>
  );
};

export default SectionTitle;
