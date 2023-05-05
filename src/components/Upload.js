import { useState } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const Upload = ({ onFlashcardsGenerated }) => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('https://flashify-backend.herokuapp.com/api/generate_flashcards', formData);
      const flashcards = response.data;
      console.log(flashcards)
      console.log(typeof flashcards)
      // Call the callback function to update flashcards in HomePage
      onFlashcardsGenerated(flashcards);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-96">
      <h1 className="mt-0 text-center text-2xl font-bold text-gray-900 mb-4">Upload Image</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          onChange={handleFileChange}
          className="bg-gray-200 w-full p-2 rounded border border-gray-300 focus:ring focus:ring-indigo-200 focus:border-indigo-300"
        />
        <div className="flex justify-center">
          <button
            type="submit"
            className="reveal-answer w-full bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Generate Flashcards
          </button>
        </div>
      </form>
      {isLoading && (
        <div className="flex justify-center items-center mt-4">
          <ClipLoader color="#4B5563" loading={isLoading} size={50} />
        </div>
      )}
    </div>
  );

}

export default Upload;






