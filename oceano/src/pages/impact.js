import { useState } from "react";
import Navbar from "../components/navbar";

import AboveImpact from "../components/aboveImpact";
import LoadingScreen from "./loadingScreen";
import { SceneImpact } from "../sceneImpact";

function Impact(props){
    const [ load, setLoad ] = useState(false);

    const handleCanvaChange = (isLoaded) => {
        setLoad(isLoaded);
    };
    
    return <div className="impact">
        {!load ? 
            (
                <LoadingScreen/>
            ) : (
                null
            )
        }
        <Navbar/>
        
        <AboveImpact/>
        <SceneImpact onChange={handleCanvaChange}/>

    </div>
}
export default Impact;