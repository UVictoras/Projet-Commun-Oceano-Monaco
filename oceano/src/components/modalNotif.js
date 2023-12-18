export default function ModalNotif(props) {

    return <div id="sticky" className="modal-container absolute modalSize w-[250px] bg-white border-2 border-solid border-gray-300 rounded-md p-4">
    <button className=" text-gray-500 modalQuit text-2xl  absolute top-5 left-6" onClick={props.closeNotif}>
        <img src="img/icon/exit.png" />
    </button>
    <h1 className="text-[21px] text-center extraBold800 ">Notifications</h1>

    <div className="mb-4 max-w-sm mx-auto">
        <p className="text-center loune relative extraBoldNunito ">Aujourd’hui</p>
    </div>
    <div className="flex flex-col items-center overflow-y-scroll customScrollbar h-[350px]">
        <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 mb-4 flex items-center justify-between">
            <div>
                <h1 className="extraBoldNunito">A retenir de la COP28</h1>
                <p className="nunito400">A la COP28, le projet de texte définitif écarte l’abandon à terme des énergies fossiles.</p>
            </div>
            <div className="col-start-5">
                <img src="img/notif/cop28.svg" alt="COP28 Logo" className="mr-5 w-32 h-32" />
            </div>
        </div>
        <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 mb-4 flex  items-center justify-between">
            <div className="flex-col">
                <h1 className="extraBoldNunito flex-col">@philippe vous suit !</h1>
                <p className="nunito400 flex-col">Vous avez un nouveau follower, consultez les personnes qui vous suivent sur votre profil.</p>
            </div>
            <div className="col-start-5">
                <img src="img/notif/girl.svg" alt="friend Logo" className="mr-2 w-28 h-16" />
            </div>
        </div>
        <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 mb-4 flex items-center justify-between">
            <div className="flex-col">
                <h1 className="extraBoldNunito">Un traité historique sur les océans</h1>
                <p className="nunito400">je sais pas du coup</p>
            </div>
            <div className="col-start-5">
                <img src="img/event/whale.svg" alt="ocean Logo" className="mr-0 w-16 h-10" />
            </div>
        </div>
        <div className="mb-4 max-w-sm mx-auto">
            <p className="text-center loune relative extraBoldNunito ">Hier</p>
        </div>
        <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 mb-4 flex items-center justify-between">
            <div className="flex-col">
                <h1 className="extraBoldNunito">Un traité historique sur les océans</h1>
                <p className="nunito400">je sais pas du coup</p>
            </div>
            <div className="col-start-5">
                <img src="img/icon/ocean.svg" alt="ocean Logo" className="mr-0 w-16 h-10" />
            </div>
        </div>
    </div>
</div>
}