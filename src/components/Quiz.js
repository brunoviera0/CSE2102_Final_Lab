import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import questions from './data/questions.js';

const Quiz = ({ userName, onReturnHome }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerSelected = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(prevScore => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div>
          <Score score={score} totalQuestions={questions.length} userName={userName} />
          <button onClick={onReturnHome}>Return to Home</button>
        </div>
      ) : (
        <Question
          questionText={questions[currentQuestion].questionText}
          answerOptions={questions[currentQuestion].answerOptions}
          onAnswerSelected={handleAnswerSelected}
        />
      )}
    </div>
  );
};

export default Quiz;
