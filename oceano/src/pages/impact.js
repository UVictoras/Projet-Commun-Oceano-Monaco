import Navbar from "../components/navbar";

function Impact(props){
    return <div className="impact">
        <Navbar/>
        <div class="grid place-content-center h-48 ...">
            <div><h1>Ensemble nous avons fait ceci cela</h1></div>
            
            
        </div>
        <div class="grid grid-cols-3 gap-4 place-content-center h-48 ...">
            <div><p className ="grid place-content-center ">01</p></div>
            <div><p className ="grid place-content-center ">02</p></div>
            <div><p className ="grid place-content-center ">03</p></div>
            
            
            
            
        </div>
    </div>
}
export default Impact;