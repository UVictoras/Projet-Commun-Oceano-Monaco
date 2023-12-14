import {useState } from "react"
import Navbar from "../components/navbar"
import Thread from "../components/thread"

function Community(props){
    const [showModal, setShowModal] = useState(false);
    return <div className="Commmunity">
    <Navbar/>
</div>
}
export default Community