import ActionFilter from "../actionFilter";
import { useEffect, useState } from "react";
import { getTypeEvent } from "../../api/event";
import { isSelected } from "../../utils/webFunction";

export default function SecondStep(props) {
    const [ typeEvent, settypeEvent ] = useState([]);
    const [ typeSelect, settypeSelect ] = useState("");

    useEffect(() => {
        const typeEventFetched = getTypeEvent();
        typeEventFetched
        .then(result => settypeEvent(result))
        .catch(error=>console.error("Error :",error.message))
    },[])

    const handleClick = (type) => {
        if(typeSelect.Name == type.Name){
            settypeSelect("")
        }else {
            settypeSelect(type)
            if(typeSelect != ""){
                isSelected(typeSelect.Name, typeSelect.Color)
            }
        }
        isSelected(type.Name, type.Color)
        props.register("type", {value : type, shouldValidate: true, shouldDirty: true })
    };

    return <div>
        <div>
            <h1 className="text-5xl extraBoldNunito fontColor3C">A quelle catégorie appartient ton action ?</h1>
        </div>

        <div className="space-y-5 mt-10">
            <div class="grid grid-cols-2">
                {typeEvent.map((type) =>{
                    return  <div class="p-2"> 
                                <ActionFilter type={type} handleClick={handleClick} fontpSize={"text-base"} fonth3Size={"text-2xl"} />
                            </div>
                })}
            </div>
            {/* <div className="flex space-x-4">
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
            </div> */}
        </div>
    </div>
}