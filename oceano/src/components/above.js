import { OpenModal } from "../utils/3DVerse";
import Modal from "./modal";
import Searchbar from "./searchbar";

function Above(props){

    return <div className="Act absolute">
        <Searchbar />
        <Modal isVisible={OpenModal()} />
        
    </div>
}
export default Above