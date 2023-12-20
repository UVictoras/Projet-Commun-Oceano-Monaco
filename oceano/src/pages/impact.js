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
        
        <div class="grid place-content-center h-48 ...">
            <div><h1 class="blackNunito text-2xl">Ensemble nous avons fait ceci cela</h1></div>    
        </div>
        <div className="grid grid-cols-10  ">
            <div class ="col-start-5 col-span-2 ">
                <p class="blackNunito  text-7xl  text-center">32 607 t</p>

            </div>
            <div class ="col-start-7 items-end py-6">
                <p class="blackNunito ">de plastique</p>
                <p class="blackNunito ">des océans</p>

            </div>
                    
        </div>
        <div class="grid grid-cols-3 gap-4 place-content-center h-48 ...">
            <div>
                <p className ="grid place-content-center mediumNunito">231 </p>
                <p className ="grid place-content-center mediumNunito">animaux réahibilités</p>
            </div>
            <div>
                <p className ="grid place-content-center mediumNunito">4821 </p>
                <p className ="grid place-content-center mediumNunito">hectares protégés</p>
            </div>
            <div>
                <p className ="grid place-content-center mediumNunito">92 </p>
                <p className ="grid place-content-center mediumNunito">plages nettoyées</p>
            </div>
               
        </div>
        <AboveImpact/>
        <SceneImpact onChange={handleCanvaChange}/>

    </div>
}
export default Impact;