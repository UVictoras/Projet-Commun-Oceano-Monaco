export default function ValidePing(props) {
    return  <div className="absolute bottom-0 right-0 z-30">
                <div className=" z-40 flex ">
                    <div className="">
                        <div className="absolute relative inline-block bg-white talk-bubble tri-right rounded-xl right-in -top-4 space-y-3">
                            <div className="talktext py-5 px-4">
                                <p className=" mt-8 px-4 fontColor3C extraBoldNunito text-xl">Es-tu sûr de vouloir créer une <br /> action ici ?</p>
                                <div className="flex justify-between ml-4 mt-4">
                                    <a href="createEvent">
                                        <button className="blueButtonEvent rounded-xl text-white px-6 py-4 blackNunito text-xs uppercaseText">
                                            Créer une action
                                        </button>
                                    </a>
                                    <button onClick={props.handlePing} className="whiteButton bg-white rounded-xl border-2 border-neutral-200 px-6 py-2 blueTextColor blackNunito text-xs uppercaseText">
                                        Annuler
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img src="img/mascotte.png" alt="mascotte make it blue" className="w-96" />
                </div>
            </div>
}