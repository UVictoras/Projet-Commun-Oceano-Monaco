export default function FirstPage() {
    return <div className="md:container md:mx-auto flex-col md:flex-row flex items-center justify-center min-h-screen space-y-4">

        <div className="lg:w-1/2 flex-col flex items-end justify-center">
            <img src="img/profil/loutre.gif" alt="Make a blue logo" className="w-32 h-32 lg:w-64 lg:h-64 md:w-32 md:h-32"></img>
        </div>
        <div className="lg:w-1/2 flex items-start blackNunito">
            <div>
                <p className="font-bold lg:text-3xl text-xl  text-center titleFont">
                    Notre quête pour un monde<br />
                    plus bleu. Ensemble.
                </p>

                <div className="mt-8 flex justify-center">
                    <a href="signup">
                        <button class="text-[13px] blueButton text-white font-bold py-2 px-4
                        rounded-xl lg:w-[330px] w-56 uppercaseText text-12 blackNunito">
                            C'est Parti !
                        </button>
                    </a>

                </div>
                <div className="pt-4 flex justify-center">
                    <a href="signin">
                        <button class="lg:w-[330px] w-56 text-[13px] h-[50px] bg-white blueTextColor whiteButton font-bold py-2 px-4 
                     rounded-xl border border-neutral-200 uppercaseText text-12 blackNunito">
                            J'ai déjà un compte
                        </button>
                    </a>
                </div>
            </div>

        </div>



    </div >
}