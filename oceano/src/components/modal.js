// Modal.js
import React from 'react';


const Modal = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Contenu du modal</p>
            <button onClick={onClose}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
};