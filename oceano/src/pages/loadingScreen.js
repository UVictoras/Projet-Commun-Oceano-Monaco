export default function LoadingScreen() {

    return <div className=" h-screen w-full flex flex-col items-center justify-center absolute top-0 z-30 bg-white space-y-20">
        <div className="flex justify-center items-center">
            <div class="loader"></div>
        </div>
        <div className="flex">
            <p className="text-center text-lg mediumNunito">Make it Blue est la plus grande communauté de<br />
                protecteurs de l'océan au monde.
            </p>
        </div>
    </div>
}