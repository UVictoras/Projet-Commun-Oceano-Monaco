import News from "./news";
// width: 518px;
// height: 468px;
// flex-shrink: 0;
// margin-left: 20px; 
// margin-top: 20px;
export default function ModalNotif(props) {

    return <div id="sticky" className="absolute left-12 mt-10 w-[438px] h-1/2 bg-white border-2 border-solid border-normal-200 rounded-2xl p-4 z-20">
        <button className="text-gray-500 text-2xl  absolute top-5 left-6" onClick={props.closeNotif}>
            <img src="img/icon/exit.png" alt="exit make it blue" />
        </button>
        <h1 className="text-[26px] text-center extraBold800 fontColor3C ">Notifications</h1>


        <div className="flex flex-col items-center overflow-y-scroll customScrollbar h-3/4 ">
            <div className="mx-2">
                <div className="pb-4 w-full mx-auto">
                    <p className="text-center loune relative extraBoldNunito ">Aujourd’hui</p>
                </div>
                <News />
                <News />
                <News />
                <div className="mb-4 w-full mx-auto">
                    <p className="text-center loune relative extraBoldNunito ">Hier</p>
                </div>
                <News />
                <News />
            </div>

        </div>
    </div>
}


