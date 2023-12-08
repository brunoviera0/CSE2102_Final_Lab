import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../components/Login';

test('calls onLogin with the user name when submitted', () => {
  const mockOnLogin = jest.fn();
  render(<Login onLogin={mockOnLogin} />);

  const input = screen.getByPlaceholderText('Your Name');
  const userName = 'Bruno';
  fireEvent.change(input, { target: { value: userName } });
  fireEvent.submit(input);

  expect(mockOnLogin).toHaveBeenCalledWith(userName);
});
