import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";
import Play from "../canva"; 
function Act(props){

    return <div className="Act">
        <Navbar />
        <Searchbar />
        <div className = "container mx-auto bg-gray-200 rounded-xl " >
            <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">aaa</p>
                <p className="text-sm text-gray-500">bizoabgazg</p>
            </div>
        </div> 
    </div>
}
export default Act;