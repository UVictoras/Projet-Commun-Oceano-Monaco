import Calendar from "./calendar";
import Onedate from "./pickonedate";

export default function ModalFilter(closeModal) {
    return <div className='mx-9 '>
        <div className='mt-9 flex space-x-[445px]' >
            <div className='text flex space-x-4 items-center'>
                <h1 className='fontColor3C extraBold800 text-[27px]'>Filtres</h1>
            </div>
            <div className='flex items-center justify-end'>
                <button onClick={closeModal}>
                    <img src='img/icon/exit.png' alt='exit make it blue' />
                </button>
            </div>
        </div>
        <div className="act mt-9">
            <h2 className="fontColor3C text-xl extraBold800 ">Actions</h2>
            <div className="filter flex space-x-3.5 mt-5">
                <div className="w-1/2 space-y-4">
                    <div className=''>
                        <button className="donationFiltre w-72 h-20 rounded-2xl flex items-center space-x-2 ">
                            <div className="ml-5 mr-3.5">
                                <img src='img/icon/coin.png' alt='coin make it blue' className='w-10' />
                            </div>

                            <div className="text-start">
                                <h3 className='text-sm extraBoldNunito '>Donations</h3>
                                <p className="semiBoldNunito greyText text-xs">Donnez une petite somme d’argent pour une cause qui compte pour vous.</p>
                            </div>
                        </button>
                    </div>

                    <div className=''>
                        <button className="waste bg-white border-2 border-neutral-200 w-72 h-20 rounded-2xl flex items-center  space-x-2">
                            <div className="ml-5 mr-3.5">
                                <img src='img/bottle.svg' alt='bottle make it blue' className='w-10' />
                            </div>
                            <div className="text-start">
                                <h3 className='text-sm extraBoldNunito'>Collecte de déchets</h3>
                                <p className="semiBoldNunito greyText text-xs">Rejoignez d’autres personnes pour nettoyer un lieu le temps d’une journée..</p>
                            </div>
                        </button>
                    </div>

                    <div className=''>
                        <button className="waste bg-white border-2 border-neutral-200 w-72 h-20 rounded-2xl flex items-center  space-x-2">
                            <div className="ml-5 mr-3.5">
                                <img src='img/icon/coin.png' alt='coin make it blue' className='w-10' />
                            </div>
                            <div className="text-start">
                                <h3 className='text-sm extraBoldNunito'>Education & sensibilisation</h3>
                                <p className="semiBoldNunito greyText text-xs">La sensibilisation et l’éducation sont aussi impactants que les autres actions.</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className="w-1/2 space-y-4">
                    <div className=''>
                        <button className="waste bg-white border-2 border-neutral-200 w-72 h-20 rounded-2xl flex items-center  space-x-2">
                            <div className="ml-5 mr-3.5">
                                <img src='img/bottle.svg' alt='bottle make it blue' className='w-10' />
                            </div>
                            <div className="text-start">
                                <h3 className='text-sm extraBoldNunito'>Collecte de déchets</h3>
                                <p className="semiBoldNunito greyText text-xs">Des instituts scientifiques et centres de recherche ont besoin de vous !</p>
                            </div>
                        </button>
                    </div>
                    <div className=''>
                        <button className="waste bg-white border-2 border-neutral-200 w-72 h-20 rounded-2xl flex items-center  space-x-2">
                            <div className="ml-5 mr-3.5">
                                <img src='img/petition.svg' alt='bottle make it blue' className='w-10' />
                            </div>
                            <div className="text-start">
                                <h3 className='text-sm extraBoldNunito'>Collecte de déchets</h3>
                                <p className="semiBoldNunito greyText text-xs">Des instituts scientifiques et centres de recherche ont besoin de vous !</p>
                            </div>
                        </button>
                    </div>
                    <div className=''>
                        <button className="waste bg-white border-2 border-neutral-200 w-72 h-20 rounded-2xl flex items-center  space-x-2">
                            <div className="ml-5 mr-3.5">
                                <img src='img/petition.svg' alt='bottle make it blue' className='w-10' />
                            </div>
                            <div className="text-start">
                                <h3 className='text-sm extraBoldNunito'>Collecte de déchets</h3>
                                <p className="semiBoldNunito greyText text-xs">Des instituts scientifiques et centres de recherche ont besoin de vous !</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className="date mt-9">
            <h2 className="fontColor3C extraBold800 text-xl">Date</h2>
            <div className="flex space-x-7 items-center mt-[18px]">
                <Onedate contentPlaceHolder={'test'} />
                <p>-</p>
                <Onedate />
            </div>
        </div>
        <div className="numbreParticipant">
            <h2 className="fontColor3C extraBold800 text-xl mt-11">Nombre de participants</h2>

        </div>
    </div>
}