export default function LoadingScreen() {

    return <div className=" h-screen w-full flex flex-col items-center justify-center absolute top-0 z-20 bg-neutral-50">
        <div className="imgLogo h-2/3  flex items-end">
            <img src="img/victor.png" alt="make a blue logo" className="w-24 h-24 md:w-32 md:h-32 lg:w-80 lg:h-80 mx-auto">

            </img>
        </div>
        <div className="text h-2/3">
            <div className="flex justify-center items-center">
                <p className="size28 text-gray-400 text-center uppercase extraBoldNunito">
                    Chargement
                    <div class="lds-ellipsis"><div>.</div><div>.</div><div>.</div><div></div></div>
                </p>
            </div>
            <div className="flex mt-6 ">
                <p className="text-center text-[24px] mediumNunito">Make it Blue est la plus grande communauté de<br />
                    protecteurs de l'océan au monde.
                </p>
            </div>
        </div>
    </div>
}