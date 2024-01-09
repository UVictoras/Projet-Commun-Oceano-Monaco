import Navbar from "../components/navbar";
import Above from "../components/above.js";
import { Canvas } from "../Canva.jsx";
import { useState } from "react";
import LoadingScreen from "./loadingScreen.js";
import { Mouvcamera } from "../utils/3DVerse.js";


function Act(props) {
    const [ load, setLoad ] = useState(false);

    const handleCanvaChange = (isLoaded) => {
        setLoad(isLoaded);
    };

    return <>

        {!load ? 
            (
                <LoadingScreen/>
            ) : (
                null
            )
        }
        <Navbar />
        <Above/>
        <Canvas onChange={handleCanvaChange}/>
        
    </>
}

export default Act;