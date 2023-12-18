import EventLike from './eventLike';

export default function ModalLike(props) {
    return <div className='mx-9 '>
        <div className='mt-9 flex' >
            <div className='text flex space-x-4 items-end w-2/3'>
                <h1 className='fontColor3C extraBold800 text-[27px]'>Favoris</h1>
                <p className='greyText nunito500 pb-1.5'>32</p>
            </div>
            <div className='w-1/3 flex items-center justify-end'>
                <button onClick={props.closeModal}>
                    <img src='img/icon/exit.png' alt='exit make it blue' />
                </button>

            </div>

        </div>
        <div className='filter '>
            <div className='filter flex space-x-2.5 my-3.5 mb-7'>
                <button className='p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center'>
                    <img src='img/icon/petition.svg' alt='petition make it blue' className='w-3' />
                    <p className='text-sm extraBoldNunito px-3'>Pétition</p>
                </button>
                <button className='donation p-1 rounded-xl flex items-center justify-center'>
                    <img src='img/icon/coin.png' alt='coin make it blue' className='w-3' />
                    <p className='text-sm extraBoldNunito px-3 py-1'>Donation</p>
                </button>
                <button className='p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center '>
                    <img src='img/bottle.svg' alt='bottle make it blue' className='w-2 ' />
                    <p className='text-sm extraBoldNunito px-3'>Collecte de déchets</p>
                </button>
            </div>
        </div>
        <div className='space-y-4 h-[700px] customScrollbar overflow-y-scroll'>
            <EventLike />
            <button className="border-2 w-full  rounded-2xl flex space-x-7 hover:bg-neutral-200">
                <div className="w-1/3">
                    <img src="img/like/whaleLike.png" alt="dolphin make it blue" className="" />
                </div>
                <div className="w-2/3 p-4">
                    <div className="flex justify-start">
                        <h2 className="extraBold800 text-base fontColor3C text-start">Sauvons la baleine franche de la mer Baltique</h2>
                        <button className="w-[37px] h-[37px] p-2 mr-3 rounded-full bg-white border-solid border-2 border-neutral-200">
                            <img src="img/icon/hearth/hearth.svg" alt="like make it blue" className="" />
                        </button>
                    </div>
                    <p className="nunito400 fontColor3C text-sm  text-start p-2">A la COP28, le projet de texte définitif écarte l’abandon à terme des énergies fossiles.</p>
                    <div className='donationDate flex space-x-2.5 my-1.5'>
                        <div className='donation p-2 rounded-2xl flex items-center justify-center space-x-2 '>
                            <img src='img/icon/coin.png' alt='coin make it blue' className='w-4' />
                            <p className='text-sm extraBoldNunito'>Donation</p>
                        </div>
                        <div className="date p-2 bg-white border-2 border-neutral-200 rounded-2xl flex items-center justify-center space-x-2 ">
                            <img src='img/event/date.svg' alt='date make it blue' className='w-4' />
                            <p className='text-sm extraBoldNunito'>8 Juin</p>
                        </div>
                    </div>
                </div>

            </button>
            <button className="border-2 w-full  rounded-2xl flex space-x-7 hover:bg-neutral-200">
                <div className="w-1/3">
                    <img src="img/event/dolphin.svg" alt="dolphin make it blue" className="h-44 w-44" />
                </div>
                <div className="w-2/3 p-4">
                    <div className="flex justify-start">
                        <h2 className="extraBold800 text-base fontColor3C text-start">Sauvons la baleine franche de la mer Baltique</h2>
                        <button className="w-[37px] h-[37px] p-2 mr-3 rounded-full bg-white border-solid border-2 border-neutral-200">
                            <img src="img/icon/hearth/hearth.svg" alt="like make it blue" className="w-[20px]" />
                        </button>
                    </div>
                    <p className="nunito400 fontColor3C text-sm  text-start p-2">A la COP28, le projet de texte définitif écarte l’abandon à terme des énergies fossiles.</p>
                    <div className='donationDate flex space-x-2.5 my-1.5'>
                        <div className='donation p-2 rounded-2xl flex items-center justify-center space-x-2 '>
                            <img src='img/icon/coin.png' alt='coin make it blue' className='w-4' />
                            <p className='text-sm extraBoldNunito'>Donation</p>
                        </div>
                        <div className="date p-2 bg-white border-2 border-neutral-200 rounded-2xl flex items-center justify-center space-x-2 ">
                            <img src='img/event/date.svg' alt='date make it blue' className='w-4' />
                            <p className='text-sm extraBoldNunito'>8 Juin</p>
                        </div>
                    </div>
                </div>

            </button>
            <button className="border-2 w-full  rounded-2xl flex space-x-7 hover:bg-neutral-200">
                <div className="w-1/3">
                    <img src="img/event/dolphin.svg" alt="dolphin make it blue" className="h-44 w-44" />
                </div>
                <div className="w-2/3 p-4">
                    <div className="flex justify-start">
                        <h2 className="extraBold800 text-base fontColor3C text-start">Sauvons la baleine franche de la mer Baltique</h2>
                        <button className="w-[37px] h-[37px] p-2 mr-3 rounded-full bg-white border-solid border-2 border-neutral-200">
                            <img src="img/icon/hearth/hearth.svg" alt="like make it blue" className="w-[20px]" />
                        </button>
                    </div>
                    <p className="nunito400 fontColor3C text-sm  text-start p-2">A la COP28, le projet de texte définitif écarte l’abandon à terme des énergies fossiles.</p>
                    <div className='donationDate flex space-x-2.5 my-1.5'>
                        <div className='donation p-2 rounded-2xl flex items-center justify-center space-x-2 '>
                            <img src='img/icon/coin.png' alt='coin make it blue' className='w-4' />
                            <p className='text-sm extraBoldNunito'>Donation</p>
                        </div>
                        <div className="date p-2 bg-white border-2 border-neutral-200 rounded-2xl flex items-center justify-center space-x-2 ">
                            <img src='img/event/date.svg' alt='date make it blue' className='w-4' />
                            <p className='text-sm extraBoldNunito'>8 Juin</p>
                        </div>
                    </div>
                </div>

            </button>
        </div>

    </div>

}

