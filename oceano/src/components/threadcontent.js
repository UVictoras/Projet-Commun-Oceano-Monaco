import Navbar from "./navbar"
function Threadcontent(props){
    return <div class ="space-y-4">
        <Navbar/>
        <div className="grid place-content-center space-y-10  ">       
            <p className="extraBoldNunito text-center">Titre de l'évenement  oui !!!</p>        
            <p className="mediumNunito text-center">Description du l'évenement</p>
            <div className=" space-y-8">
                <div className=" space-y-3">
                    <div class=" flex  space-x-2 items-center ">               
                        <img className="h-10 w-10 rounded-full " src="../img/avatar.png" alt="image de l'utilisateur"/>                
                        <p className="mediumNunito">Nom de l'utilisateur</p>                               
                    </div>
                    <div className="border  bg-neutral-200 rounded w-96">
                        <p class =" mediumNunito">Le message de l'utilisateur dskljfsfjpouqopfqj sdjfomlsjd qs!lnjfl qsklmjdosm* nlkdfhjpsdpgvdj os uprgupt</p>
                    </div>
                </div>
                <div className=" space-y-3">
                    <div class=" flex  space-x-2 items-center ">               
                        <img className="h-10 w-10 rounded-full " src="../img/avatar.png" alt="image de l'utilisateur"/>                
                        <p className="mediumNunito">Nom de l'utilisateur</p>                               
                    </div>
                    <div className="border  bg-neutral-200 rounded w-96">
                        <p class =" mediumNunito">Le message de l'utilisateur dskljfsfjpouqopfqj sdjfomlsjd qs!lnjfl qsklmjdosm* nlkdfhjpsdpgvdj os uprgupt</p>
                    </div>
                </div>
                
                

            </div>
                       
        </div>
    </div>
    
}
export default Threadcontent