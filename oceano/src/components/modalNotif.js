export default function ModalNotif(props) {


    return <div id="sticky" className="modal-container absolute modalSize w-[250px] bg-white border-2 overflow-y-auto border-solid border-gray-300 rounded-md p-4">
        <button className=" text-gray-500 modalQuit text-2xl  absolute top-2 left-2" onClick={props.closeNotif}>
            X
        </button>
        <h1 className="text-[21px] text-center extraBold800 ">Notifications</h1>
        <div className="mb-4 max-w-sm mx-auto">
            <p className="text-center loune relative extraBoldNunito ">Aujourd’hui</p>
        </div>
        <div className="flex flex-col items-center">
            <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 text-center mb-4">
                <p>Contenu du modal</p>
            </div>
            <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 text-center mb-4">
                <p>Contenu du modal</p>
            </div>
            <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 text-center mb-4">
                <p>Contenu du modal</p>
            </div>
        </div>
        <div className="mb-4 max-w-sm mx-auto">
            <p className="text-center loune relative extraBoldNunito ">Hier</p>
        </div>
        <div className="flex flex-col items-center">
            <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 text-center mb-4">
                <p>Contenu du modal</p>
            </div>
            <div className="modalRectangular bg-white border-2 border-solid border-gray-300 rounded-md p-4 text-center mb-4">
                <p>Contenu du modal</p>
            </div>
        </div>
    </div>
}


