import React from 'react';
import { render, screen } from '@testing-library/react';
import { EmissionsDisplay } from '../components/EmissionsDisplay';

function renderEmissionsDisplay() {
  return render(<EmissionsDisplay title="title" emissions={6543} />);
}

describe('Test that the EmissionsDisplay component renders correctly', () => {
  test('renders the numeric value passed in with comma added', () => {
    renderEmissionsDisplay();
    const numberElement = screen.getByText(/6,543/i);
    expect(numberElement).toBeInTheDocument();
  });
  test('renders the title value passed in', () => {
    renderEmissionsDisplay();
    const titleElement = screen.getByText(/title/i);
    expect(titleElement).toBeInTheDocument();
  });
  test('renders the string "of carbon emissions"', () => {
    renderEmissionsDisplay();
    const footerElement = screen.getByText(/of carbon emissions/i);
    expect(footerElement).toBeInTheDocument();
  });
  test('renders the units as "kg"', () => {
    renderEmissionsDisplay();
    const unitElement = screen.getByText(/kg/i);
    expect(unitElement).toBeInTheDocument();
  });
});
