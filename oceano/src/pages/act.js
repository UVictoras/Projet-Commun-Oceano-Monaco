import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";
import Play from "../canva"; 
import Create from "../components/createaction";
import Join from "../components/joinaction";
import Calendar from "../components/calendar";
import Onedate from "../components/pickonedate";
import { useState } from "react";
import Modal from "../components/modal";


function Act(props){
    
    return <div className="Act">
        <Navbar />
        <Searchbar />
        <div className = "container mx-auto bg-gray-200 rounded-xl " >
            <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">aaa</p>
                <p className="text-sm text-gray-500">bizoabgazg</p>
            </div>
        </div>
        
        <Create/>
        
        

        
        
        
    </div>
}
export default Act;