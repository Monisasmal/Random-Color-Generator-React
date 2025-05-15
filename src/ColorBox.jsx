import React from 'react';

const ColorBox = ({ color }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    alert(`Copied ${color} to clipboard`);
  };

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={copyToClipboard}
    >
      {color}
    </div>
  );
};

export default ColorBox;
