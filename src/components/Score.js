import React from 'react';
import '../App.css';

const Score = ({ score, totalQuestions, userName, scoreHistory }) => {
  return (
    <div>
      <h2>Results for: {userName}</h2>
      <div>You scored a {score} out of {totalQuestions}, congrats!</div>
      {scoreHistory && scoreHistory.length > 0 && (
        <>
          <h3>Your score history for this session (in chronological order) starting with the current attempt:</h3>
          <ul>
            {scoreHistory.map((pastScore, index) => ( //shows all the scores from a user's attempts during the session
              <li key={index}>Score: {pastScore}/{totalQuestions}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Score;