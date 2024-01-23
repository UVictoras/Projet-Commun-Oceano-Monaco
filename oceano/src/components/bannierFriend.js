export default function BannierFriend() {

    return (<button className="border-2 border-neutral-200 rounded-lg w-full p-2 flex items-center relative mt-3">
        <div className="w-1/5">
            <img src="img/profil/loutre.png" alt="photo de profil make it blue" className="w-16" />
        </div>
        <div className="w-1/3 text-start">
            <h1 className="blackNunito text-xl fontColor3C">Victor</h1>
            <p className="semiBoldNunito text-sm levelColor">Héros des océans</p>
        </div>
        <div className="badge flex items-center space-x-4 ml-4">
            <div className="h-9 w-9 rounded-xl badgeColor">

            </div>
            <div className="h-9 w-9 rounded-xl badgeColor">

            </div>
            <div className="h-9 w-9 rounded-xl badgeColor">

            </div>
            <div className="h-9 w-9 rounded-xl badgeColor">

            </div>
        </div>
        <div className="absolute backgroundE45757 top-[-14px] right-4 rounded-md">
            <p className="px-2 py-1 blackNunito text-xs text-white">3ème semaine</p>
        </div>
    </button>)


}