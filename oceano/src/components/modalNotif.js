import News from "./news";
// width: 518px;
// height: 468px;
// flex-shrink: 0;
// margin-left: 20px; 
// margin-top: 20px;
export default function ModalNotif(props) {

    return <div id="sticky" className="absolute left-12 mt-10 w-[438px] h-1/2 bg-white border-2 border-solid border-normal-200 rounded-2xl p-4 z-30">
        <button className="text-gray-500 text-2xl  absolute top-5 left-6" onClick={props.closeNotif}>
            <img src="img/icon/exit.png" alt="exit Make A Wave" />
        </button>
        <h1 className="text-[26px] text-center extraBold800 fontColor3C ">Notifications</h1>


        <div className="flex flex-col items-center overflow-y-scroll customScrollbar h-3/4 ">
            <div className="mx-2">
                <div className="pb-4 w-full mx-auto">
                    <p className="text-center loune relative extraBoldNunito ">Aujourd’hui</p>
                </div>
                <div className="rounded-xl bg-white border-2 border-solid border-neutral-200 rounded-md p-4 mb-4 flex items-center justify-between space-x-1">
                    <div>
                        <h1 className="extraBoldNunito fontColor3C text-base">A retenir de la COP28</h1>
                        <p className="nunito400 text-sm">A la COP28, le projet de texte définitif écarte l’abandon à terme des énergies fossiles.</p>
                    </div>
                    <div className="col-start-5">
                        <img src="img/notif/cop28.svg" alt="COP28 Logo" className="mr-5 w-32 h-32" />
                    </div>
                </div>
                <div className="rounded-xl bg-white border-2 border-solid border-neutral-200 rounded-md p-4 mb-4 flex items-center justify-between space-x-1">
                    <div>
                        <h1 className="extraBoldNunito fontColor3C text-base">@philippe veut devenir votre ami !</h1>
                        <p className="nunito400 text-sm">Vous avez une nouvelle demande d'ami, consultez vos demandes sur votre profil.</p>
                    </div>
                    <div className="col-start-5">
                        <img src="img/notif/girl.svg" alt="COP28 Logo" className="mr-5 w-32 h-32" />
                    </div>
                </div>
                {/* <News />
                <News /> */}
                <div className="mb-4 w-full mx-auto">
                    <p className="text-center loune relative extraBoldNunito ">Hier</p>
                </div>
                <div className="rounded-xl bg-white border-2 border-solid border-neutral-200 rounded-md p-4 mb-4 flex items-center justify-between space-x-1">
                    <div>
                        <h1 className="extraBoldNunito fontColor3C text-base">Un traité historique sur les océans</h1>
                        <p className="nunito400 text-sm">Vous avez une nouvelle demande d'ami, consultez vos demandes sur votre profil.</p>
                    </div>
                    <div className="col-start-5">
                        <img src="img/notif/traite.svg" alt="COP28 Logo" className="mr-5 w-32 h-32" />
                    </div>
                </div>
            </div>

        </div>
    </div>
}


