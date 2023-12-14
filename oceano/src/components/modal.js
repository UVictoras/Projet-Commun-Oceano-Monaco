// Modal.js
import React from 'react';
import ModalEvent from './modalEvent'
import ModalLike from './modalLike';
import ModalFilter from './modalFilter';

const Modal = ({ isOpen, closeModal }) => {
  return (
    <>
      {isOpen &&
        <div id="modal" class="moddal fixed z-50 bg-white h-screen w-1/3 right-0 rounded-l-3xl">
          {/* <ModalEvent/>
          <ModalLike /> */}
          <ModalFilter />
        </div>
      }
    </>
  );
};

export default Modal;