import React from 'react';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * Input component
 *
 * @param {InputProps} props - React props
 * @returns {JSX.Element} The rendered component
 */
const Input: React.FC<InputProps> = ({ value, onChange, onKeyDown }: InputProps): JSX.Element => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    className="border border-gray-300 p-2 rounded w-full"
    aria-label="Search input"
  />
);

export default Input;
