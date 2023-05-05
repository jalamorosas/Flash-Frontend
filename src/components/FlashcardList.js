import React, { useState } from 'react';
import Flashcard from './Flashcard';

const FlashcardList = ({ flashcards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? flashcards.length - 1 : prevIndex - 1));
    setShowAnswer(false);
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === flashcards.length - 1 ? 0 : prevIndex + 1));
    setShowAnswer(false);
  };

  const toggleRevealAnswer = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  return (
    <div className="flashcard-list justify-center">
      {flashcards.length > 0 && (
        <Flashcard flashcard={flashcards[currentCardIndex]} showAnswer={showAnswer} />
      )}
      <div className="navigation-buttons mt-4 flex items-center justify-center space-x-4">
        <button
          onClick={handlePrevCard}
          className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          &#8592;
        </button>
        <button
          className="reveal-answer bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={toggleRevealAnswer}
        >
          {showAnswer ? 'Hide Answer' : 'Reveal Answer'}
        </button>
        <button
          onClick={handleNextCard}
          className="bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default FlashcardList;
