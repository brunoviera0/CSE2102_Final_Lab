import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to the final CSE2102 Quiz!/i);
  expect(welcomeElement).toBeInTheDocument();
});
