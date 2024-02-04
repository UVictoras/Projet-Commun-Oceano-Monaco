export default function PlacePing(props) {
    return  <div className="absolute top-1/4 right-0 z-30">
                <div className=" z-40 flex ">
                    <div className="">
                        <div className="absolute top-0 relative inline-block bg-white talk-bubble tri-right rounded-xl right-in">
                            <p className=" p-5 px-4 fontColor3C extraBoldNunito text-xl">Pour créer une action,<br /> sélectionne un lieu sur la carte !</p>
                        </div>
                    </div>
                    <img src="img/mascotte.png" alt="mascotte make it blue" className="w-96" />
                </div>
            </div>
}