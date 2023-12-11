export default function FirstPage() {
    return <div className="md:container md:mx-auto flex-col md:flex-row flex items-center justify-center min-h-screen">

        <div className="w-full md:w-1/2 md:flex-col flex items-center justify-center">
            <img src="img/avatar.png" alt="Make a blue logo" className="w-16 h-16 lg:w-64 lg:h-64 md:w-32 md:h-32"></img>
        </div>
        <div className="w-full md:w-1/2 md:flex-col justify-center ml-4 blackNunito">
            <p className="font-bold  size28 w-2/3 text-center titleFont">

                Notre quête pour un monde<br />
                plus bleu. Ensemble.
            </p>
            <div className="mt-8">
                    <a href="signup">
                        <button class="w-2/3 text-[13px] blueButton text-white font-bold py-2 px-4
                        rounded-xl  uppercaseText texet-12 blackNunito">
                            C'est Parti !
                        </button>
                    </a>
                
            </div>
            <div className=" pt-4">
                <a href="signin">
                    <button class="w-2/3 text-[13px] h-[50px] blueTextColor whiteButton font-bold py-2 px-4 border-b-4 
                     rounded-xl border border-neutral-200 uppercaseText text-12 blackNunito">
                        J'ai déjà un compte
                    </button>
                </a>           
            </div>
        </div>



    </div >
}