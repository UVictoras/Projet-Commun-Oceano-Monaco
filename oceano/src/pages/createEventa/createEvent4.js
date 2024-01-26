import { useState } from "react";
import Onedate from "../../components/pickonedate";

export default function CreateEvent4() {
    const [imgSrc, setImgSrc] = useState("img/impact/addImage.png");

    const changeImage = (event) => {
        const img = event.target.files[0];
        console.log(img)
        if (img) {
            setImgSrc(URL.createObjectURL(img))
        } else {
            setImgSrc("img/impact/addImage.png")
        }
    }

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
                <button className="blueTextColor border-2 border-neutral-200 rounded-2xl px-8 py-3 extraBoldNunito">
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
                        <span class="absolute flex items-center justify-center bg-white w-9 h-9 rounded-full -start-[1.125rem] border-2 border-[#1CB0F6] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                <path d="M2 6.61538L5.98972 10.9997C6.47798 11.5362 7.32202 11.5362 7.81028 10.9997L16 2" stroke="#1CB0F6" stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </span>
                        <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Détails</p>
                    </li>
                    <li class="mb-24 ms-4 flex items-center">
                        <span class="absolute flex items-center justify-center bg-white w-9 h-9 rounded-full -start-[1.125rem] border-2 border-[#1CB0F6] ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none">
                                <path d="M2 6.61538L5.98972 10.9997C6.47798 11.5362 7.32202 11.5362 7.81028 10.9997L16 2" stroke="#1CB0F6" stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </span>
                        <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Média</p>
                    </li>
                    <li class="ms-4 flex items-center">
                        <div class="absolute w-9 h-9 backBlue rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6]"></div>
                        <p class="text-xl text-[#9F9FA4] semiBoldNunito ml-4">Confirmation</p>
                    </li>
                </ol>
            </div>
            <div className="w-1/2 space-y-4">
                <div>
                    <h1 className="text-5xl extraBoldNunito fontColor3C">Est-ce que toutes les <br />informations sont correctes ?</h1>
                </div>
                <div className="border-2 border-neutral-200 rounded-2xl h-3/4">
                    <div className="h-1/4 w-full">
                        {/* <img src="img/event/whale.svg" alt="whale make it blue" className=" rounded-2xl w-full h-full object-cover" /> */}
                    </div>
                    <div className="h-3/4 px-5">
                        <div className="h-1/3 grid grid-cols-1 gap-4 content-center">
                            <h1 className="fontColor3C text-3xl extraBold800 mt-">Sauvons la baleine franche de la mer Baltique</h1>
                            <div class="flex items-center">
                                <p class="flex-grow semiBoldNunito greyText">
                                    Lancé par <span className="text-[#1CB0F6] extraBold800"> Matéo C.</span>
                                </p>
                                <div className="flex-shrink-0 flex space-x-3.5 ">
                                    <div className='donation px-4 rounded-2xl flex items-center justify-center space-x-2 py-2'>
                                        <img src='img/icon/coinFilter.svg' alt='coin make it blue' className='w-4' />
                                        <p className='text-sm extraBoldNunito'>Donation</p>
                                    </div>
                                    <div className="date bg-white border-2 px-4 border-neutral-200 rounded-2xl flex items-center justify-center space-x-2 whitespace-nowrap">
                                        <img src='img/event/date.svg' alt='date make it blue' className='w-4' />
                                        <p className='text-sm extraBoldNunito flex'>8 Juin</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="h-1/3 mt-6">
                            <p className="nunito500 fontColor3C text-sm">Nous demandons au gouvernement islandais d'interdire la chasse à la baleine une fois pour toutes.
                                Selon un rapport de l'autorité alimentaire et vétérinaire islandaise, les baleines ont mis jusqu'à deux heures pour mourir lors
                                des chasses islandaises. J’ai créé cet évènement dans l’objectif de sauver tout ces animaux sans défense qui subissent contre leur volonté et
                                la volonté des protecteurs des océans les foudres du capitalisme et de la société occidentale moderne qui est, comme nous... Voir plus</p>

                        </div>
                        <div className="h-1/4 flex items-center space-x-20">
                            <div className="flex semiBoldNunito items-center space-x-2">
                                <img src="img/event/calendar.png" alt="date picker make it blue" className="w-8" />
                                <p>Du 14 Mai au 8 Juin</p>
                            </div>
                            <div className="flex semiBoldNunito items-center space-x-2">
                                <img src="img/event/locate.png" alt="locate make it blue" />
                                <p>En ligne</p>
                            </div>
                            <div className="flex semiBoldNunito items-center space-x-1">
                                <img src="img/event/link.png" alt="link make it blue" />
                                <a href className="underline blueTextColor">Oceanic Conservation</a>
                            </div>
                            <div className="flex extraBold800 items-center space-x-2">
                                <img src="img/event/goal.svg" alt="goal make it blue" />
                                <p >1500 signatures</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div className="flex w-full ">
            <div className="w-2/6 flex justify-end ">
                <a href="createEventObj3" className="w-full flex justify-end">
                    <button type="button" className="uppercaseText whiteButtonAll blueTextColor blackNunito text-base py-3 rounded-2xl text-white w-1/2 mt-8 mr-9 ">Précédent</button>
                </a>
            </div>
            <div className="w-1/2 ">
                <button type="button" className="uppercaseText blueButtonEvent py-3 blackNunito text-base rounded-2xl text-white w-full mt-8 mr-auto ">Continuer</button>
            </div>
        </div>

    </div >
}