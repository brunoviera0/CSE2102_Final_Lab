import React, { useState } from 'react';
import Login from './Login';
import Quiz from './Quiz';

const HomePage = () => {
  const [userName, setUserName] = useState('');
  const [quizActive, setQuizActive] = useState(false);
  const [scoreHistory, setScoreHistory] = useState({});

  const updateScoreHistory = (user, newScore) => {
    setScoreHistory(prevHistory => {
      const userScores = prevHistory[user] || [];
      const newUserScores = [newScore, ...userScores].slice(0, 5);
      return { ...prevHistory, [user]: newUserScores };
    });
  };

  const handleLogin = (name) => {
    setUserName(name);
    setQuizActive(true);
  };

  const handleReturnHome = () => {
    setQuizActive(false);
    setUserName('');
  };

  return (
    <div>
      {!quizActive ? (
        <>
          <h1>The Final CSE2102 Quiz!</h1>
          {!userName && <Login onLogin={handleLogin} />}
        </>
      ) : (
        <Quiz
          userName={userName}
          updateScoreHistory={updateScoreHistory}
          scoreHistory={scoreHistory[userName] || []}
          onReturnHome={handleReturnHome}
        />
      )}
    </div>
  );
};

export default HomePage;
