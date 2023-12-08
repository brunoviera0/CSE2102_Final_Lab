import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Score from '../components/Score';

test('renders the correct score, user name, and score history', () => {
  const userName = 'Bruno';
  const score = 5;
  const totalQuestions = 10;
  const scoreHistory = [3, 4, 5, 6, 7];

  render(<Score score={score} totalQuestions={totalQuestions} userName={userName} scoreHistory={scoreHistory} />);

  const userNameHeader = screen.getByText(`Results for: ${userName}`);
  const scoreText = screen.getByText(`You scored a ${score} out of ${totalQuestions}, congrats!`);
  const scoreHistoryHeader = screen.getByText('Your score history for this session (in chronological order) starting with the current attempt:');
  
  expect(userNameHeader).toBeInTheDocument();
  expect(scoreText).toBeInTheDocument();
  expect(scoreHistoryHeader).toBeInTheDocument();

  scoreHistory.forEach((pastScore, index) => {
    const scoreHistoryItem = screen.getByText(`Score: ${pastScore}/${totalQuestions}`);
    expect(scoreHistoryItem).toBeInTheDocument();
  });
});
