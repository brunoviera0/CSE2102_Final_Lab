import React from 'react';
import '../App.css';

const Score = ({ score, totalQuestions, userName }) => {
  return (
    <div>
      <h2>Results for: {userName}</h2>
      <div>You scored a {score} out of {totalQuestions}, congrats!</div>
    </div>
  );
};

export default Score;
