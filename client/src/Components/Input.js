// Input.jsx
import React from "react";

const Input = ({ className, ...props }) => (
  <input
    type="text"
    className={`border border-gray-300 rounded-lg p-2 focus:outline-none focus:border-black transition-colors ${className}`}
    {...props}
  />
);

export default Input;
