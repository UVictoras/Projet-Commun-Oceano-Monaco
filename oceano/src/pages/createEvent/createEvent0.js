export default function CreateEvent() {
    return <div className="newEvent">
        <div className="top flex pt-6 ">
            <h1 className="name blueTextColor text-4xl nunito400 w-1/4 pl-6">Make it blue</h1>
            <div className="w-1/2">
                <div className="step flex flex-wrap nunito400">
                    <h2 className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-center">Description</h2>
                    <h2 className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-center">Objectifs</h2>
                    <h2 className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-center ">Détails</h2>
                    <h2 className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 text-center">Image</h2>

                </div>
                <div className="bar flex justify-center mt-2">
                    <div className="w-3/4 h-[20px] bg-neutral-200 rounded-l-lg flex relative ">
                        <div className="w-[5%] h-[20px] progressBarObjectif rounded-l-lg ">

                        </div>
                        <div className="absolute w-full flex justify-center">
                            <p className="text-center textColorProgressBarObjectif extraBold800">1/4</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-1/2 flex justify-end mt-16">
            <div className="w-1/2 ">
                <h2 className=" extraBold800 text-2xl">Comment décririez-vous votre  évènement ?</h2>
            </div>
        </div>
        <div className="mid flex mt-10">
            <div className="w-1/4">
                <img src="img/profil/loutre.gif" alt="Make a blue logo" />
            </div>
            <div className="donationFiltre rounded-2xl w-1/2">
                <form>
                    <div className="p-8">
                        <div className="name space-y-2">
                            <label
                                for="message" class="extraBoldNunito text-xl">Nom :</label>
                            <textarea
                                id="message" rows="1" class="block p-2.5 w-full text-sm extraBoldNunito rounded-lg 
                donationFiltre"
                                placeholder="l’évènement super cool pour sauver les baleines" />
                        </div>
                        <div className="description mt-4 space-y-2">
                            <label
                                for="message" class="extraBoldNunito text-xl">Description :</label>
                            <textarea
                                id="message" rows="4" class="block p-2.5 w-full text-sm extraBoldNunito rounded-lg 
                donationFiltre"
                                placeholder="En gros, on est là pour sauver des baleines, et en plus l’évènement va être super 
                cool et on va être pleins ! "/>
                        </div>
                    </div>
                    <div className="flex justify-end pr-8 pb-6 space-x-4">
                        <button className="text-xs h-10 bg-white blueTextColor whiteButton p-2.5 px-6 border border-neutral-200 uppercaseText rounded-xl blackNunito">
                            retour
                        </button>
                        <a href="createEventObj">
                            <button className="text-xs h-10 blueButtonEvent p-2.5 px-6 text-white
                     rounded-xl uppercaseText blackNunito">
                                suivant
                            </button>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </div>
}