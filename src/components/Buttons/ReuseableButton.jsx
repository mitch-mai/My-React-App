import React from 'react';

const ReuseableButton = ({ onClick, label, styleType = 'primary' }) => {
  const baseStyles = "px-4 py-2 rounded-md transition";
  const styleVariants = { 
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };
  
  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${styleVariants[styleType]}`}
    >
      {label}
    </button>
  );
};

export default ReuseableButton;