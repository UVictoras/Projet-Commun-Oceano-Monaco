import Navbar from "../components/navbar";
import Above from "../components/above.js";
import Searchbar from "../components/searchbar";
import { Canvas } from "../Canva.jsx";
import {Anim, OpenModal} from "../utils/3DVerse.js";
import { Camera } from "../utils/3DVerse.js";

import { Open } from "../utils/3DVerse.js";
import Modal from "../components/modal.js";
import { useState } from "react";



function Act(props) {
    
    
    const [modalIsOpen, setModalIsOpen] = useState(false);
      
    const openModal = () => {
        setModalIsOpen(true);
    };
    
      
    const closeModal = () => {
        setModalIsOpen(false);
    };


    //const [showModal,setShowModal] = useState(true)
    return <div className="">
        <Navbar />

        <div className = "container mx-auto bg-gray-200 rounded-xl " onClick={() => Camera()} >
        
          <Above/>
          
        <div onClick={openModal}>
            <Canvas />
        </div>
          
        {/* {console.log(OpenModal())} */}
       
          <div className="container mx-auto bg-gray-200 rounded-xl " onClick={() => {
              Anim();
              Open();
              Camera();   
          }}>

              <div className="ml-3" onClick={openModal}>
                  <p className="text-sm font-medium text-gray-900">a</p>
                  <p className="text-sm text-gray-500">bizoabgazg</p>
              </div>
              

          </div>
        <div>
            <button onClick={openModal} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Open Modal
            </button>

            <Modal isOpen={modalIsOpen} onClose={closeModal}>
                {/* Contenu de la modal */}
                <p>Hello, this is the modal content!</p>
            </Modal>
        </div>   

        </div>
    </div>
}

export default Act;