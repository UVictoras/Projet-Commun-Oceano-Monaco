// Modal.js
import React from 'react';
import ModalEvent from './modalEvent'

function Modal (props) {
  return <div id="modal" class="moddal fixed z-50 bg-white h-screen w-1/3 right-0">
          <ModalEvent closeModal={props.closeModal} event={props.event}/>
        </div>
};

export default Modal;