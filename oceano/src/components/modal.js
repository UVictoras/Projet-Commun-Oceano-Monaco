// Modal.js
import React from 'react';
import ModalEvent from './modalEvent'

const Modal = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen &&
        <div id="modal" class="moddal fixed z-50 bg-white h-screen w-1/3 right-0">
          <ModalEvent/>
        </div>
      }
    </>
  );
};

export default Modal;