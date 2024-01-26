import FifthStep from "../components/createEvent.js/fifthStep";
import FirstStep from "../components/createEvent.js/firstStep";
import FourthStep from "../components/createEvent.js/fourthStep";
import SecondStep from "../components/createEvent.js/secondStep";
import ThirdStep from "../components/createEvent.js/thirdStep";

export default function CreateEventMain() {

    return <div className="newEvent h-full ">
        <div className="top flex border-b-2 border-neutral-200 p-4">
            <div className="w-1/3 flex items-center ml-4">
                <a href="/act" >
                    <button type="button">
                        <img src="img/icon/arrow.svg" alt="arrow make it blue" />
                    </button>
                </a>
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
        <form className="main mt-20 ">
            <div className="flex">
                <div className="w-1/3 h-1/2 flex justify-center  mt-10">
                    <ol class="relative border-s-2 border-[#1CB0F6]">
                        <button class="mb-24 ms-4 flex items-center ">
                            <div class="absolute w-9 h-9 backBlue rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
                            <p class=" text-xl text-[#9F9FA4] semiBoldNunito ml-4">Description</p>
                        </button>
                        <button class="mb-24 ms-4 flex items-center">
                            <div class="absolute w-9 h-9 bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
                            <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Type d'action</p>
                        </button>
                        <button class="mb-24 ms-4 flex items-center">
                            <div class="absolute w-9 h-9 bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
                            <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Détails</p>
                        </button>
                        <button class="mb-24 ms-4 flex items-center">
                            <div class="absolute w-9 h-9 bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
                            <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Média</p>
                        </button>
                        <button class="ms-4 flex items-center">
                            <div class="absolute w-9 h-9 bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6]"></div>
                            <p class="text-xl text-[#9F9FA4] semiBoldNunito ml-4">Confirmation</p>
                        </button>
                    </ol>

                </div>
                <div className="w-1/2">
                    <FifthStep />
                </div>
            </div>
            <div className="flex  w-full">
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

        </form>
    </div>
}