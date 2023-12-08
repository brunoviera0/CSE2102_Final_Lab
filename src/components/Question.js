import React from 'react';
import '../App.css';

const Question = ({ questionText, answerOptions, onAnswerSelected }) => {
  const isAnswerOptionsValid = Array.isArray(answerOptions) && answerOptions.length > 0;

  return (
    <div>
      <div>{questionText}</div>
      <div>
        {isAnswerOptionsValid ? (
          answerOptions.map((answer, index) => (
            <button key={index} onClick={() => onAnswerSelected(answer)}>
              {answer}
            </button>
          ))
        ) : (
          <p>No answer options available.</p>
        )}
      </div>
    </div>
  );
};

export default Question;
