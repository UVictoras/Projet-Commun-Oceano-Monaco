import { getBadgesUser } from "../api/user";
import { useEffect, useState } from "react";

export default function BannierFriend(props) {
    const [ badgesUser, setBadgesUser ] = useState([]);

    useEffect(() => {
        if (props.user.ID){
            const badgesUserFetched = getBadgesUser({id: props.user.ID});
            badgesUserFetched
            .then(result => setBadgesUser(result.slice(0, 3)))
            .catch(error=>console.error("Error :",error.message))
        }
    }, [props.user]);

    return <button className="border-2 border-neutral-200 rounded-lg w-full p-2 flex items-center relative mt-3">
        <div className="w-1/5">
            <img src={props.user.Picture} alt="photo de profil Make A Wave" className="w-16" />
        </div>
        <div className="w-1/3 text-start">
            <h1 className="blackNunito text-xl fontColor3C">{props.user.Pseudo}</h1>
            <p className="semiBoldNunito text-sm levelColor">{props.user.Title}</p>
        </div>
        <div className="badge flex items-center space-x-4 ml-4">
            {badgesUser.map((badge) => {
                return  <div className="h-9">
                            <img src={badge.Image} className="w-9" alt="badge make it blue"/>   
                        </div>
            }) }
            {/* <div className="h-9 w-9 rounded-xl badgeColor">
            </div>
            <div className="h-9 w-9 rounded-xl badgeColor">

            </div>
            <div className="h-9 w-9 rounded-xl badgeColor">

            </div>
            <div className="h-9 w-9 rounded-xl badgeColor">

            </div> */}
        </div>
        {Math.floor(Math.random() * 2) == 1 ?
            <div className="absolute backgroundE45757 top-[-14px] right-4 rounded-md">
                <p className="px-2 py-1 blackNunito text-xs text-white">{Math.floor(Math.random() * 3 + 2) + "ème semaine"}</p>
            </div>
            : ""}
        
    </button>


}