export default function FirstStep(props) {
    return <div>
        <h1 className="text-5xl extraBoldNunito fontColor3C">
            Dis-nous ce que tu souhaites <br /> changer
        </h1>
        <p className="text-[#9F9FA4] semiBoldNunito text-2xl py-4">Sois le plus précis possible dans ce que tu dis !</p>

        <div className="mt-4">
            <p className="fontColor3C extraBoldNunito text-2xl">Je souhaite...</p>
            <input  className="w-full border-2 border-neutral-200 rounded-2xl p-3 pl-5 mt-3" 
                    placeholder="Que la pêche aux baleines soit interdite dans les eaux protégées du Pacifique."
                    {...props.register("title")}
                    />
            <p className="fontColor3C extraBoldNunito text-2xl mt-11">Dites-nous en plus sur votre engagement</p>
            <textarea
                id="message"
                rows="6" class="block p-2.5 w-full rounded-2xl border-2 border-neutral-200 mt-3"
                placeholder="On adore les baleines donc on veut les sauver ! " 
                {...props.register("description")}
                />
                

        </div>

    </div>
}