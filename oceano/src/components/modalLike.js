import EventLike from './eventLike';
import Tab from './tabsEvent';

export default function ModalLike(props) {
    return <div className='mx-9 '>
        <div className='mt-9 flex space-x-[388px]' >
            <div className='text flex space-x-4 items-center'>
                <h1 className='fontColor3C extraBold800 text-[27px]'>Favoris</h1>
                <p className='greyText nunito500'>32</p>
            </div>
            <div className='flex items-center justify-end'>
                <button onClick={props.closeModal}>
                    <img src='img/icon/exit.png' alt='exit make it blue' />
                </button>

            </div>

        </div>
        <div className='filter '>
            <div className='filter flex space-x-2.5 my-3.5 mb-7'>
                <div className='p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center space-x-2'>
                    <img src='img/icon/petition.svg' alt='petition make it blue' className='w-3' />
                    <p className='text-sm extraBoldNunito'>Pétition</p>
                </div>
                <div className='donation p-1 rounded-xl flex items-center justify-center space-x-2 '>
                    <img src='img/icon/coin.png' alt='coin make it blue' className='w-3' />
                    <p className='text-sm extraBoldNunito'>Donation</p>
                </div>
                <div className="date p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center space-x-2 ">
                    <img src='img/event/date.svg' alt='date make it blue' className='w-4' />
                    <p className='text-sm extraBoldNunito'>8 Juin</p>
                </div>
                <div className='p-1 bg-white border-2 border-neutral-200 rounded-xl flex items-center justify-center space-x-2'>
                    <img src='img/bottle.svg' alt='bottle make it blue' className='w-2' />
                    <p className='text-sm extraBoldNunito'>Collecte de déchets</p>
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