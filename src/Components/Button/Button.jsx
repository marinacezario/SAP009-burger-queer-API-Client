import React from 'react';

export const Button = ({ id, text, type, alt, value, className, ...props }) => {
  return (
    <button
      id={id}
      type={type}
      aria-label={alt} 
      value={value}
      className={className}
      {...props}
    >
      {text}
    </button>
  );
};
