import { useState, useEffect, createContext, useContext } from "react";
import { React } from 'react';
import Searchbar from "./searchbar";
import Modal from "./modal";
import ModalNotif from "./modalNotif";
import { getEvent } from "../api/event";
import PlacePing from "./placePing";
import ValidePing from "./validatePing";
import { Click } from '../utils/3DVerse';
import { getIDEventSession } from "../api/session";

let GloabelIdEvent = [];

export function IdEvent(label) {
    GloabelIdEvent = label.labelElement.domElement.querySelector(".label").id;
};

export function Above(props) {
    const [isModalOpen, setModalOpen] = useState(false);
    const [isClicked, setClicked] = useState();
    const [isNotifOpen, setNotifOpen] = useState(false);
    const [event, setEvent] = useState([]);
    const [isPlacePing, setPlacePing] = useState(false);
    const [isPing, setIsPing] = useState(false);
    const [idEvent, setIdEvent] = useState([]);

    useEffect(() => {
        const interval = setInterval(() => {
            if (idEvent !== GloabelIdEvent) {
                setIdEvent(GloabelIdEvent);
            }
        }, 1000);
    },[]);

    const handleClick = () => {
        Click((position) => {
            if(position){
                setIsPing(true)
                setPlacePing(false);
            }
        });
    }

    const handlePing = () => {
        setPlacePing(true);
        setIsPing(false)
        setModalOpen(false);
        handleClick();
    }
    const openNotif = () => {
        setNotifOpen(true);
    }
    const closeNotif = () => {
        setNotifOpen(false);
    }

    const openModal = (index) => {
        setClicked(index)
        setModalOpen(true);
        setIsPing(false)
        setPlacePing(false);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        if(idEvent.length !== 0){
            console.log("idEvent", idEvent)
            const eventFetched = getEvent({ id: idEvent });
            eventFetched
                .then(result => {setEvent(result); openModal("event");})
                .catch(error => console.error("Error :", error.message))
        }
    }, [idEvent])

    return <div className="Act ">

        <div className="searchAndBell flex absolute left-12 mt-10 z-30">
            <button className="w-[60px] h-[60px] p-3 rounded-2xl bg-white flex items-center bellButton" onClick={openNotif}>
                <img src="img/icon/bell/bell.png" className="changeBell" alt="Make A Wave" />
            </button>
        </div>
        {isNotifOpen ? <ModalNotif closeNotif={closeNotif} /> : ""}

        <div className="mt-10 flex left-1/2 centerIcon justify-center absolute z-30">
            <Searchbar handlePing={handlePing} />
        </div>
        
        {/* <div className="absolute top-1/4 right-0 z-30"> */}
            {isPlacePing ? <PlacePing /> : ""}
        {/* </div> */}
        {/* <div className="absolute bottom-0 right-0 z-30"> */}
            {isPing ? <ValidePing handlePing={handlePing}/> : ""}
        {/* </div> */}

        <div className="objectiv absolute bg-white border-2 border-normal-200 rounded-lg bottom-12 left-12 w-[435px] z-30">
            <div className="flex items-end">
                <div className="flex mt-4 items-center extraBold800 ml-[32px] mr-[30px] w-2/3">
                    <h1 className="ml-3 text-[21px]">Objectifs</h1>

                </div>
                <div className="mt-2 w-1/3 flex justify-end mr-5 mb-1">
                    <a href="#jaime mon lead" className=" blueTextColor text-sm flex extraBold800 text-end uppercaseText text-[14px] hover:underline">tout voir</a>
                </div>
            </div>

            <div className="mt-[38px] flex ml-[32px] mr-[30px] flex items-start" >
                <img src="img/icon/lightning.svg" alt="eclair Make A Wave" />
                <div className="ml-7">

                    <p className="extraBoldNunito fontColor3C mb-[17px]">Participer à 4 actions</p>
                    <div className="w-[243px] h-[20px] bg-neutral-200 rounded-l-lg">
                        <div className="w-[183px] h-[20px] progressBarObjectif rounded-l-lg flex items-center">
                            <p className="text-center ml-[121.5px] textColorProgressBarObjectif extraBold800">3/4</p>
                        </div>
                    </div>
                </div>
                <img src="img/icon/chest.svg" alt="chest Make A Wave" className="ml-4 mt-[26px] mb-[50px]" />


            </div>

        </div>
        {isModalOpen ? <Modal closeModal={closeModal} isClicked={isClicked} event={event[0]} /> : ""}

        <div className="bottomIcon flex items-end absolute bottom-8 left-1/2 centerIcon space-x-3 z-30">

            <button className="w-[60px] h-[60px] bg-white p-3 rounded-2xl border-2 border-solid border-neutral-200 bg-neutral-50 flex items-center locateButton  z-20">
                <img src="img/icon/locate.svg" alt="locate Make A Wave" />
            </button>
            <button className="w-[60px] h-[60px] bg-white p-3 rounded-2xl border-2 border-solid border-neutral-200 bg-neutral-50 flex items-center likeButton z-20" onClick={() => openModal("like")}>
                <img src="img/icon/hearth/hearthGrey.svg" alt="coeur Make A Wave" />
            </button>
            <button className="w-[60px] h-[60px] bg-white p-3 rounded-2xl border-2 border-solid border-neutral-200 bg-neutral-50 flex items-center filterButton z-20 " onClick={() => openModal("filter")}>

                <img src="img/icon/filter.svg" className="rotateFilter" alt="filter Make A Wave" />
            </button>
        </div>

        <div className="network absolute bottom-12 right-11 space-y-6 z-30">

            <img src="img/icon/network/twitter.svg" alt="twitter Make A Wave" />

            <img src="img/icon/network/instagram.svg" alt="instagram Make A Wave" />

            <img src="img/icon/network/facebook.svg" alt="facebook Make A Wave" />

        </div>
    </div>
}