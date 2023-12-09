import Navbar from "../components/navbar";
import Above from "../components/above.js";
import Searchbar from "../components/searchbar";
import { Canvas } from "../Canva.jsx";
import {Anim} from "../utils/3DVerse.js";
import { Camera } from "../utils/3DVerse.js";

function Act(props) {
    //const [showModal,setShowModal] = useState(true)
    return <div className="">
        <Navbar />

        <div className = "container mx-auto bg-gray-200 rounded-xl " onClick={() => Camera()}>
        
          <Above/>

          <Canvas />
        {/* {console.log(OpenModal())} */}
       
          <div className="container mx-auto bg-gray-200 rounded-xl " onClick={() => {
              Anim();
              Camera()
          }}>

              <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">aaa</p>
                  <p className="text-sm text-gray-500">bizoabgazg</p>
              </div>

          </div>    

        </div>
    </div>
}
export default Act;