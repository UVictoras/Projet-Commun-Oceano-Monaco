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
            <div className='filter overflow-x-scroll horizontalScrollbar  whitespace-nowrap '>
                <div className='min-w-full mb-7 my-3.5 space-x-2.5 flex'>
                    <button className='p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center '>
                        <img src='img/icon/petition.svg' alt='petition make it blue' className='w-3 ml-2' />
                        <p className='text-sm extraBoldNunito px-3'>Pétition</p>
                    </button>
                    <button className='donation p-1 rounded-xl flex items-center justify-center inline'>
                        <img src='img/icon/coin.png' alt='coin make it blue' className='w-3 ml-2' />
                        <p className='text-sm extraBoldNunito px-3 py-1'>Donation</p>
                    </button>
                    <button className='p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center '>
                        <img src='img/bottle.svg' alt='bottle make it blue' className='w-2 ml-2' />
                        <p className='text-sm extraBoldNunito px-3'>Collecte de déchets</p>
                    </button>
                    <button className='p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center  '>
                        <img src='img/bottle.svg' alt='bottle make it blue' className='w-2 ml-2' />
                        <p className='text-sm extraBoldNunito px-3'>Collecte de déchets</p>
                    </button>
                    <button className='p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center '>
                        <img src='img/bottle.svg' alt='bottle make it blue' className='w-2 ml-2' />
                        <p className='text-sm extraBoldNunito px-3'>Collecte de déchets</p>
                    </button>
                    <button className='p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center '>
                        <img src='img/bottle.svg' alt='bottle make it blue' className='w-2 ml-2' />
                        <p className='text-sm extraBoldNunito px-3'>Collecte de déchets</p>
                    </button>
                    <button className='p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center '>
                        <img src='img/bottle.svg' alt='bottle make it blue' className='w-2 ml-2' />
                        <p className='text-sm extraBoldNunito px-3'>Collecte de déchets</p>
                    </button>
                </div>

            </div>
        </div>
        <div className='space-y-4 h-[700px] customScrollbar overflow-y-scroll'>
            <EventLike />
            <EventLike />
            <EventLike />
            <EventLike />
        </div>

    </div>

}

