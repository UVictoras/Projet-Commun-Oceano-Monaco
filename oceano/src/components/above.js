import { Click, OpenModal } from "../utils/3DVerse";
import Modal from "./modal";
import Searchbar from "./searchbar";

function Above(props) {

    return <div className="Act absolute">
        <div className="flex items-center">
            <button className="w-[70px] h-[73px] rounded-2xl border-2 border-solid border-neutral-200 bg-neutral-50 flex items-center bellButton">
                <img src="img/icon/bell.png" />
            </button>
            <Searchbar />

        </div>

        {/* <Modal isVisible={() =>Click()} />
         */}
    </div>
}
export default Above