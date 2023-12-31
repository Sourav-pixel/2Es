import React, { useState } from 'react';
import { firestore } from '../Components/Cart/Firebase';
function Cancel() {
    const [name, setName] = useState('');

    const handleNameChange = (e) => {
      setName(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Add the name to the "canceled" collection in Firestore
      try {
        await firestore.collection('canceled').add({
          name,
        });
        alert(`Name "${name}" has been added to the "canceled" collection.`);
        setName(''); // Clear the input field after submission
      } catch (error) {
        console.error('Error adding name to Firestore:', error);
      }
    };
  
    return (
      <div className="w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
}

export default Cancel;
