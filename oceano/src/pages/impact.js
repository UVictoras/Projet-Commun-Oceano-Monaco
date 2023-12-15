import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Modal from "../components/modal";
import { getEvent } from "../api/event";

function Impact(props){
    const [isModalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    const [ event, setEvent ] = useState([]);

    useEffect(() => {
        const eventFetched = getEvent({id: 1});
        eventFetched
        .then(result => setEvent(result))
        .catch(error=>console.error("Error :",error.message))
    },[]);
    
    return <div className="impact">
        <Navbar/>
        {isModalOpen ? <Modal closeModal={closeModal} event={event[0]}/> : ""}
        <div class="grid place-content-center h-48 ...">
            <div><h1>Ensemble nous avons fait ceci cela</h1></div>    
        </div>
        <div className="searchAndBell absolute mt-10 ml-10">
            <button className="w-[60px] h-[60px] p-3 rounded-2xl bg-neutral-50 flex items-center bellButton" onClick={openModal}>
                <img src="img/icon/bell/bell.png" className="changeBell" />
            </button>
        </div>
        <div class="grid grid-cols-3 gap-4 place-content-center h-48 ...">
            <div><p className ="grid place-content-center ">01</p></div>
            <div><p className ="grid place-content-center ">02</p></div>
            <div><p className ="grid place-content-center ">03</p></div>    
        </div>
    </div>
}
export default Impact;