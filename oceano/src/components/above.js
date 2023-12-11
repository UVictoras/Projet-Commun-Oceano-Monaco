import { Click, OpenModal } from "../utils/3DVerse";
import Modal from "./modal";
import Searchbar from "./searchbar";
import ActionModal from "./actionmodal";

function Above(props){

    return <div className="Act absolute">
        <Searchbar />
        <ActionModal />
        {/* <Modal isVisible={() =>Click()} />
         */}
    </div>
}
export default Above