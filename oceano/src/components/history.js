export default function History() {
    return <button className="history rounded-2xl border-2 border-neutral-200">
        <div className="px-6 py-3 ">
            <div className="flex">
                <div className="w-2/12">
                    <img src="img/profil/loutre.png" alt="pp make it blue" className="w-full" />
                </div>
                <div className="w-4/5 flex items-center ml-4 text-start">
                    <div>
                        <h1 className="text-xl blackNunito fontColor3C">Oscar D.</h1>
                        <p className="text-[#B4B4B4]">Protecteur des océans</p>
                    </div>

                </div>
                <div className="w-1/12 flex items-center justify-end">
                    <p className="text-[#B4B4B4] text-2xl text-end">3h</p>
                </div>
            </div>

            <div className="content mt-6 relative">
                <p className="fontColor3C text-xl extraBoldNunito text-start">Nous avons sauvé une famille de baleines grâce à vous !</p>
                <img src="img/event/whale.svg" alt="whale make it blue" className="rounded-2xl mt-4 "/>
                <button className="absolute flex border-2 border-neutral-200 rounded-2xl px-2.5 space-x-2 py-1 bg-white right-3 bottom-3">
                    <p>268</p>
                    <img src="img/icon/clap.svg" alt="clap hand make it blue" />
                </button>
            </div>
        </div>
    </button>
}