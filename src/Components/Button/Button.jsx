import React from 'react';

export const Button = ({ id, text, type, alt, value, className }) => {
  return (
    <button
      id={id}
      type={type}
      aria-label={alt} // Usando a propriedade aria-label em vez de alt
      value={value}
      className={className}
    >
      {text}
    </button>
  );
};
