import { useState } from 'react';
import axios from 'axios';

export default function Upload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://localhost:5000/api/generate_flashcards', formData);
      const flashcards = response.data.flashcards;
      console.log(flashcards);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Generate Flashcards</button>
      </form>
    </div>
  );
}
