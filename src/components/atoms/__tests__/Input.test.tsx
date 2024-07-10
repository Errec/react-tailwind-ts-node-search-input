import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../Input';

test('Input renders correctly and responds to changes', () => {
  const handleChange = jest.fn();
  const { getByRole, rerender } = render(<Input value="" onChange={handleChange} />);
  
  const input = getByRole('textbox') as HTMLInputElement;
  fireEvent.change(input, { target: { value: 'test' } });

  expect(input).toBeInTheDocument();
  expect(handleChange).toHaveBeenCalledTimes(1);

  // Simulate the parent component updating the value prop
  rerender(<Input value="test" onChange={handleChange} />);
  expect(input.value).toBe('test');
});
