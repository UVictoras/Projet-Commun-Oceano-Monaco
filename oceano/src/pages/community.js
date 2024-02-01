import { useState } from "react";
import Navbar from "../components/navbar";

// import AboveImpact from "../components/aboveImpact";
import LoadingScreen from "./loadingScreen";
import { CommunityScene } from "../communityScene";
import AboveCommunity from "../components/aboveCommunity";
import History from "../components/history";

function Community(props) {
    const [load, setLoad] = useState(false);

    const handleCanvaChange = (isLoaded) => {
        setLoad(isLoaded);
    };

    return <div className="community ">
        <Navbar />
        {!load ?
            (
                <div className="">

                    <LoadingScreen />
                </div>
            ) : (
                null
            )
        }

        <AboveCommunity />
        <div>
            <CommunityScene onChange={handleCanvaChange} />
        </div>
        <div className="w-full px-20 mt-10">
            <div className="flex w-full items-center justify-between">
                <h1 className="text-5xl fontColor3C extraBoldNunito">Nos histoires</h1>
                <div className="flex space-x-3">
                    <p className="text-2xl fontColor3C extraBold800">Récent</p>
                    <button>
                        <img src="img/impact/arrow.svg" alt="fleche make it blue" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
                <History />
                <History />
                <History />
                <History />
                <History />
                <History />
            </div>
            <div className="flex justify-center mt-10 mb-10">
                <button className=" blueTextColor border-2 border-neutral-200 rounded-2xl px-14 py-3 extraBoldNunito text-lg">Charger plus</button>
            </div>
        </div>
    </div>
}
export default Community;