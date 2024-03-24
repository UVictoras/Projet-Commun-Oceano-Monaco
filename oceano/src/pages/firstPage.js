export default function FirstPage() {
    return <div className="md:container md:mx-auto flex-col md:flex-row flex items-center justify-center min-h-screen space-y-4 relative">
    
        <img src="img/firstPage.png" alt="Make a Wave logo" className="absolute left-20"></img>

        <div className="lg:w-1/2 flex items-start blackNunito relative ml-auto ">
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