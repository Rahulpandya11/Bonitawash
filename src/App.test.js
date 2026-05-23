import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bonita Carwash branding', () => {
  render(<App />);
  const brandElement = screen.getByAltText(/bonita carwash logo/i);
  expect(brandElement).toBeInTheDocument();
});
