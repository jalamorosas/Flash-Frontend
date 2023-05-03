import React, { useState } from 'react';

const CreateFlashcardForm = ({ onCreate }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    onCreate({
      id: Date.now(),
      question,
      answer,
    });

    setQuestion('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit} className="create-flashcard-form mb-6 bg-gray-100 p-6 rounded-lg shadow-md">
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <input
          type="text"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Add Flashcard
        </button>
      </div>
    </form>
  );
};

export default CreateFlashcardForm;

