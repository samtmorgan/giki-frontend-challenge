import React from 'react';
import { render, screen } from '@testing-library/react';
import { EmissionsDisplay } from '../components/EmissionsDisplay';

describe('Test that the EmissionsDisplay component renders correctly', () => {
  test('renders the numeric value passed in with comma added', () => {
    render(<EmissionsDisplay title="title" unit="unit" emissions="6,543" />);
    const numberElement = screen.getByText(/6,543/i);
    expect(numberElement).toBeInTheDocument();
  });
  test('renders the title value passed in', () => {
    render(<EmissionsDisplay title="title" unit="unit" emissions="6,543" />);
    const titleElement = screen.getByText(/title/i);
    expect(titleElement).toBeInTheDocument();
  });
  test('renders the numeric value passed in with "kg" appended', () => {
    render(<EmissionsDisplay title="title" unit="unit" emissions="6,543" />);
    const unitElement = screen.getByText(/unit/i);
    expect(unitElement).toBeInTheDocument();
  });
  test('renders the string "of carbon emissions"', () => {
    render(<EmissionsDisplay title="title" unit="unit" emissions="6,543" />);
    const footerElement = screen.getByText(/of carbon emissions/i);
    expect(footerElement).toBeInTheDocument();
  });
});
