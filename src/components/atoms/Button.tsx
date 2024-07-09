import React from 'react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

/**
 * Button component
 *
 * @param {ButtonProps} props - React props
 * @returns {JSX.Element} The rendered component
 */
const Button: React.FC<ButtonProps> = ({ onClick, children }: ButtonProps): JSX.Element => (
  <button
    onClick={onClick}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
    aria-label="Search button"
  >
    {children}
  </button>
);

export default Button;
