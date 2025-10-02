import React from 'react';

interface ButtonProps {
  label: string;
  primary?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ label, primary = false, onClick }) => {
  return (
    <button
      style={{
        padding: '8px 16px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: primary ? '#1ea7fd' : '#e0e0e0',
        color: primary ? '#fff' : '#000',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
