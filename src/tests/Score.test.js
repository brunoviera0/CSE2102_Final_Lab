import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Score from '../components/Score';

test('renders the correct score and user name', () => {
  const userName = 'Bruno';
  const score = 5;
  const totalQuestions = 10;

  render(<Score score={score} totalQuestions={totalQuestions} userName={userName} />);

  const userNameHeader = screen.getByText(`Results for: ${userName}`);
  const scoreText = screen.getByText(`You scored a ${score} out of ${totalQuestions}, congrats!`);
  
  expect(userNameHeader).toBeInTheDocument();
  expect(scoreText).toBeInTheDocument();
});
