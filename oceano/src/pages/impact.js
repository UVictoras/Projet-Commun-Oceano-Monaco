import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import { getLastEvent, getTypeEvent } from "../api/event";
import TabImpact from "../components/tabsImpact";
import Chat from "../components/chat";
import ActionImpact from "../components/actionImpact";
import { isSelected } from "../utils/webFunction";

function Impact(props) {
    const [events, setEvents] = useState([]);
    const [EventShow, setEventShow] = useState([]);
    const [typeEvent, settypeEvent] = useState([]);
    const [triTypes, settriTypes] = useState("all");
    const [isChatOpen, setChatOpen] = useState(false);
    const [chatEvent, setChatEvent] = useState([]);

    const openChat = (event) => {
        setChatOpen(true);
        isSelected("chat", "changedLightBlue");
        setChatEvent(event)
    }
    const closeChat = () => {
        setChatOpen(false);
        isSelected("chat", "changedLightBlue");
    }

    // const handleChat = () => {
    //     setChatOpen(!isChatOpen);
    //     isSelected("chat", "changedLightBlue");
    // }

    useEffect(() => {
        const eventsFetched = getLastEvent({ id: 1 });
        eventsFetched
            .then(result => setEvents(result))
            .catch(error => console.error("Error :", error.message))

        const typeEventFetched = getTypeEvent();
        typeEventFetched
            .then(result => settypeEvent(result))
            .catch(error => console.error("Error :", error.message))
    }, [])

    useEffect(() => {
        if (triTypes === "all") {
            setEventShow(events)
        } else {
            setEventShow(events.filter(event => event.Name === triTypes.Name))
        }
    }, [triTypes, events])

    const handleClick = (type) => {
        if (type === triTypes) {
            settriTypes("all")
        } else {
            settriTypes(type)
            if(triTypes != "all"){
                isSelected(triTypes.Name, triTypes.Color)
            }
        }
        isSelected(type.Name, type.Color)
    };

    return <div className="impact">
        <Navbar />
        {isChatOpen ? <Chat closeChat={closeChat} event={chatEvent} /> : ""}
        <div className="w-full flex">
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
                    <div className='filter overflow-x-auto horizontalScrollbar   whitespace-nowrap '>
                        <div className='min-w-full mb-7 my-3.5 space-x-2.5 flex'>
                            {typeEvent.map((type) => {
                                return <button id={type.Name} onClick={() => handleClick(type)} className='p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center '>
                                    <img src={type.Logo} alt='petition make it blue' className='w-4 ml-2' />
                                    <p className='text-sm extraBoldNunito px-3'>{type.Name}</p>
                                </button>
                            })}
                        </div>
                    </div>
                </div>
                <div className='space-y-4 h-2/3 customScrollbar overflow-y-auto'>
                    {EventShow.map((event) => {
                        return <ActionImpact event={event} openChat={() => openChat(event)} closeChat={closeChat} isChatOpen={isChatOpen} />
                    })}

                </div>
            </div>
            <div className="w-1/3 px-9  stat heightImpact">
                <div className="h-1/2">
                    <div className="flex ">
                        <h1 className="extraBold800 text-2xl text-center pb-9 mt-10 pr-6">12 derniers mois</h1>
                        <button>
                            <img src="img/impact/arrow.svg" alt="fleche make it blue" />
                        </button>
                    </div>

                    <div className="activity space-y-2 h-2/5">
                        <h2 className="extraBoldNunito text-[28px]">Activité</h2>
                        <div className="border-2 border-neutral-200 rounded-2xl flex justify-center px-2 py-8">
                            <img src="img/impact/graph.png" alt="graph make it blue" />
                        </div>
                    </div>
                </div>
                <div className="h-1/2">
                    <div className="figure space-y-3 pt-11">
                        <h2 className="extraBoldNunito text-[28px]">Chiffres clé</h2>
                        <div className="flex space-x-3 w-full ">
                            <div className="border-2 border-neutral-200 rounded-2xl w-1/2 h-1/2 p-8">
                                <p className="fontColor3C extraBoldNunito text-4xl">36</p>
                                <p className="text-xl nunito500 greyText">animaux sauvés</p>
                            </div>
                            <div className="border-2 border-neutral-200 rounded-2xl w-1/2 p-8">
                                <p className="fontColor3C extraBoldNunito text-4xl">12</p>
                                <p className="text-xl nunito500 greyText">régions protégées</p>
                            </div>
                        </div>
                        <div className="flex space-x-3 w-full">
                            <div className="border-2 border-neutral-200 rounded-2xl w-1/2 p-8">
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
            <div className="w-1/3 classement flex px-12 ">
                <div className="w-full h-screen heightImpact">
                    <h2 className="extraBoldNunito text-[28px] mt-24 py-2.5 ">Classement</h2>
                    <div className="border-2 border-neutral-200 rounded-2xl h-[74%] pb-6">
                        <TabImpact />
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default Impact;