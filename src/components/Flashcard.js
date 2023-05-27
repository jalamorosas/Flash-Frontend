import React from 'react';
import styles from '../styles/Upload.module.css'

const Flashcard = ({ flashcard, showAnswer }) => {
  return (
    <div className={`flashcard justify-center p-4 mb-4 w-96 ${styles.upload}`}>
      <div className={`flashcard-content text-white text-xl min-h-[3em] ${showAnswer ? '' : 'font-bold'} overflow-auto`}>
        {showAnswer ? flashcard.answer : flashcard.question}
      </div>
    </div>
  );
};

export default Flashcard;
