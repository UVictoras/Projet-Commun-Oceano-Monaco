import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import EventLike from "../components/eventLike";
import { getFavoriteEvent, getTypeEvent } from "../api/event";

function Impact(props) {
    const [favoriteEvent, setfavoriteEvent] = useState([]);
    const [EventShow, setEventShow] = useState([]);
    const [typeEvent, settypeEvent] = useState([]);
    const [triTypes, settriTypes] = useState("all");

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
        <div className="w-full">
            <div className="w-1/3">
                <div className='filter '>
                    <div className='filter overflow-x-scroll horizontalScrollbar  whitespace-nowrap '>
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
                <div className='space-y-4 h-[700px] customScrollbar overflow-y-scroll'>
                    {EventShow.map((fav) => {
                        return <EventLike event={fav} />
                    })}
                </div>
            </div>
        </div>

    </div>
}
export default Impact;