import React from 'react';
import { render, screen } from '@testing-library/react';
import { Content } from '../components/Content';

test('Content renders value which are passed in', () => {
  render(<Content twenty30Target={2500} emissions={7456} yearTarget={5867} remainderToCut={444} />);
  const emissions = screen.getByText(/7,456/i);
  expect(emissions).toBeInTheDocument();
  const endOfYearText = screen.getByText(/5,867/i);
  expect(endOfYearText).toBeInTheDocument();
  const leftToCutText = screen.getByText(/444/i);
  expect(leftToCutText).toBeInTheDocument();
});
