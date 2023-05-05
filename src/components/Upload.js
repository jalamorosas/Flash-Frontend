import { useState } from 'react';
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import heic2any from 'heic2any';

const Upload = ({ onFlashcardsGenerated }) => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fileError, setFileError] = useState('');

  const supportedFormats = [
    'image/jpeg',
    'image/png',
    'image/bmp',
    'image/tiff',
    'image/x-windows-bmp',
    'image/heic',
  ];

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files[0];
    if (supportedFormats.includes(selectedFile.type)) {
      setFileError('');

      if (selectedFile.type === 'image/heic') {
        const convertedFile = await heic2any({
          blob: selectedFile,
          toType: 'image/jpeg',
          quality: 0.8,
        });

        setFile(convertedFile);
      } else {
        setFile(selectedFile);
      }
    } else {
      setFileError('Unsupported file format. Please upload a valid image file.');
      setFile(null);
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







