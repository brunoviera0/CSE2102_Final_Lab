import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Score from '../components/Score';

test('renders the correct score and user name in a table', () => {
  const userName = 'Bruno';
  const score = 5;
  const totalQuestions = 10;

  render(<Score score={score} totalQuestions={totalQuestions} userName={userName} />);

  const userCell = screen.getByText('User:');
  const userNameCell = userCell.nextSibling;
  const scoreCell = screen.getByText('Score:');
  const scoreValueCell = scoreCell.nextSibling;

  expect(userNameCell.textContent).toBe(userName);
  expect(scoreValueCell.textContent).toBe(`${score} out of ${totalQuestions}`);
});
