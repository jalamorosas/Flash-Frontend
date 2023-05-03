import React from 'react';

const Flashcard = ({ flashcard, showAnswer }) => {
  return (
    <div className="flashcard bg-white shadow-md p-4 rounded-lg mb-4 w-96">
      <div className={`flashcard-content text-xl min-h-[3em] ${showAnswer ? '' : 'font-bold'}`}>
        {showAnswer ? flashcard.answer : flashcard.question}
      </div>
    </div>
  );
};

export default Flashcard;
