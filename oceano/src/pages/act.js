import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";
import { Canvas } from "../Canva.jsx";
import { Anim, Camera, OpenModal } from "../utils/3DVerse.js";
import { useState } from "react";
import Modal from "../components/modal.js";
import Above from "../components/above.js";

function Act(props) {
    
    return <div className="">
        <Navbar />

        <Above/>
    
        <Canvas />
        {/* {console.log(OpenModal())} */}
        

        <div className="container mx-auto bg-gray-200 rounded-xl " onClick={() => {
            Anim();
            Camera()
        }}>
            <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">aaa</p>
                <p className="text-sm text-gray-500">bizoabgazg</p>
            </div>
        </div>
    </div>
}
export default Act;