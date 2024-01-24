import ActionFilter from "../actionFilter";

export default function SecondStep() {
    return <div>
        <div>
            <h1 className="text-5xl extraBoldNunito fontColor3C">A quelle catégorie appartient ton action ?</h1>
        </div>

        <div className="space-y-5 mt-10">
            <div className="flex space-x-5 h-full">
                <ActionFilter id={"Donation"} index={"changedYellow"} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
                <ActionFilter id={"Donee"} index={"changedGreen"} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
            </div>
            <div className="flex space-x-4">
                <ActionFilter id={"dechet"} index={"changedBlue"} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
                <ActionFilter id={"Petition"} index={"changedGreen"} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
            </div>
            <div className="flex space-x-4">
                <ActionFilter id={"Education"} index={"changedYellow"} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
                <ActionFilter id={"Marche"} index={"changedBlue"} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
            </div>
        </div>
    </div>
}