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
                        <img src="img/impact/arrow.svg" alt="fleche Make A Wave" />
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
                <History history={{PP: "img/shop/loutre_all.png", Name: "Oscar", Title: "Gardien des Récifs", Time: "2h", Text: "Nous avons sauvé une famille de baleines grâce à vous", Nb: "268", Image: "img/event/whale.svg"}}/>
                <History history={{PP: "img/shop/loutre_all.png", Name: "Nattan", Title: "Explorateur des Marées", Time: "3h", Text: "1500 bouteilles récoltées en moins de 24h, merci !", Nb: "143", Image: "img/history/poubelle.png"}}/>
                <History history={{PP: "img/shop/loutre_all.png", Name: "Amélie", Title: "Souverain des Marins", Time: "4h", Text: "On a organisé une table ronde avec une centaine de participants", Nb: "42", Image: "img/history/debat.png"}}/>
                <History history={{PP: "img/shop/toucan_all.png", Name: "Charlène", Title: "Gardien des Récifs", Time: "5h", Text: "Nous avons défendu la protection du Pacifique devant le gouvernement turc", Nb: "152", Image: "img/history/reunion.png"}} />
                <History history={{PP: "img/shop/loutre_all.png", Name: "Arthur", Title: "Capitaine des Abysses", Time: "6h", Text: "On a récolté 7000 euros pour sauver une famille de tortues", Nb: "135", Image: "img/history/tortue.png" }} />
                <History history={{PP: "img/shop/loutre_all.png", Name: "Florian", Title: "Explorateur des Marées", Time: "7h", Text: "Voici Okuta, un dauphin qui est en liberté grâce à vous !", Nb: "53", Image: "img/history/dauphin.png" }} />
            </div>
            <div className="flex justify-center mt-10 mb-10">
                <button className=" blueTextColor border-2 border-neutral-200 rounded-2xl px-14 py-3 extraBoldNunito text-lg">Charger plus</button>
            </div>
        </div>
    </div>
}
export default Community;