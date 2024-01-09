export default function LastAction(props) {
    return <div className="border-2 border-neutral-200 rounded-2xl flex  space-x-5">
        <div className="img">
            <img src={props.event.Image} className="resizeImage rounded-2xl" alt="whale make it blue" />
        </div>
        <div className="mt-3 ">
            <div className="space-y-2">
                <h3 className="fontColor3C extraBold800 text-base p-0.5">{props.event.Title}</h3>
                <div className='donation w-24 p-2 rounded-2xl flex items-center justify-center space-x-2'>
                    <img src={props.event.Logo} alt='coin make it blue' className='w-4' />
                    <p className='text-xs extraBoldNunito'>{props.event.Name}</p>
                </div>
            </div>
            <div className="flex items-center justify-end mr-2">
                <p className="extraBoldNunito text-xs colorD3">22h</p>
            </div>
        </div>

    </div>
}