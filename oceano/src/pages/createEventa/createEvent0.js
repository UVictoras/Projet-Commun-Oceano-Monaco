import Timeline from "../../components/timeline";

export default function CreateEvent(props) {
    return <div className="newEvent h-full ">
        <div className="top flex border-b-2 border-neutral-200 p-4">
            <div className="w-1/3 flex items-center">
                <button type="button">
                    <img src="img/icon/arrow.svg" alt="arrow make it blue" />
                </button>
            </div>
            <div className="w-1/3 flex items-center justify-center">
                <h1 className="fontColor3C extraBoldNunito text-2xl">Créer une action</h1>
            </div>
            <div className="w-1/3 flex justify-end">
                <button className="blueTextColor border-2 border-neutral-200 rounded-2xl px-8 py-3">
                    Enregistrer un brouillon
                </button>
            </div>
        </div>
        <div className="main flex mt-20 ">
            <Timeline/>
            <div className="w-1/2">
                <h1 className="text-5xl extraBoldNunito fontColor3C">
                    Dis-nous ce que tu souhaites <br /> changer
                </h1>
                <p className="text-[#9F9FA4] semiBoldNunito text-2xl py-4">Sois le plus précis possible dans ce que tu dis !</p>

                <form className="mt-10">
                    <p className="fontColor3C extraBoldNunito text-2xl">Je souhaite...</p>
                    <input className="w-full border-2 border-neutral-200 rounded-2xl p-3 pl-5 mt-3" placeholder="Que la pêche aux baleines soit interdite dans les eaux protégées du Pacifique.">
                    </input>
                    <p className="fontColor3C extraBoldNunito text-2xl mt-11">Dites-nous en plus sur votre engagement</p>
                    <textarea
                        id="message"
                        rows="6" class="block p-2.5 w-full rounded-2xl border-2 border-neutral-200 mt-3"
                        placeholder="On adore les baleines donc on veut les sauver ! " />

                </form>

                <a href="createEventObj" className="w-full flex">
                    <button type="button" className="uppercaseText blueButtonEvent py-3 blackNunito text-base rounded-2xl text-white w-full mt-8 mr-auto ">Continuer</button>
                </a>

            </div>
        </div>


    </div>
}