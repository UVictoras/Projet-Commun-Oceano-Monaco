import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { getFavoriteEvent, getTypeEvent } from "../api/event";
import TabImpact from "../components/tabsImpact";
import Chat from "../components/chat";
import ActionImpact from "../components/actionImpact";
import { isSelected } from "../utils/webFunction";

function Impact(props) {
    const [favoriteEvent, setfavoriteEvent] = useState([]);
    const [EventShow, setEventShow] = useState([]);
    const [typeEvent, settypeEvent] = useState([]);
    const [triTypes, settriTypes] = useState("all");
    const [isChatOpen, setChatOpen] = useState(false);

    const openChat = () => {
        setChatOpen(true);
        isSelected("chat","changedLightBlue");
    }
    const closeChat = () => {
        setChatOpen(false);
        isSelected("chat","changedLightBlue");
    }

    useEffect(() => {
        const favoriteEventFetched = getFavoriteEvent({ id: 1 });
        favoriteEventFetched
            .then(result => setfavoriteEvent(result))
            .catch(error => console.error("Error :", error.message))

        const typeEventFetched = getTypeEvent();
        typeEventFetched
            .then(result => settypeEvent(result))
            .catch(error => console.error("Error :", error.message))
    }, [])

    useEffect(() => {
        if (triTypes === "all") {
            setEventShow(favoriteEvent)
        } else {
            setEventShow(favoriteEvent.filter(fav => fav.Name === triTypes))
        }
    }, [triTypes, favoriteEvent])

    const handleClick = (typeName) => {
        if (typeName === triTypes) {
            settriTypes("all")
        } else {
            settriTypes(typeName)
        }
    };

    return <div className="impact">
        <Navbar />
        {isChatOpen ? <Chat closeChat={closeChat} openChat={openChat}/>: ""}
        <div className="w-full h-full flex">
            <div className="w-1/3 px-5 pt-5 action">
                <h1 className="extraBold800 text-3xl text-center p-6">Mes actions</h1>
                <div className="w-full">
                    <form className="">
                        <div class="text-gray-600 flex items-center">
                            <span class="absolute pl-2">
                                <svg class="w-6 h-6 searchBarGlassColor ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </span>
                            <input class="w-full pl-12 pr-4 p-4 text-sm border-2 border-neutral-200 rounded-xl bg-white w-96 extraBoldNunito " placeholder="Rechercher une action..." />
                        </div>
                    </form>
                </div>
                <div className='filter '>
                    <div className='filter overflow-x-auto horizontalScrollbar  whitespace-nowrap '>
                        <div className='min-w-full mb-7 my-3.5 space-x-2.5 flex'>
                            {typeEvent.map((type) => {
                                return <button onClick={() => handleClick(type.Name)} className='p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center '>
                                    <img src={type.Logo} alt='petition make it blue' className='w-4 ml-2' />
                                    <p className='text-sm extraBoldNunito px-3'>{type.Name}</p>
                                </button>
                            })}
                        </div>
                    </div>
                </div>
                <div className='space-y-4 h-[630px] customScrollbar overflow-y-auto'>
                    {EventShow.map((fav) => {
                        return <ActionImpact event={fav} openChat={openChat} closeChat={closeChat} isChatOpen={isChatOpen}/>
                    })}
                </div>
            </div>
            <div className="w-1/3 px-9 pt-6 stat h-full">
                <div className="flex ">
                    <h1 className="extraBold800 text-2xl text-center py-6 pr-6">12 derniers mois</h1>
                    <button>
                        <img src="img/impact/arrow.svg" alt="fleche make it blue" />
                    </button>
                </div>
                <div className="space-y-6">
                    <div className="activity space-y-2 h-2/5">
                        <h2 className="extraBoldNunito text-[28px]">Activité</h2>
                        <div className="border-2 border-neutral-200 rounded-2xl flex justify-center px-2 py-8">
                            <img src="img/impact/graph.png" alt="graph make it blue" />
                        </div>
                    </div>
                    <div className="figure space-y-3 h-2/5 ">
                        <h2 className="extraBoldNunito text-[28px]">Chiffres clé</h2>
                        <div className="flex space-x-3 w-full ">
                            <div className="border-2 border-neutral-200 rounded-2xl w-1/2 p-9">
                                <p className="fontColor3C extraBoldNunito text-4xl">36</p>
                                <p className="text-xl nunito500 greyText">animaux sauvés</p>
                            </div>
                            <div className="border-2 border-neutral-200 rounded-2xl w-1/2 p-9">
                                <p className="fontColor3C extraBoldNunito text-4xl">12</p>
                                <p className="text-xl nunito500 greyText">régions protégées</p>
                            </div>
                        </div>
                        <div className="flex space-x-3 w-full">
                            <div className="border-2 border-neutral-200 rounded-2xl w-1/2 p-9">
                                <p className="fontColor3C extraBoldNunito text-4xl">4</p>
                                <p className="text-xl nunito500 greyText">lieux nettoyés</p>
                            </div>
                            <div className="border-2 border-neutral-200 rounded-2xl w-1/2 p-8">
                                <p className="fontColor3C extraBoldNunito text-4xl">5</p>
                                <p className="text-xl nunito500 greyText">recherches soutenues</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 classement flex items-end pb-5 px-12 ">
                <div className="w-full ">
                    <h2 className="extraBoldNunito text-[28px] py-2 ">Classement</h2>
                    <div className="border-2 border-neutral-200 rounded-2xl h-full">
                        <TabImpact />
                    </div>
                </div>
            </div>
        </div>

    </div>
}
export default Impact;