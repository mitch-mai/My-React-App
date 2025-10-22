/*
import { useState } from 'react';

export default function HoverButton({ label = "Hover me" }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`px-4 py-2 rounded-md transition ${
        isHovered ? 'bg-purple-600 text-white' : 'bg-red-600 text-white'
      }`}
    >
      {label}
    </button>
  );
}
*/