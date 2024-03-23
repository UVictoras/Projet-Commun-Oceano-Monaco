import Tab from './tabsEvent';

export default function ModalEvent(props) {
    return <>
        <div className='h-1/4'>

            <img src='img/event/whale.svg' alt='Whale Make A Wave' />
            <button onClick={props.closeModal} className='absolute top-7 right-10'>
                <img src='img/icon/exitWhite.svg' alt='croix Make A Wave' />
            </button>
            <div className='flex justify-end pr-5'>
                <button className='relative border-2 bg-white border-neutral-200 rounded-full p-4 heartPlace'>
                    <img src='img/icon/hearth/hearth.svg' alt='hearth Make A Wave' className='w-6 re' />
                </button>
            </div>
        </div>

        <div className='mx-10 mt-5 '>
            <h2 class="text-[28px] extraBold800">{props.event.Title}</h2>
            <p className='greyText'>Lancé par <span className='blueTextColor semiBoldNunito'>{props.event.Pseudo}</span></p>
            <div className='mt-5 flex'>
                <div className='donationDate w-2/3 flex space-x-1.5'>
                    <div className={props.event.Color + ' px-4 rounded-2xl flex items-center justify-center space-x-2 '}>
                        <img src={props.event.Logo} alt='coin Make A Wave' className='w-4' />
                        <p className='text-sm extraBoldNunito'>{props.event.Name}</p>
                    </div>
                    <div className="date bg-white border-2 px-4 border-neutral-200 rounded-2xl flex items-center justify-center space-x-2 whitespace-nowrap">
                        <img src='img/event/date.svg' alt='date Make A Wave' className='w-4' />
                        <p className='text-sm extraBoldNunito flex'>{new Intl.DateTimeFormat("fr-FR", {month: "long", day: "numeric"}).format(new Date(props.event.End_date))}</p>
                    </div>
                </div>
                <div className='people w-1/3 flex justify-end'>
                    <div className="date p-2.5 bg-white flex items-center justify-center space-x-2 ">
                        <img src='img/event/people.svg' alt='people Make A Wave' className='w-4' />
                        <p className='text-sm extraBold800'>{props.event.NbUsers}</p>
                    </div>
                </div>
            </div>
            <div class="text-sm font-medium text-center text-gray-500">
                <Tab event={props.event}/>
                <div className="flex mx-10 justify-center absolute w-2/3 buttonPlace items-center">
                    <boutton className="w-full h-11 blueButton rounded-2xl blackNunito text-white flex items-center justify-center ">Participer</boutton>
                    <boutton className="ml-2.5 w-16 p-3 flex items-center justify-center border border-neutral-200 bg-white rounded-2xl whiteButton">
                        <img
                            src="img/event/share.png"
                            alt='share Make A Wave'
                        ></img>
                    </boutton>
                </div>
            </div>

        </div>
    </>

}

