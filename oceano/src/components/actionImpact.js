export default function ActionImpact(props) {
    return <button id="chat" className="border-2 w-full rounded-2xl flex space-x-7 hover:bg-neutral-200" onClick={props.isChatOpen?props.closeChat:props.openChat}>
        <div className="w-1/3">
            <img src={props.event.Image} alt="dolphin make it blue" className="h-[196px] w-[196px] rounded-2xl object-cover " />
        </div>
        <div className="w-2/3 pt-4">
            <div className="flex justify-start">
                <h2 className="extraBold800 text-base fontColor3C text-start">{props.event.Title}</h2>
            </div>
            <p className="nunito400 fontColor3C text-sm  text-start p-2">{props.event.Description}</p>
            <div className='donationDate flex space-x-2.5 mt-2'>
                <div className={props.event.Color + ' p-2 rounded-2xl flex items-center justify-center space-x-2 '}>
                    <img src={props.event.Logo} alt='coin make it blue' className='w-5' />
                    <p className='text-sm extraBoldNunito'>{props.event.Name}</p>
                </div>
                <div className="date p-2 bg-white border-2 border-neutral-200 rounded-2xl flex items-center justify-center space-x-2 ">
                    <img src='img/event/date.svg' alt='date make it blue' className='w-4' />
                    <p className='text-sm extraBoldNunito'>{new Intl.DateTimeFormat("fr-FR", { month: "long", day: "numeric" }).format(new Date(props.event.End_date))}</p>
                </div>
            </div>

        </div>

    </button>
}