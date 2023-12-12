// Modal.js
import React from 'react';

const Modal = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 items-center justify-center flex">
          <div className="bg-white p-6 rounded shadow-lg w-1/2">
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Modal Title</h2>
              <button
                className="float-right text-gray-600 hover:text-gray-800"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <p className="text-gray-700">Modal content goes here.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
