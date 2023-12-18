// Modal.js
import React, { useEffect, useState } from 'react';
import ModalEvent from './modalEvent'
import ModalLike from './modalLike';
import ModalFilter from './modalFilter';
import { getEvent } from "../api/event";


export function Modal(props) {
  const [ event, setEvent ] = useState([]);
  const [activeModal, setActiveModal] = useState();

  const fetchEvent = async () => {
    try {
        const result = await getEvent({ id: 1 });
        setEvent(result);
    } catch (error) {
        console.error("Error :", error.message);
    }
  };

  useEffect(() => {
    if (props.isClicked === "like") {
      setActiveModal(<ModalLike closeModal={props.closeModal}/>)
    } else if (props.isClicked === "filter") {
      setActiveModal(<ModalFilter closeModal={props.closeModal}/>)
    } else if (props.isClicked === "event"){
      fetchEvent();
      setActiveModal(<ModalEvent closeModal={props.closeModal} event={event[0]}/>)
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