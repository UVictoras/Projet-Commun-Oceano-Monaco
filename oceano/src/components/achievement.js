export default function Achievement(props) {
    return <div className="border-2 border-neutral-200 rounded-2xl w-1/2">
        <div className="my-8 flex items-center space-x-2.5 mx-7">
            <div className="img">
                <img src={props.badge.Image} className="w-16 " alt="achievement make it blue" />
            </div>
            <div className="text space-y-1.5 ">
                <h3 className="fontColor3C text-lg extraBold800">{props.badge.Name}</h3>
                <p className="fontColor3C nunito500 text-base ">{props.badge.description}</p>
            </div>
        </div>



    </div>
}