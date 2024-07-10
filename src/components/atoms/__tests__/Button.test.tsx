import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

test('Button renders with correct text and responds to click events', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick}>Click Me</Button>);
  
  const button = getByText('Click Me');
  fireEvent.click(button);

  expect(button).toBeInTheDocument();
  expect(handleClick).toHaveBeenCalledTimes(1);
});
