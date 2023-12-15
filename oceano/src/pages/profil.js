import Achievement from "../components/achievement";
import LastAction from "../components/lastAction";
import MyAction from "../components/myAction";
import Navbar from "../components/navbar";

function Profile(props) {
    return <div className="profile">
        <Navbar />
        <div className="mx-16 my-12 flex space-x-32">
            <div className="w-2/3">
                <div className="bannier">
                    <img src="img/profil/banier.svg" alt="banier make it blue" />
                </div>

                <div className="border-2 border-neutral-200 bg-white rounded-2xl absolute top-1/3 left-32">
                    <div className="mx-6 flex">
                        <div className="profilPicture">
                            <img src="img/avatar.png" alt="profile picture make it blue" className="rounded-full h-28 w-28 my-4" />
                        </div>
                        <div className="name mt-6 ml-8 space-y-2">
                            <h1 className="text-left blackNunito fontColor3C text-4xl">Matéo C.</h1>
                            <p className="text-left semiBoldNunito levelColor text-2xl">Héros des océans</p>
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
                    <div className="w-5/6 h-4  ml-16 colorE5 rounded-full">
                        <div className="w-4/6  h-4 levelBarColor rounded-full"></div>
                    </div>
                    <p className="text-center mt-2.5 extraBoldNunito text-xl textProfilColorRed">132 XP / 200</p>
                </div>
                <div className="achievement mt-6">
                    <h2 className="fontColor3C text-3xl blackNunito">Hauts faits</h2>
                    <div className="achievementCard mt-3.5 space-y-5 h-80 overflow-y-scroll customScrollbar ">
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
            <div class="absolute left-1/2 h-5/6 bg-neutral-00 w-1"></div>
            <div className="w-1/3 space-y-9 ml-8">
                <div className="action border-2 border-neutral-200 rounded-2xl">
                    <div className="mx-8 my-8">
                        <div className="imgBanner h-28 rounded-xl flex items-center">
                            <p className="extraBold800 text-white text-4xl ml-20">31</p>
                        </div>
                        <div className="myAction my-6 space-y-2.5 ">
                            <MyAction />
                            <MyAction />
                            <MyAction />
                        </div>
                        <button className="blueButton rounded-2xl text-white blackNunito text-lg flex items-center justify-center w-2/3 ml-40">Voir toutes mes actions</button>

                    </div>
                </div>
                <div className="lastAction border-2 border-neutral-200 rounded-2xl ">
                    <div className="mx-8 my-8">
                        <h1 className="blackNunito fontColor3C text-3xl">Dernière actions</h1>
                        <div className="h-60 overflow-y-scroll customScrollbar mt-6 space-y-3.5">
                            <LastAction/>
                            <LastAction/>
                            <LastAction/>
                            <LastAction/>

                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
}
export default Profile