import { changerFond } from "../utils/function";
import ActionFilter from "./actionFilter";
import Calendar from "./calendar";
import Onedate from "./pickonedate";

export default function ModalFilter(props) {

    return <div className='mx-9 '>
        <div className='mt-9 flex' >
            <div className='text flex space-x-4 items-center w-2/3'>
                <h1 className='fontColor3C extraBold800 text-[27px]'>Filtres</h1>
            </div>
            <div className='flex w-1/3 items-center justify-end'>
                <button onClick={props.closeModal}>
                    <img src='img/icon/exit.png' alt='exit make it blue' />
                </button>
            </div>
        </div>
        <div className="act mt-9">
            <h2 className="fontColor3C text-xl extraBold800 ">Actions</h2>
            <div className="filter flex space-x-5 mt-5">
                <div className="space-y-4">
                    <div className="flex space-x-2">
                        <ActionFilter />
                        <ActionFilter />
                    </div>
                    <div className="flex space-x-2">
                        <ActionFilter />
                        <ActionFilter />
                    </div>
                </div>
            </div>
        </div>
        <div className="date mt-9">
            <h2 className="fontColor3C extraBold800 text-xl">Date</h2>
            <div className="flex space-x-7 items-center mt-4">
                <Onedate contentPlaceHolder={"Date de début"} />
                <p>-</p>
                <Onedate contentPlaceHolder={"Date de fin"} />
            </div>
        </div>
        <div className="numbreParticipant">
            <h2 className="fontColor3C extraBold800 text-xl mt-11">Nombre de participants</h2>
            <p className="mt-3 greyText semiBoldNunito text-sm">Le nombre de participants moyen par action est de 136.</p>

        </div>
    </div >
}