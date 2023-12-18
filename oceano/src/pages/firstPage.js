export default function FirstPage() {
    return <div className="md:container md:mx-auto flex-col md:flex-row flex items-center justify-center min-h-screen grid grid-cols-2 gap-x-24">

        <div className="w-full  md:flex-col flex items-end justify-center">
<<<<<<< HEAD
            <img src="img/victor.png" alt="Make a blue logo" className="w-16 h-16 lg:w-64 lg:h-64 md:w-32 md:h-32"></img>
=======
            <img src="img/mascotte.png" alt="Make a blue logo" className="w-16 h-16 lg:w-64 lg:h-64 md:w-32 md:h-32"></img>
>>>>>>> 6182d3c840fe895fad12530dd8d3153c32e703ff
        </div>
        <div className="w-full md:w-1/2 md:flex-col justify-center blackNunito">
            <p className="font-bold  size28 text-center titleFont">
                Notre quête pour un monde<br />
                plus bleu. Ensemble.
            </p>

            <div className="mt-8 flex justify-center">
                    <a href="signup">
                        <button class="text-[13px] blueButton text-white font-bold py-2 px-4
                        rounded-xl w-[330px] uppercaseText text-12 blackNunito">
                            C'est Parti !
                        </button>
                    </a>
                
            </div>
            <div className="pt-4 flex justify-center">
                <a href="signin">
                    <button class="w-[330px] text-[13px] h-[50px] bg-white blueTextColor whiteButton font-bold py-2 px-4 
                     rounded-xl border border-neutral-200 uppercaseText text-12 blackNunito">
                        J'ai déjà un compte
                    </button>
                </a>           
            </div>
        </div>



    </div >
}