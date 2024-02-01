export default function ValidePing(props) {
    return <div className=" z-40 flex ">
        <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" width="455" height="116" viewBox="0 0 455 116" fill="none" className="">
                <path d="M416.143 55.3498L453.599 90.6263C454.918 91.8679 454.039
        94.0823 452.228 94.0823H417.514C416.41 94.0823 415.514 94.9777 415.514 96.0823V105.72C415.514 111.243
         411.037 115.72 405.514 115.72H10.2688C4.74594 115.72 0.268799 111.243 0.268799 105.72V10.7202C0.268799 
         5.19737 4.74597 0.720215 10.2688 0.720215H405.514C411.037 0.720215 415.514 5.19737 415.514 10.7202V53.8938C415.514 
         54.445 415.742 54.9718 416.143 55.3498Z" fill="white" />
            </svg>
            <div className="absolute -top-4 space-y-3">
                <p className=" mt-8 px-4 fontColor3C extraBoldNunito text-xl">Es-tu sûr de vouloir créer une <br /> action ici ?</p>
                <div className="flex justify-between ml-4">
                    <a href="createEvent">
                        <button className="blueButtonEvent rounded-xl text-white px-5 py-4 blackNunito text-xs uppercaseText">
                            Créer une action
                        </button>
                    </a>
                    <button onClick={props.handlePing} className="whiteButton bg-white rounded-xl border-2 border-neutral-200 px-5 py-2.5 blueTextColor blackNunito text-xs uppercaseText">
                        Annuler
                    </button>
                </div>
            </div>

        </div>
        <img src="img/mascotte.png" alt="mascotte make it blue" className="w-96" />


    </div>
}