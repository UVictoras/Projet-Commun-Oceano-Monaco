// App.js
import React, { useState } from 'react';
import Modal from '../components/modaltest.js';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="font-sans bg-gray-200">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default App;