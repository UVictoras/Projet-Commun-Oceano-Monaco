import { useState } from "react";
import Navbar from "../components/navbar";

// import AboveImpact from "../components/aboveImpact";
import LoadingScreen from "./loadingScreen";
import { CommunityScene } from "../communityScene";
import AboveCommunity from "../components/aboveCommunity";

function Community(props){
    const [ load, setLoad ] = useState(false);

    const handleCanvaChange = (isLoaded) => {
        setLoad(isLoaded);
    };
    
    return <div className="community">
        {!load ? 
            (
                <LoadingScreen/>
            ) : (
                null
            )
        }
        <Navbar/>
        
        <AboveCommunity/>
        <CommunityScene onChange={handleCanvaChange}/>

    </div>
}
export default Community;