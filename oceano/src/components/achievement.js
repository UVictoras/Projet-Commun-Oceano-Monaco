export default function Achievement() {
    return <div className="border-2 border-neutral-200 rounded-2xl w-1/2">
        <div className="my-8 flex items-center space-x-2.5 mx-7">
            <div className="img">
                <img src="img/icon/achievement.svg" className="w-16 " alt="achievement make it blue" />
            </div>
            <div className="text space-y-1.5 ">
                <h3 className="fontColor3C text-lg extraBold800">Streak Killer</h3>
                <p className="fontColor3C nunito500 text-base ">Vous avez atteint un streak de 30 actions consécutives </p>
            </div>
        </div>



    </div>
}