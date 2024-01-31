export default function AboveCommunity() {
    return <div className="community" >
        <div className="absolute w-full">
            <h1 className="mt-20 nunito500 text-center text-5xl fontColor3C">Objectif : <span className="blueTextColor">Nettoyer 500 plages</span></h1>
            <div className="w-full relative items-center mt-20">
                <h2 className="extraBold800 fontColor3C absolute left-1/2  transform -translate-x-1/2  text-center text-[275px] ">267</h2>
                <h3 className="absolute left-[65%] extraBoldNunito fontColor3C  text-8xl mt-52">/ 500</h3>
            </div>
        </div>


        <div className="absolute bottom-24 w-full flex justify-center items-center">
            <div className="w-8/12 h-6 bg-neutral-200 rounded-l-full">
                <div className="w-[70%] h-6 rounded-l-full backBlue "></div>
            </div>
            <img src="img/icon/chest.svg" alt="chest make it blue" className="ml-6 w-24"/>
        </div>
    </div>
}