import React from "react";

export function Input({ type, value, onChange, placeholder, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={className}
    />
  );
}
