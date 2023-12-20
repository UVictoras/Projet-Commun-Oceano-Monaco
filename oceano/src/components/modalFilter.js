import { isSelected } from "../utils/webFunction";
import ActionFilter from "./actionFilter";
import Onedate from "./pickonedate";

export default function ModalFilter(props) {

    return <div className='mx-9 '>
        <div className='mt-9 flex' >
            <div className='text flex space-x-4 items-center w-2/3'>
                <h1 className='fontColor3C extraBold800 text-[27px]'>Filtres</h1>
            </div>
            <div className='flex w-1/3 items-center justify-end'>
                <button onClick={props.closeModal}>
                    <img src='img/icon/exit.png' alt='exit make it blue' />
                </button>
            </div>
        </div>
        {/* h-40vh overflow-y-scroll customScrollbar */}
        <div className=" h-[750px] overflow-y-scroll customScrollbar">
            <div className="act mt-9 mx-2">
                <h2 className="fontColor3C text-xl extraBold800 ">Actions</h2>
                <div className="filter flex space-x-5 mt-5">
                    <div className="space-y-4">
                        <div className="flex space-x-2">
                            <ActionFilter id={"donation"} index={"changedYellow"} />

                            <ActionFilter id={"donne"} index={"changedYellow"} />

                        </div>
                        <div className="flex space-x-2">
                            <ActionFilter id={"dechet"} index={"changedGreen"} />

                            <ActionFilter id={"petition"} index={"changedGreen"} />

                        </div>
                        <div className="flex space-x-2">
                            <ActionFilter id={"donation"} index={"changedYellow"} />

                            <ActionFilter id={"marche"} index={"changedBlue"} />

                        </div>
                    </div>
                </div>
                <div className="date mt-6 mx-2">
                    <h2 className="fontColor3C extraBold800 text-xl">Date</h2>
                    <div className="flex space-x-7 items-center mt-4">
                        <Onedate contentPlaceHolder={"Date de début"} />
                        <p>-</p>
                        <Onedate contentPlaceHolder={"Date de fin"} />
                    </div>
                </div>
                <div className="numbreParticipant">
                    <h2 className="fontColor3C extraBold800 text-xl mt-9">Nombre de participants</h2>
                    <p className="mt-3 greyText semiBoldNunito text-sm">Le nombre de participants moyen par action est de 136.</p>
                </div>
                <div className="graphPeople pt-10 flex space-x-2">
                    <div className="graph w-1/2">
                        <img src="img/graph.svg" alt="graphics make it blue" />
                    </div>
                    <div className="w-1/2 flex items-center space-x-2">
                        <div class="relative w-full flex">
                            {/* <div class="absolute inset-y-0 start-0 flex items-center ml-2 pointer-events-none w-4">
                            <img src="img/event/people.svg" alt="people make it blue" />
                        </div> */}
                            <input type="text" class="bg-white border-2 border-gray-200 rounded-2xl w-full semiBoldNunito p-2"
                                id="inline-full-name"
                                name="userInput"
                                value="20"
                            />
                        </div>
                        <p>-</p>
                        <div class="relative w-full flex">
                            {/* <div class="absolute inset-y-0 start-0 flex items-center ml-2 pointer-events-none w-4">
                            <img src="img/event/people.svg" alt="people make it blue" />
                        </div> */}
                            <input type="text" class="bg-white border-2 border-gray-200 rounded-2xl w-full semiBoldNunito p-2"
                                id="inline-full-name"
                                name="userInput"
                                value="300"
                            />
                        </div>
                    </div>
                </div>
                <div className="creator mt-11 mx-2">
                    <h2 className="extraBold800 fontColor3C text-xl">Créateur</h2>
                    <div className="flex space-x-4">
                        <div className="w-1/2 mt-5">
                            <button className="donationFiltre rounded-2xl flex items-center hover:bg-neutral-200 space-x-2 w-full p-2" id={"association"} onClick={() => isSelected("association", "changedCreator")}>
                                <div className="ml-2 mr-2">
                                    <img src='img/filter/defender.svg' alt='defender make it blue' className='w-16' />
                                </div>
                                <div className="text-start py-2 pr-2 space-y-1">
                                    <h3 className='text-sm extraBoldNunito'>Associations</h3>
                                    <p className="semiBoldNunito greyText text-xs">Donnez une petite somme d’argent pour une cause qui compte pour vous.</p>
                                </div>
                            </button>
                        </div>
                        <div className="w-1/2 mt-5">
                            <button className="donationFiltre rounded-2xl flex items-center hover:bg-neutral-200 space-x-2 w-full p-2" id={"particular"} onClick={() => isSelected("particular", "changedCreator")}>
                                <div className="ml-2 mr-2">
                                    <img src='img/notif/girl.svg' alt='defender make it blue' className='w-18' />
                                </div>
                                <div className="text-start py-2 pr-2 space-y-1">
                                    <h3 className='text-sm extraBoldNunito'>Particuliers</h3>
                                    <p className="semiBoldNunito greyText text-xs">N’importe qui peut lancer son initiative de protection des océans, y compris toi !</p>
                                </div>
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div >
    </div>
}