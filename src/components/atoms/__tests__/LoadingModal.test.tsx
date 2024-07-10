import React from 'react';
import { render } from '@testing-library/react';
import LoadingModal from '../LoadingModal';

test('LoadingModal renders with correct text', () => {
  const { getByText } = render(<LoadingModal />);
  
  const loadingText = getByText('Loading...');

  expect(loadingText).toBeInTheDocument();
});
