import Achievement from "../components/achievement";
import LastAction from "../components/lastAction";
import MyAction from "../components/myAction";
import Navbar from "../components/navbar";

import { useEffect, useState } from "react";
import { getUserSession } from "../api/session";
import { getLastEvent, getTypeEventUser } from "../api/event";

function Profile(props) {
    const [ user, setUser ] = useState([]);
    const [ lastEvent, setlastEvent ] = useState([]);
    const [ typeEventUser, settypeEventUser ] = useState([]);
    const [ moreAction, setmoreAction ] = useState(false);
    const [ TextAction, setTextAction ] = useState("Voir toutes mes actions");

    useEffect(() => {
        const userFetched = getUserSession();
        userFetched
        .then(result => setUser(result))
        .catch(error=>console.error("Error :",error.message))
    },[]);

    useEffect(() => {
        if (user.ID){
            const lastEventFetched = getLastEvent({id: user.ID});
            lastEventFetched
            .then(result => setlastEvent(result))
            .catch(error=>console.error("Error :",error.message))

            const typeEventUserFetched = getTypeEventUser({id: user.ID});
            typeEventUserFetched
            .then(result => settypeEventUser(moreAction ? result : result.slice(0, 3)))
            .catch(error=>console.error("Error :",error.message))
        }
    
        const progressBar = document.getElementById('progressBarProfil');
        if (progressBar) {
            progressBar.style.width = `${user.PctXP}%`;
        }
    }, [user, moreAction]);

    const handleClick = () => {
        if(!moreAction){
            setmoreAction(true)
            setTextAction("Voir moins")
        }else{
            setmoreAction(false)
            setTextAction("Voir toutes mes actions")
        }
      };


    return <div className="profile">
        <Navbar />
        <div className="mx-16 my-6 flex space-x-32">
            <div className="w-2/3">
                <div className="h-2/5 space-y-8">
                    <div className="banniere h-4/5">
                        <div className="bannier">
                            <img src={user.Banner} alt="banier make it blue" />
                        </div>
                        <div className="relative profilPosition flex items-center ">
                            <div className="border-2 border-neutral-200 bg-white rounded-2xl w-4/5  ">
                                <div className="mx-6 flex">
                                    <div className="w-1/2 flex">
                                        <div className="profilPicture">
                                            <img src={user.Picture} alt="profile make it blue" className="rounded-full h-28 w-28 my-4" />
                                        </div>
                                        <div className="name mt-6 ml-8 space-y-3">
                                            <h1 className="text-left blackNunito fontColor3C text-4xl">{user.Pseudo}</h1>
                                            <p className="text-left semiBoldNunito levelColor text-2xl ">{user.Title}</p>
                                        </div>
                                    </div>
                                    <div className="w-2/3 flex items-center justify-end">
                                        <div className="badge flex items-center space-x-7 ml-8">
                                            <div className="h-16 w-16 rounded-xl badgeColor">

                                            </div>
                                            <div className="h-16 w-16 rounded-xl badgeColor">

                                            </div>
                                            <div className="h-16 w-16 rounded-xl badgeColor">

                                            </div>
                                            <div className="h-16 w-16 rounded-xl badgeColor">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center w-1/6">
                                <div className="">
                                    <button className="blueButton rounded-2xl text-white extraBold800 text-lg flex items-center justify-center space-x-2">
                                        <img src="img/icon/pen.svg" className="ml-2"/>
                                        <p className="p-2">Modifier</p>
                                    </button>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="h-1/5">
                        <div className="w-5/6 h-4 ml-16 colorE5 rounded-full">
                            <div id="progressBarProfil" className=" levelBarColor rounded-full"></div>
                        </div>
                        <p className="text-center mt-2.5 extraBoldNunito text-xl textProfilColorRed">{user.XP} XP / {user.XPLevel}</p>
                    </div>

                </div>
                <div className="w1-/2">
                    <div className="achievement mt-8">
                        <h2 className="fontColor3C text-3xl blackNunito">Hauts faits</h2>
                        <div className="achievementCard mt-3.5 space-y-5 ">
                            <div className="space-x-3.5 flex">
                                <Achievement />
                                <Achievement />
                            </div>
                            <div className="space-x-3.5  flex">
                                <Achievement />
                                <Achievement />
                            </div>
                            <div className="space-x-3.5  flex">
                                <Achievement />
                                <Achievement />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/3 space-y-9 ml-8 ">
                <div className="action border-2 border-neutral-200 rounded-2xl">
                    <div className="mx-8 my-8">
                        <div className="imgBanner h-full  rounded-xl flex items-center">
                            <img src="img/profil/thunder.svg" className="px-8 pb-7" alt="thunder make it blue" />
                            <div className="p-4">
                                <p className="extraBold800 text-white text-4xl">{lastEvent.length}</p>
                                <p className="text-white extraBoldNunito text-base">Actions menées</p>
                            </div>
                        </div>
                        <div className="myAction my-6 space-y-2.5 ">
                            {typeEventUser.map((type) => {
                                return <MyAction type={type} nbEvents={lastEvent.length}/>
                            })}

                        </div>
                        <div className="flex justify-end">
                            <button className="blueButton rounded-2xl text-white blackNunito text-lg flex items-center justify-center w-2/3" onClick={handleClick}>{TextAction}</button>
                        </div>

                    </div>
                </div>
                <div className="lastAction border-2 border-neutral-200 rounded-2xl ">
                    <div className="mx-8 my-8">
                        <h1 className="blackNunito fontColor3C text-3xl">Dernière actions</h1>
                        <div className="customScrollbar mt-6 space-y-3.5">
                            {lastEvent.map((event) => {
                                return <LastAction event={event}/>
                            })}
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
}
export default Profile