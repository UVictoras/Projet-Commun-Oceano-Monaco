import FifthStep from "../components/createEvent.js/fifthStep";
import FirstStep from "../components/createEvent.js/firstStep";
import FourthStep from "../components/createEvent.js/fourthStep";
import SecondStep from "../components/createEvent.js/secondStep";
import ThirdStep from "../components/createEvent.js/thirdStep";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { getUserSession } from "../api/session";
import { addEvent, uploadImage } from "../api/event";
import { useHistory } from "react-router-dom";

export default function CreateEventMain() {
    let history = useHistory();
    const [ user, setUser ] = useState([]);
    const { register, handleSubmit, trigger, watch } = useForm();
    const [numStep, setNumStep] = useState(0);
    const [data, setData] = useState([]);
    const steps = [<FirstStep register={register}/>, <SecondStep register={register}/>, <ThirdStep register={register}/>, <FourthStep register={register}/>, <FifthStep data={data}/>]
    const nameSteps = ["Description", "Type d'action", "Détails", "Média", "Confirmation"]

    const handleClick = (nb) => {
        if(numStep + nb < 5){
            handleData(numStep + nb);
        }else{
            onSubmit();
        }
    };

    useEffect(() => {
        const userFetched = getUserSession();
        userFetched
        .then(result => setUser(result))
        .catch(error=>console.error("Error :",error.message))
    },[]);

    const onSubmit = () => {
        let allData = data;
        // uploadImage(allData.Image)
        allData.x = 1;
        allData.y = 1;
        allData.z = 1;
        allData.region = 1;
        allData.feedback = "";
        allData.thread = 1;
        allData.money = 1;
        allData.XP = 1;
        allData.type = data.type.ID;
        allData.Image = data.Image.name;
        allData.user = data.user.ID;
        // addEvent(allData);
        history.push("/act");
    }

    const handleData = (index) => {
        setNumStep(index)
        const isValid = trigger();
    
        if (isValid) {
          const formData = watch();
          formData.user = user;
          console.log(formData);
          setData(formData);
        }
      };

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
        <form className="main mt-20 " onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
            <div className="flex">
                <div className="w-1/3 h-1/2 flex justify-center  mt-10">
                    <ol class="relative border-s-2 border-[#1CB0F6]">
                        {nameSteps.map((nameStep, index) => (
                            <a key={index} onClick={() => handleData(index)} className={`ms-4 flex items-center ${index != 4 ? " mb-24" : ""}`}>
                                <div class={`absolute w-9 h-9 rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] ${index ==numStep ? " backBlue" : " bg-white"}`}></div>
                                <p class={`text-xl text-[#9F9FA4] semiBoldNunito ml-4 ${index != 0 && index != 4 ? " leading-none" : ""}`}>{nameStep}</p>
                            </a>
                        ))}
                        {/* <a onClick={() => setNumStep(0)} class="mb-24 ms-4 flex items-center ">
                            <div class="absolute w-9 h-9 backBlue rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
                            <p class="text-xl text-[#9F9FA4] semiBoldNunito ml-4">Description</p>
                        </a>
                        <a onClick={() => setNumStep(1)} class="mb-24 ms-4 flex items-center">
                            <div class="absolute w-9 h-9 bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
                            <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Type d'action</p>
                        </a>
                        <a onClick={() => setNumStep(2)} class="mb-24 ms-4 flex items-center">
                            <div class="absolute w-9 h-9 bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
                            <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Détails</p>
                        </a>
                        <a onClick={() => setNumStep(3)} class="mb-24 ms-4 flex items-center">
                            <div class="absolute w-9 h-9 bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6] "></div>
                            <p class="text-xl leading-none text-[#9F9FA4] semiBoldNunito ml-4">Média</p>
                        </a>
                        <a onClick={() => setNumStep(4)} class="ms-4 flex items-center">
                            <div class="absolute w-9 h-9 bg-white rounded-full mt-1.5 -start-[1.125rem] border-2 border-[#1CB0F6]"></div>
                            <p class="text-xl text-[#9F9FA4] semiBoldNunito ml-4">Confirmation</p>
                        </a> */}
                    </ol>

                </div>
                <div className="w-1/2">
                    {steps[numStep]}
                </div>
            </div>
            <div className="flex  w-full">
                <div className="w-2/6">
                    {numStep != 0 ?
                        <a onClick={() => handleClick(-1)} className="w-full flex justify-end">
                            <button type="button" className="uppercaseText whiteButtonAll blueTextColor blackNunito text-base py-3 rounded-2xl text-white w-1/2 mt-8 mr-9 ">Précédent</button>
                        </a>
                    : "" }
                </div>
                <div className="w-1/2 ">
                    <a className="w-full flex">
                        <button type="button" onClick={() => handleClick(1)} className="uppercaseText blueButtonEvent py-3 blackNunito text-base rounded-2xl text-white w-full mt-8 mr-auto ">{numStep != 4 ? "Continuer" : "Partager l'action"}</button>
                    </a>
                </div>
            </div>

        </form>
    </div>
}