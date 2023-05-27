import React, { useState } from 'react';
import Link from 'next/link'; // Make sure to import the Link component
import FlashcardList from '../components/FlashcardList';
import CreateFlashcardForm from '../components/CreateFlashcardForm';
import Upload from '../components/Upload';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css'

function HomePage() {
  const [flashcards, setFlashcards] = useState(sampleFlashcards);

  const handleCreateFlashcard = (newFlashcard) => {
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
  };

  return (
    <>

      <div className={styles.container}>
        <Navbar />

        <div className=" flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md space-y-8">
            <h1 className="mt-6 text-center text-4xl font-extrabold text-white">Generate Flashcards</h1>

            {/* Add the Upload component and pass the setFlashcards function */}
            <Upload onFlashcardsGenerated={setFlashcards} />

            <FlashcardList flashcards={flashcards} />
          </div>
        </div>
      </div>

    </>
  );
}

const sampleFlashcards = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'A JavaScript library for building user interfaces',
  },
  {
    id: 2,
    question: 'What is a component?',
    answer: 'A reusable piece of code that manages its own content, presentation, and behavior',
  },
  // Add more sample flashcards here
];

export default HomePage;
