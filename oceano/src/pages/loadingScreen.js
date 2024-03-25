export default function LoadingScreen() {

    return <div className=" h-screen w-full flex flex-col items-center justify-center absolute top-0 z-40 bg-white space-y-17">
        <div className="flex justify-center items-center">
            <img src="img/loading.gif" className=""></img>
            {/* <img src=""></img> */}
        </div>
        <div className="space-y-2">
            <p className="text-center text-[#A9A9A9] text-2xl">Chargement...</p>
            <div className="flex">
                <p className="text-center text-lg mediumNunito">Make A Wave est la plus grande communauté de<br />
                    protecteurs de l'océan au monde.
                </p>
            </div>
        </div>
    </div>
}