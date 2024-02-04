import Onedate from "../pickonedate";

export default function ThirdStep(props) {

    const handleStart_date = (newValue) => {
        props.register("Start_date", {value : newValue.startDate, shouldValidate: true, shouldDirty: true })
    };

    const handleEnd_date = (newValue) => {
        props.register("End_date", {value : newValue.startDate, shouldValidate: true, shouldDirty: true })
    };

    return <div>
        <div>
            <h1 className="text-5xl extraBoldNunito fontColor3C">Dis-nous en plus sur ton <br /> engagement.</h1>
        </div>
        <div className="mt-4">
            <div className="flex items-end">
                <div className="w-[48%]">
                    <p className="fontColor3C extraBoldNunito text-2xl py-2">Heure de début</p>
                    <Onedate contentPlaceHolder={"Date de début"} onChange={handleStart_date} />
                </div>
                <div>
                    <img src="img/icon/arrow.svg" alt="arrow make it blue" className="transform rotate-180 p-3 w-10" />
                </div>
                <div className="w-[48%]">
                    <p className="fontColor3C extraBoldNunito text-2xl py-2">Heure de fin</p>
                    <Onedate contentPlaceHolder={"Date de fin"} onChange={handleEnd_date} />
                </div>
            </div>
            <div className="flex items-end mt-5 space-x-10 ">
                <div className="w-[48%]">
                    <p className="fontColor3C extraBoldNunito text-2xl py-2">Lieu</p>
                    <input className="w-full bg-gray-200 border-2 border-neutral-200 rounded-2xl p-2 px-4" placeholder="En ligne" />
                </div>
                <div className="w-[48%]">
                    <p className="fontColor3C extraBoldNunito text-2xl py-2">Lien (optionnel)</p>
                    <input className="w-full bg-neutral-200 border-2 border-neutral-200 rounded-2xl p-2 px-4" placeholder="https://oceano.org" {...props.register("link")}/>
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
        </div>
    </div>
}