import ActionFilter from "../../components/actionFilter";

export default function CreateEvent1() {
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
                        <div className="w-[35%] h-[20px] progressBarObjectif rounded-l-lg ">

                        </div>
                        <div className="absolute w-full flex justify-center">
                            <p className="text-center textColorProgressBarObjectif extraBold800">2/4</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="w-1/2 flex justify-end mt-12">
            <div className="w-1/2 ">
                <h2 className=" extraBold800 text-2xl">Comment décririez-vous votre  évènement ?</h2>
            </div>
        </div>
        <div className="mid flex mt-6 justify-end">

            <div className="donationFiltre rounded-2xl w-1/2">

                <form>
                    <div className="px-8 pt-8">
                        <div className="name space-y-2">
                            <p className="extraBoldNunito text-xl">Type d'action :</p>
                            <div className="flex space-x-2">
                                <ActionFilter id={"test"} index={"changedYellow"} />
                                <ActionFilter id={"test1"} index={"changedGreen"} />
                                <ActionFilter id={"test2"} index={"changedBlue"} />
                            </div>
                            <div className="flex space-x-2">
                                <ActionFilter id={"test3"} index={"changedYellow"} />
                                <ActionFilter id={"test4"} index={"changedBlue"} />
                                <ActionFilter id={"test5"} index={"changedGreen"} />
                            </div>
                        </div>
                        <div className="description mt-4 space-y-2">
                            <p className="extraBoldNunito text-xl">Nombre de participants :</p>
                            <p className="extraBoldNunito text-sm greyText">Le nombre de participants moyen par action est de 136.</p>
                            <img src="img/graph.svg" className="h-8" />
                            <p className="extraBoldNunito text-xl">Votre objectif :</p>
                            <div class="relative flex">
                                <div class="absolute inset-y-0 start-0 flex items-center ml-2 w-4">
                                    <img src="img/event/people.svg" alt="people make it blue" />
                                </div>
                                <input type="text" class=" rounded-2xl semiBoldNunito p-2 text-right w-1/6"
                                    id="inline-full-name"
                                    name="userInput"
                                    value="300"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end pr-8 pb-6 space-x-4">
                        <button className="text-xs h-10 bg-white blueTextColor whiteButton p-2.5 px-6 border border-neutral-200 uppercaseText rounded-xl blackNunito">
                            retour
                        </button>
                        <button type="submit" className="text-xs h-10 blueButtonEvent p-2.5 px-6 text-white
                     rounded-xl uppercaseText blackNunito">
                            suivant
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-1/4">
                <img src="img/profil/loutre.gif" alt="Make a blue logo" />
            </div>
        </div>
    </div>
}