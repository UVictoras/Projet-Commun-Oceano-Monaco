import {useState } from "react"
import Modal from "../components/modal"
import Navbar from "../components/navbar"
import Thread from "../components/thread"

function Community(props){
    const [showModal, setShowModal] = useState(false);
    return <div className="Commmunity">
    <Navbar/>
    <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => setShowModal(true)}>
        Toggle modal
    </button>
    <Modal isVisible={showModal} onClose={()=> setShowModal(false)}/>
    <Thread/>
</div>
}
export default Community