import Tab from './tabsEvent';
import { useEffect, useState} from "react";
import { getEvent } from "../api/event";

export default function ModalEvent(props) {
    const [ event, setEvent ] = useState([]);

    useEffect(() => {
        const eventFetched = getEvent({id: 1});
        eventFetched
        .then(result => setEvent(result))
        .catch(error=>console.error("Error :",error.message))
    },[]);

    return <>
        <img src='img/event/whale.svg' alt='Whale make it blue' />
        <div className='mx-10 mt-5'>
            <h2 class="text-[28px] extraBold800">{event[0].Title}</h2>
            <p className='greyText'>Lancé par <span className='blueTextColor semiBoldNunito'>{event[0].Pseudo}</span></p>
            <div className='mt-5 space-x-60 flex'>
                <div className='donationDate flex space-x-2.5'>
                    <div className='donation w-[123px] h-[41px] rounded-2xl flex items-center justify-center space-x-2 '>
                        <img src='img/icon/coin.png' alt='coin make it blue' className='w-4' />
                        <p className='text-sm extraBoldNunito'>{event[0].Name}</p>
                    </div>
                    <div className="date w-[100px] h-[41px] bg-white border-2 border-neutral-200 rounded-2xl flex items-center justify-center space-x-2 ">
                        <img src='img/event/date.svg' alt='date make it blue' className='w-4' />
                        <p className='text-sm extraBoldNunito'>{event[0].End_date}</p>
                    </div>
                </div>
                <div className='people'>
                    <div className="date w-[100px] h-[41px] bg-white flex items-center justify-center space-x-2 ">
                        <img src='img/event/people.svg' alt='people make it blue' className='w-4' />
                        <p className='text-sm extraBold800'>{event[0].NbUsers}</p>
                    </div>
                </div>
            </div>
            <div
                class="text-sm font-medium text-center text-gray-500">
                <Tab event={event[0]}/>
                <div className="flex mt-2 mx-10 justify-center">
                    <boutton className="w-[460px] h-11 blueButton rounded-2xl blackNunito text-white flex items-center justify-center ">Participer</boutton>
                    <boutton className="ml-2.5 w-16 flex items-center justify-center border border-neutral-200 bg-white rounded-2xl whiteButton">
                        <img
                            src="img/event/share.png"
                            alt="jsp"
                        ></img>
                    </boutton>
                </div>
            </div>


        </div>
    </>

}

