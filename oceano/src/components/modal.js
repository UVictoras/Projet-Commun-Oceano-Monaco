// Modal.js
import React, { useEffect, useState } from 'react';
import ModalEvent from './modalEvent'
import ModalLike from './modalLike';
import ModalFilter from './modalFilter';


export function Modal(props) {

  const [activeModal, setActiveModal] = useState();
  useEffect(() => {
    if (props.isClicked === "like") {
      setActiveModal(<ModalLike closeModal={props.closeModal}/>)
    } else if (props.isClicked === "filter") {
      setActiveModal(<ModalFilter closeModal={props.closeModal}/>)
    } else if (props.isClicked === "event"){
      setActiveModal(<ModalEvent closeModal={props.closeModal} event={props.event}/>)
    };
  }, [props.isClicked])

  return (
    <>
      <div id="modal" class="moddal fixed z-50 bg-white h-screen w-1/3 right-0 rounded-l-3xl">
        {activeModal}
      </div>

    </>
  );
};

export default Modal;