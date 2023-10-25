import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('App renders three expected titles', () => {
  render(<App />);
  const footprintText = screen.getByText(/Your footprint/i);
  expect(footprintText).toBeInTheDocument();
  const endOfYearText = screen.getByText(/End of year target/i);
  expect(endOfYearText).toBeInTheDocument();
  const leftToCutText = screen.getByText(/Left to cut this year/i);
  expect(leftToCutText).toBeInTheDocument();
});

test('App renders the 2030 target component', () => {
  render(<App />);
  const targetText = screen.getByText(/Your 2030 target is/i);
  expect(targetText).toBeInTheDocument();
});
