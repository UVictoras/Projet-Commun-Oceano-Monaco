export default function History(props) {
    return <button className="history rounded-2xl border-2 border-neutral-200">
        <div className="px-6 py-3 ">
            <div className="flex">
                <div className="w-2/12">
                    <img src={props.history.PP} alt="pp Make A Wave" className="w-full" />
                </div>
                <div className="w-4/5 flex items-center ml-4 text-start">
                    <div>
                        <h1 className="text-xl blackNunito fontColor3C">{props.history.Name}</h1>
                        <p className="text-[#B4B4B4]">{props.history.Title}</p>
                    </div>

                </div>
                <div className="w-1/12 flex items-center justify-end">
                    <p className="text-[#B4B4B4] text-2xl text-end">{props.history.Time}</p>
                </div>
            </div>

            <div className="content mt-6 relative">
                <p className="fontColor3C text-xl extraBoldNunito text-start">{props.history.Text}</p>
                <img src={props.history.Image} alt="whale Make A Wave" className="rounded-2xl mt-4 w-full"/>
                <button className="absolute flex border-2 border-neutral-200 rounded-2xl px-2.5 space-x-2 py-1 bg-white right-3 bottom-3">
                    <p>{props.history.Nb}</p>
                    <img src="img/icon/clap.svg" alt="clap hand Make A Wave" />
                </button>
            </div>
        </div>
    </button>
}