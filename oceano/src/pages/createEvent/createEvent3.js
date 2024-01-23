import { useState } from "react";
import Onedate from "../../components/pickonedate";

export default function CreateEvent3() {
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
                        <div class="absolute w-9 h-9 backBlue rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
                        <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Média</p>
                    </li>
                    <li class="ms-4 flex items-center">
                        <div class="absolute w-9 h-9 bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6]"></div>
                        <p class="text-xl text-[#9F9FA4] semiBoldNunito ml-4">Confirmation</p>
                    </li>
                </ol>
            </div>
            <div className="w-1/2 space-y-4">
                <div>
                    <h1 className="text-5xl extraBoldNunito fontColor3C">As-tu une image pour illustrer <br /> ton action ?</h1>
                </div>
                <p className="text-[#9F9FA4] semiBoldNunito text-2xl">Les actions avec une image reçoivent jusqu'à 6 fois plus d'engagement !</p>
                <div className="border-2 border-neutral-200 rounded-2xl h-3/4 flex items-center justify-center">
                    <div className="space-y-8">
                        <div className="flex justify-center">
                            <img src={imgSrc} alt="add image make it blue" className="w-32" />
                        </div>
                        <div>
                            <input type="file" hidden id="upload" onChange={changeImage} />
                            <label for="upload" className="blueTextColor border-2 border-neutral-200 rounded-2xl px-8 py-3 extraBoldNunito" >Ajouter une image</label>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="flex w-full ">
            <div className="w-2/6 flex justify-end ">
                <a href="createEventObj2" className="w-full flex justify-end">
                    <button type="button" className="uppercaseText whiteButtonAll blueTextColor blackNunito text-base py-3 rounded-2xl text-white w-1/2 mt-8 mr-9 ">Précédent</button>
                </a>
            </div>
            <div className="w-1/2 ">
                <a href="createEventObj4" className="w-full flex justify-end">
                    <button type="button" className="uppercaseText blueButtonEvent py-3 blackNunito text-base rounded-2xl text-white w-full mt-8 mr-auto ">Continuer</button>
                </a>
            </div>
        </div>

    </div >
}