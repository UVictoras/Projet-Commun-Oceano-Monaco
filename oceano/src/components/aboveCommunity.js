import History from "./history";

export default function AboveCommunity() {
    return <div className="community" >
        <div className="absolute w-full">
            <h1 className="mt-20 nunito500 text-center text-5xl fontColor3C">Objectif : <span className="blueTextColor">Nettoyer 500 plages</span></h1>
            <div className="w-full relative items-center mt-20">
                <h2 className="extraBold800 fontColor3C absolute left-1/2  transform -translate-x-1/2  text-center text-[275px] ">267</h2>
                <h3 className="absolute left-[65%] extraBoldNunito fontColor3C  text-8xl mt-52">/ 500</h3>
            </div>
        </div>
        <div className="timeline">
            <div class="absolute bottom-36 left-[20%] flex justify-center items-center px-3 h-14 backBlue text-white rounded-2xl mb-12">

                <div class="w-5 h-5  backBlue absolute -bottom-6 transform rounded-full z-10 mt-2"></div>

                <div class="w-10 h-1.5 backBlue absolute -bottom-10 z-0 transform rotate-90 "></div>

                <div class="flex space-x-2 h-full">
                    <div className="flex mt-2 items-start ">
                        <img src="img/icon/star.svg" className="" />
                    </div>
                    <div className="flex items-center">
                        <h1 class="text-lg">Bannière “My Dear Beach”</h1>
                    </div>
                    <div className="flex items-start mt-2">
                        <img src="img/icon/star.svg" className="w-6" />
                    </div>
                </div>

            </div>
            <div class="absolute bottom-36 flex left-[42%] justify-center items-center px-3 h-14 backBlue text-white rounded-2xl mb-12">

                <div class="w-5 h-5  backBlue absolute -bottom-6 transform rounded-full z-10 mt-2"></div>

                <div class="w-10 h-1.5 backBlue absolute -bottom-10 z-0 transform rotate-90 "></div>

                <div class="flex space-x-2 h-full">
                    <div className="flex mb-2 items-end ">
                        <img src="img/icon/star.svg" className="" />
                    </div>
                    <div className="flex items-center">
                        <h1 class="text-lg">Bannière “My Dear Beach”</h1>
                    </div>
                    <div className="flex items-start mt-2">
                        <img src="img/icon/star.svg" className="w-6" />
                    </div>
                </div>

            </div>
            <div class="absolute bottom-36 flex left-[68%] justify-center items-center  py-4 text-white rounded-2xl mb-12">

                <div class="w-5 h-5  bg-neutral-200 absolute -bottom-6 transform rounded-full z-10 mt-2"></div>

                <div class="w-8 h-1.5 bg-neutral-200 absolute -bottom-10 z-0 transform rotate-90 "></div>

                <div class="flex-auto">
                    <img src="img/icon/locker.png" alt="locker make it blue" />

                </div>

            </div>
            <div className="absolute bottom-24 w-full flex justify-center items-center">
                <div className="w-8/12 h-6 bg-neutral-200 rounded-l-full">
                    <div className="w-[70%] h-6 rounded-l-full backBlue "></div>
                </div>
                <img src="img/icon/chest.svg" alt="chest make it blue" className="ml-6 w-24" />
            </div>



        </div>
        <div className="stat absolute w-full grid grid-cols-3 px-8 -bottom-1/3">
            <div className="text-center">
                <h1 className="text-8xl extraBold800 text-white">231</h1>
                <p className="text-5xl text-white semiBoldNunito">animaux <br /> réhabilités</p>
            </div>
            <div className="text-center">
                <h1 className="text-8xl extraBold800 text-white">231</h1>
                <p className="text-5xl text-white semiBoldNunito">hectares  <br /> protégés</p>
            </div>
            <div className="text-center">
                <h1 className="text-8xl extraBold800 text-white">231</h1>
                <p className="text-5xl text-white semiBoldNunito">plages <br /> nettoyées</p>
            </div>
        </div>
    </div>
}