import { useEffect } from "react";

export default function MyAction(props) {

    useEffect(() => {
        const progressBar = document.getElementById('progressBarEvent');
        if (progressBar) {
            let Pct = (props.type.NbEvents / props.NbEvents) * 100
            progressBar.style.width = `${Pct}%`;
        }
    },[props.type]);
    
    return <div className="">
        <div className="myActionGreyColor rounded-2xl">
            <div id="progressBarEvent" className="myActionYellowColor rounded-2xl h-11 flex items-center">
                <img src={props.type.Logo} className="h-3.5 mx-3.5" />
                <div className="flex space-x-64">
                    <p className="text-white extraBoldNunito text-xl">{props.type.Name}</p>
                    <p className="text-white extraBoldNunito text-xl text-center">{props.type.NbEvents}</p>
                </div>
            </div>
        </div>
    </div>
}