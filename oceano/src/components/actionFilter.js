export default function ActionFilter(props) {
    return <div>
        <button className="donationFiltre p-1 rounded-2xl flex items-center hover:bg-neutral-200 space-x-2  h-full" id={props.type.Name} onClick={()=>props.handleClick(props.type)} type="button">
            <div className="ml-2 mr-2">
                <img src={props.type.Logo} alt='coin make it blue' className='w-12' />
            </div>

            <div className="text-start py-2 pr-2">
                <h3 className={`${props.fonth3Size} extraBoldNunito`}>{props.type.Name}</h3>
                <p className={`${props.fontpSize} semiBoldNunito greyText`}>{props.type.Description}</p>
            </div>
        </button>
    </div>
}