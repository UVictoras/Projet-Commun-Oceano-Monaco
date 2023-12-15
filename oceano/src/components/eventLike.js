export default function EventLike() {
    return <div className="border-2 w-full h-[176px] rounded-2xl flex space-x-7">
        <div className="w-1/3">
            <img src="img/event/dolphin.svg" alt="dolphin make it blue" className="h-44 w-44" />
        </div>
        <div className="w-2/3 my-5">
            <div className="flex">
                <h2 className="extraBold800 text-base fontColor3C">Sauvons la baleine franche de la mer Baltique</h2>
                <button className="w-[37px] h-[37px] p-2  mr-3 rounded-full bg-white border-solid border-2 border-neutral-200">
                    <img src="img/icon/hearth/hearth.svg" alt="like make it blue" className="w-[20px]" />
                </button>
            </div>
            <p className="nunito400 fontColor3C text-sm mt-3">A la COP28, le projet de texte définitif écarte l’abandon à terme des énergies fossiles.</p>
            <div className='donationDate flex space-x-2.5 my-3.5 mb-4'>
                <div className='donation w-[123px] h-[31px] rounded-2xl flex items-center justify-center space-x-2 '>
                    <img src='img/icon/coin.png' alt='coin make it blue' className='w-4' />
                    <p className='text-sm extraBoldNunito'>Donation</p>
                </div>
                <div className="date w-[100px] h-[31px] bg-white border-2 border-neutral-200 rounded-2xl flex items-center justify-center space-x-2 ">
                    <img src='img/event/date.svg' alt='date make it blue' className='w-4' />
                    <p className='text-sm extraBoldNunito'>8 Juin</p>
                </div>
            </div>
        </div>

    </div>
}