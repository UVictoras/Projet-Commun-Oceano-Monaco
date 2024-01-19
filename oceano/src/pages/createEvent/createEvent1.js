import ActionFilter from "../../components/actionFilter";

export default function CreateEvent1() {
    return <div className="firsStep">
        <div className="top flex border-b-2 border-neutral-200 p-4">
            <div className="w-1/3 flex items-center">
                <button type="button">
                    <img src="img/icon/arrow.svg" alt="arrow make it blue" />
                </button>
            </div>
            <div className="w-1/3 flex items-center justify-center">
                <h1 className="fontColor3C extraBoldNunito text-2xl">Créer une action</h1>
            </div>
            <div className="w-1/3 flex justify-end">
                <button className="blueTextColor border-2 border-neutral-200 rounded-2xl px-8 py-3">
                    Enregistrer un brouillon
                </button>
            </div>
        </div>
        <div className="main flex mt-20 h-full ">
            <div className="w-1/3 flex justify-center items-center mt-20">
                <ol class="relative border-s-2 border-[#1CB0F6]">
                    <li class="mb-24 ms-4 flex items-center ">
                        <span class="absolute flex items-center justify-center bg-white w-9 h-9 rounded-full -start-[1.125rem] border-2 border-[#1CB0F6] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                <path d="M2 6.61538L5.98972 10.9997C6.47798 11.5362 7.32202 11.5362 7.81028 10.9997L16 2" stroke="#1CB0F6" stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </span>
                        <p class=" text-xl text-[#9F9FA4] semiBoldNunito ml-4">Description</p>
                    </li>
                    <li class="mb-24 ms-4 flex items-center">
                        <div class="absolute w-9 h-9  backBlue bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
                        <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Type d'action</p>
                    </li>
                    <li class="mb-24 ms-4 flex items-center">
                        <div class="absolute w-9 h-9 bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
                        <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Détails</p>
                    </li>
                    <li class="mb-24 ms-4 flex items-center">
                        <div class="absolute w-9 h-9 bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
                        <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Média</p>
                    </li>
                    <li class="ms-4 flex items-center">
                        <div class="absolute w-9 h-9 bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6]"></div>
                        <p class="text-xl text-[#9F9FA4] semiBoldNunito ml-4">Confirmation</p>
                    </li>
                </ol>
            </div>
            <div className="w-1/2">
                <div>
                    <h1 className="text-5xl extraBoldNunito fontColor3C">A quelle catégorie appartient ton action ?</h1>
                </div>
                <form>
                    <div className="space-y-5 mt-24">
                        <div className="flex space-x-5 h-full">
                            <ActionFilter id={"Donation"} index={"changedYellow"} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
                            <ActionFilter id={"Donee"} index={"changedGreen"} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
                        </div>
                        <div className="flex space-x-4">
                            <ActionFilter id={"dechet"} index={"changedBlue"} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
                            <ActionFilter id={"Petition"} index={"changedGreen"} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
                        </div>
                        <div className="flex space-x-4">
                            <ActionFilter id={"Education"} index={"changedYellow"} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
                            <ActionFilter id={"Marche"} index={"changedBlue"} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
                        </div>
                    </div>
                </form>

            </div>

        </div>
        <div className="flex  w-full ">
            <div className="w-2/6">
                <a href="createEvent" className="w-full flex justify-end">
                    <button type="button" className="uppercaseText whiteButtonAll blueTextColor blackNunito text-base py-3 rounded-2xl text-white w-1/2 mt-8 mr-9 ">Précédent</button>
                </a>
            </div>
            <div className="w-1/2 ">
                <a href="createEventObj2" className="w-full flex">
                    <button type="button" className="uppercaseText blueButtonEvent py-3 blackNunito text-base rounded-2xl text-white w-full mt-8 mr-auto ">Continuer</button>
                </a>
            </div>
        </div>

    </div >
}