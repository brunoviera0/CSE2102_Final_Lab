import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Question from '../components/Question';

test('renders question text', () => {
  const questionText = 'What is 9 + 10?';
  const answerOptions = ['19', '21'];

  render(<Question questionText={questionText} answerOptions={answerOptions} />);
  expect(screen.getByText(questionText)).toBeInTheDocument();
});
