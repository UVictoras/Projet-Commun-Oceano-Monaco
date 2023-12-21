import { useEffect } from "react";

export default function MyAction(props) {

    useEffect(() => {
        const progressBar = document.getElementById('progressBarEvent' + props.type.Name);
        if (progressBar) {
            let Pct = (props.type.NbEvents / props.nbEvents) * 100
            progressBar.style.width = `${Pct}%`;
        }
    }, [props.type]);

    return <div className=" ">
        <div className="myActionGreyColor flex items-center rounded-2xl relative">
            <div id={"progressBarEvent" + props.type.Name} className="myActionYellowColor rounded-2xl h-11 flex items-center ">

            </div>
            <div className="absolute flex items-center w-full">
                <img src={props.type.Logo} className="h-3.5 mx-3.5 " alt="coin make it blue" />
                <div className="w-2/3">
                    <p className="text-white w-2/3 extraBoldNunito text-xl whitespace-nowrap">{props.type.Name}</p>
                </div>
                <div className="flex justify-end w-1/3 px-3">
                    <p className="text-white extraBoldNunito text-xl">{props.type.NbEvents}</p>
                </div>
            </div>
        </div>
    </div>
}