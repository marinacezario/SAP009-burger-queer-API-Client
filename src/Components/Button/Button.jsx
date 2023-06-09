import React from "react";

export const Button = ({
  id,
  children,
  type,
  alt,
  value,
  className,
  onClick,
  "data-testid": testId,
  ...props
}) => {
  return (
    <button
      id={id}
      type={type}
      aria-label={alt}
      value={value}
      className={className}
      onClick={onClick}
      data-testid={testId}
      {...props}
    >
      {children}
    </button>
  );
};
