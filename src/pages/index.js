import React, { useState } from 'react';
import Link from 'next/link'; // Make sure to import the Link component
import FlashcardList from '../components/FlashcardList';
import CreateFlashcardForm from '../components/CreateFlashcardForm';

function HomePage() {
  const [flashcards, setFlashcards] = useState(sampleFlashcards);

  const handleCreateFlashcard = (newFlashcard) => {
    setFlashcards((prevFlashcards) => [...prevFlashcards, newFlashcard]);
  };

  return (
    
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div>
      <h1>Flashcard Generator</h1>
      <Link href="/upload" passHref>
        <p>Upload Image</p>
      </Link>
    </div>
      <div className="max-w-md space-y-8">
        <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Flashify</h1>
        <div className="mt-2">
          <CreateFlashcardForm onCreate={handleCreateFlashcard} />
        </div>
        <div className="mt-4">
          <FlashcardList flashcards={flashcards} />
        </div>
      </div>
    </div>
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
