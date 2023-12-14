import { useState } from "react";
import { Click, OpenModal } from "../utils/3DVerse";
import { React } from 'react';
import Modal from './modal';
import Searchbar from "./searchbar";

function Above(props) {
    const [isModalOpen, setModalOpen] = useState(false);
  
    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };
    return <div className="Act ">

        <div className="searchAndBell flex absolute ">
            <div className=" mt-10 ml-10">
                <button className="w-[60px] h-[60px] p-3 rounded-2xl border-2 border-solid border-neutral-200 bg-neutral-50 flex items-center bellButton" onClick={openModal}>
                    <img src="img/icon/bell/bell.png" className="changeBell" />
                </button>
            </div>

        </div>
        {isModalOpen && (
        <div  id="sticky" className="modal-container absolute modalSize w-[250px] bg-white border-2 overflow-y-auto border-solid border-gray-300 rounded-md p-4">
            <button className=" text-gray-500 modalQuit text-2xl  absolute top-2 left-2" onClick={closeModal}>
              X
            </button>
                <h1 className="text-[21px] text-center extraBold800 ">Notifications</h1>
            <div className="mb-4 max-w-sm mx-auto">
                <p className="text-center loune relative extraBoldNunito ">Aujourd’hui</p>
            </div>
            <div className="flex flex-col items-center">
                 <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 text-center mb-4">
                   <p>Contenu du modal</p>
                 </div>
                 <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 text-center mb-4">
                   <p>Contenu du modal</p>
                 </div>
                 <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 text-center mb-4">
                   <p>Contenu du modal</p>
                 </div>
            </div>
            <div className="mb-4 max-w-sm mx-auto">
                <p className="text-center loune relative extraBoldNunito ">Hier</p>
            </div>
            <div className="flex flex-col items-center">
                 <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 text-center mb-4">
                   <p>Contenu du modal</p>
                 </div>
                 <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 text-center mb-4">
                   <p>Contenu du modal</p>
                 </div>
            </div>
        </div>
      )}

        <div className="mt-10 flex left-1/2 centerIcon justify-center absolute ">
            <Searchbar />
        </div>
        <div className="objectiv absolute bg-white rounded-lg bottom-12 left-12 w-[435px]">
            <div className="flex mt-4 items-center space-x-[190px] extraBold800 ml-[32px] mr-[30px]">
                <h1 className="ml-3 text-[21px]">Objectifs</h1>
                <a href="" className=" blueTextColor text-sm flex text-end uppercaseText text-[14px] hover:underline">tout voir</a>
            </div>
            <div className="mt-[38px] flex ml-[32px] mr-[30px] flex items-start" >
                <img src="img/icon/lightning.svg" alt="eclair make it blue" />
                <div className="ml-7">

                    <p className="extraBoldNunito fontColor3C mb-[17px]">Participer à 4 actions</p>
                    <div className="w-[243px] h-[20px] bg-neutral-200 rounded-l-lg">
                        <div className="w-[183px] h-[20px] progressBarObjectif rounded-l-lg flex items-center">
                            <p className="text-center ml-[121.5px] textColorProgressBarObjectif extraBold800">3/4</p>
                        </div>
                    </div>
                </div>
                <img src="img/icon/chest.svg" alt="chest make it blue" className="ml-4 mt-[26px] mb-[50px]" />


            </div>

        </div>
        <div className="bottomIcon flex items-end absolute bottom-8 left-1/2 centerIcon space-x-3 ">
            <button className="w-[60px] h-[60px] p-3 rounded-2xl border-2 border-solid border-neutral-200 bg-neutral-50 flex items-center locateButton  z-20">
                <img src="img/icon/locate.svg" alt="locate make it blue" />
            </button>
            <button className="w-[60px] h-[60px] p-3 rounded-2xl border-2 border-solid border-neutral-200 bg-neutral-50 flex items-center likeButton z-20">
                <img src="img/icon/hearth/hearthGrey.svg" alt="coeur Make it blue" />
            </button>
            <button className="w-[60px] h-[60px] p-3 rounded-2xl border-2 border-solid border-neutral-200 bg-neutral-50 flex items-center filterButton z-20 ">

                <img src="img/icon/filter.svg" className="rotateFilter" />
            </button>
        </div>

        <div className="network absolute bottom-12 right-11 space-y-6">

            <img src="img/icon/network/twitter.svg" alt="twitter make it blue"/>

            <img src="img/icon/network/instagram.svg" alt="instagram make it blue" />

            <img src="img/icon/network/facebook.svg" alt="facebook make it blue" />

        </div>

        {/* <Modal isVisible={() =>Click()} />
         */}
    </div>
}
export default Above