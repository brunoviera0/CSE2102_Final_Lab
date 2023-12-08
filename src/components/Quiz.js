import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import questions from './data/questions.js';

const Quiz = ({ userName, updateScoreHistory, scoreHistory, onReturnHome }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerSelected = (answer) => {
    let updatedScore = score;
    if (answer === questions[currentQuestion].correctAnswer) { //accesses current question to check if the user got the answer right
      updatedScore += 1;
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion); //moving to the next question
      setScore(updatedScore);
    } else {
      setShowScore(true); //show score and score history
      updateScoreHistory(userName, updatedScore);
    }
  };
  
  return (
    <div>
      {showScore ? (
        <div>
          <Score score={score} totalQuestions={questions.length} userName={userName} scoreHistory={scoreHistory} />
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