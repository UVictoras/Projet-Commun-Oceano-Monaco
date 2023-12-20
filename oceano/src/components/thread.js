import Navbar from "./navbar"

function Thread(props){
    return <div className=" grid place-content-center h-24 ...">
        <div class="grid place-content-center hover:bg-slate-100 rounded-md ">
            <a className=" inline-flex items-center justify-center  p-2  " href="/threadcontent">
                <p className="extraBoldNunito">Titre de l'évenement</p>
            </a>
            <p className="mediumNunito">Description du l'évenement</p>
        </div>
    </div>
}
export default Thread