export default function LastAction() {
    return <div className="border-2 border-neutral-200 rounded-2xl flex  space-x-5">
        <div className="img">
            <img src="img/event/whale.svg" className="h-[112px] w-[112px]" alt="whale make it blue" />
        </div>
        <div className="mt-3 ">
            <div className="space-y-2">
                <h3 className="fontColor3C extraBold800 text-base p-0.5">Sauvons la baleine franche de la mer Baltique</h3>
                <div className='donation w-24 p-2 rounded-2xl flex items-center justify-center space-x-2'>
                    <img src='img/icon/coin.png' alt='coin make it blue' className='w-4' />
                    <p className='text-xs extraBoldNunito'>Donation</p>
                </div>
            </div>
            <div className="flex items-center justify-end mr-2">
                <p className="extraBoldNunito text-xs colorD3">22h</p>
            </div>
        </div>

    </div>
}