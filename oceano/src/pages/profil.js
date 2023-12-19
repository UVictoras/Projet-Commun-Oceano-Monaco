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
        <div className="mx-16 my-2.5 flex space-x-32">
            <div className="w-2/3">
                <div className="bannier">
                    <img src={user.Banner} alt="banier make it blue" />
                </div>

                <div className="border-2 border-neutral-200 bg-white rounded-2xl absolute top-1/3 left-32">
                    <div className="mx-6 flex">
                        <div className="profilPicture">
                            <img src={user.Picture} alt="profile picture make it blue" className="rounded-full h-28 w-28 my-4" />
                        </div>
                        <div className="name mt-6 ml-8 space-y-2">
                            <h1 className="text-left blackNunito fontColor3C text-4xl">{user.First_name}</h1>
                            <p className="text-left semiBoldNunito levelColor text-2xl">{user.Title}</p>
                        </div>
                        <div className="badge flex items-center space-x-7 ml-28">
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
                <div className="mt-24">
                    <div className="w-5/6 h-4 ml-16 colorE5 rounded-full">
                        <div id="progressBarProfil" className="levelBarColor rounded-full"></div>
                    </div>
                    <p className="text-center mt-2.5 extraBoldNunito text-xl textProfilColorRed">{user.XP} XP / {user.XPLevel}</p>
                </div>
                <div className="achievement mt-4">
                    <h2 className="fontColor3C text-3xl blackNunito">Hauts faits</h2>
                    <div className="achievementCard mt-3.5 space-y-5 h-72 overflow-y-scroll customScrollbar ">
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
            {/* <div class="absolute right-0 h-5/6 bg-neutral-200 w-1"></div> */}
            <div className="w-1/3 space-y-9 ml-8">
                <div className="action border-2 border-neutral-200 rounded-2xl">
                    <div className="mx-8 my-8">
                        <div className="imgBanner h-28 rounded-xl flex items-center">
                            <p className="extraBold800 text-white text-4xl ml-20">{lastEvent.length}</p>
                        </div>
                        <div className="myAction my-6 space-y-2.5 ">
                            {typeEventUser.map((type) => {
                                return <MyAction type={type} nbEvents={lastEvent.length}/>
                            })}
                            
                        </div>
                        <button className="blueButton rounded-2xl text-white blackNunito text-lg flex items-center justify-center w-2/3 ml-40" onClick={handleClick}>{TextAction}</button>

                    </div>
                </div>
                <div className="lastAction border-2 border-neutral-200 rounded-2xl ">
                    <div className="mx-8 my-8">
                        <h1 className="blackNunito fontColor3C text-3xl">Dernière actions</h1>
                        <div className="h-60 overflow-y-scroll customScrollbar mt-6 space-y-3.5">
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