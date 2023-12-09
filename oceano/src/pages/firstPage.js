export default function FirstPage() {
    return <div className="md:container md:mx-auto flex-col md:flex-row flex items-center justify-center min-h-screen">

        <div className="w-full md:w-1/2 md:flex-col flex items-center justify-center">
            <img src="img/avatar.png" alt="Make a blue logo" className="w-16 h-16 lg:w-64 lg:h-64 md:w-32 md:h-32"></img>
        </div>
        <div className="w-full md:w-1/2 md:flex-col justify-center ml-4 blackNunito">
            <p className="font-bold  size28 w-2/3 flex text-center text-gray-600">

                La plateforme<br />
                communautaire gratuite pour protéger les océans !
            </p>
            <div className="mt-8">
                    <a href="act">
                        <button class="w-2/3 text-[13px] bg-sky-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-sky-600 
                        hover:border-blue-500 rounded-lg  uppercaseText texet-12">
                            C'est Parti !
                        </button>
                    </a>
                
            </div>
            <div className=" pt-4">
                <a href="loading"> 
                    <button class="w-2/3 text-[13px] hover:bg-gray-200 text-sky-500 font-bold py-2 px-4 border-b-4 border-blue-700 
                    hover:border-gray-300 rounded-lg border border-neutral-200 uppercaseText text-12">
                        J'ai déjà un compte
                    </button>
                </a>           
            </div>
        </div>



    </div >
}