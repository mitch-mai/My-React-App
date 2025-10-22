import React from 'react';
import { styleBtn } from './style';


const ReuseableButton = ({ onClick, label, styleType = 'primary' }) => {
  const baseStyles = "px-4 py-2 rounded-md transition";
  const styleVariants = styleBtn;
  
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