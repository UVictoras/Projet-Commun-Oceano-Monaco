import Onedate from "../../components/pickonedate";

export default function CreateEvent2() {
    return <div className="firsStep">
        <div className="top flex  border-b-2 border-neutral-200 p-4">
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
                        <span class="absolute flex items-center justify-center bg-white w-9 h-9 rounded-full -start-[1.125rem] border-2 border-[#1CB0F6] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                <path d="M2 6.61538L5.98972 10.9997C6.47798 11.5362 7.32202 11.5362 7.81028 10.9997L16 2" stroke="#1CB0F6" stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </span>
                        <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Type d'action</p>
                    </li>
                    <li class="mb-24 ms-4 flex items-center">
                        <div class="absolute w-9 h-9 backBlue rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
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
                    <h1 className="text-5xl extraBoldNunito fontColor3C">Dis-nous en plus sur ton <br /> engagement.</h1>
                </div>
                <form className="mt-14">
                    <div className="flex items-end">
                        <div className="w-[48%]">
                            <p className="fontColor3C extraBoldNunito text-2xl py-2">Heure de début</p>
                            <Onedate contentPlaceHolder={"Date de début"} />
                        </div>
                        <div>
                            <img src="img/icon/arrow.svg" alt="arrow make it blue" className="transform rotate-180 p-3 w-10" />
                        </div>
                        <div className="w-[48%]">
                            <p className="fontColor3C extraBoldNunito text-2xl py-2">Heure de fin</p>
                            <Onedate contentPlaceHolder={"Date de fin"} />
                        </div>
                    </div>
                    <div className="flex items-end mt-5 space-x-10 ">
                        <div className="w-[48%]">
                            <p className="fontColor3C extraBoldNunito text-2xl py-2">Lieu</p>
                            <input className="w-full bg-gray-200 border-2 border-neutral-200 rounded-2xl p-2 px-4" placeholder="En ligne" />
                        </div>
                        <div className="w-[48%]">
                            <p className="fontColor3C extraBoldNunito text-2xl py-2">Lien (optionnel)</p>
                            <input className="w-full bg-neutral-200 border-2 border-neutral-200 rounded-2xl p-2 px-4" placeholder="https://oceano.org" />
                        </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="fontColor3C extraBoldNunito text-2xl py-2">Objectif</h2>
                        <p className="text-[#9F9FA4] semiBoldNunito text-xl">Le nombre moyen de participants à une action est 136.</p>
                    </div>
                    <div className="flex space-x-9">
                        <div className="mt-5 w-[31%]">
                            <p className="fontColor3C extraBoldNunito text-base py-3">Palier 1</p>
                            <div class="relative w-full">
                                <div class="absolute inset-y-5 start-0 flex items-center ml-2 pointer-events-none w-4">
                                    <img src="img/event/people.svg" alt="people make it blue" />
                                </div>
                            </div>
                            <input type="text" class="bg-white border-2 border-gray-200 rounded-2xl w-full semiBoldNunito px-7 py-2"
                                id="inline-full-name"
                                name="userInput"
                                value="20"
                            />
                        </div>
                        <div className="mt-5 w-[31%]">
                            <p className="fontColor3C extraBoldNunito text-base py-3">Palier 2</p>
                            <div class="relative w-full">
                                <div class="absolute inset-y-5 start-0 flex items-center ml-2 pointer-events-none w-4">
                                    <img src="img/event/people.svg" alt="people make it blue" />
                                </div>
                            </div>
                            <input type="text" class="bg-white border-2 border-gray-200 rounded-2xl w-full semiBoldNunito px-7 py-2"
                                id="inline-full-name"
                                name="userInput"
                                value="20"
                            />
                        </div>
                        <div className="mt-5 w-[31%]">
                            <p className="fontColor3C extraBoldNunito text-base py-3">Palier 3</p>
                            <div class="relative w-full">
                                <div class="absolute inset-y-5 start-0 flex items-center ml-2 pointer-events-none w-4">
                                    <img src="img/event/people.svg" alt="people make it blue" />
                                </div>
                            </div>
                            <input type="text" class="bg-white border-2 border-gray-200 rounded-2xl w-full semiBoldNunito px-7 py-2"
                                id="inline-full-name"
                                name="userInput"
                                value="20"
                            />
                        </div>
                    </div>
                </form>

            </div>

        </div>
        <div className="flex w-full ">
            <div className="w-2/6 flex justify-end ">
                <a href="createEventObj" className="w-full flex justify-end">
                    <button type="button" className="uppercaseText whiteButtonAll blueTextColor blackNunito text-base py-3 rounded-2xl text-white w-1/2 mt-8 mr-9 ">Précédent</button>
                </a>
            </div>
            <div className="w-1/2 ">
                <a href="createEventObj3" className="w-full flex">
                    <button type="button" className="uppercaseText blueButtonEvent py-3 blackNunito text-base rounded-2xl text-white w-full mt-8 mr-auto ">Continuer</button>
                </a>
            </div>
        </div>

    </div >
}