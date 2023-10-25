import { render, screen } from '@testing-library/react';
import { Footprint } from '../components/Footprint';

function renderFootprint() {
  return render(<Footprint emissions={6543} />);
}

describe('Test that the Footprint component renders correctly', () => {
  test('renders the numeric value passed in with comma added', () => {
    renderFootprint();
    const numberElement = screen.getByText(/6,543/i);
    expect(numberElement).toBeInTheDocument();
  });
  test('renders a button, wit hte expected text', () => {
    renderFootprint();
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/Take a step/i);
    expect(button).toBeInTheDocument();
  });
});
