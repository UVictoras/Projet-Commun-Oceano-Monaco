import Navbar from "./navbar"
function Threadcontent(props){
    return <div class ="space-y-4">
        <Navbar/>
        <div className="grid place-content-center space-y-10  ">       
            <p className="extraBoldNunito text-center">Sauvons la baleine franche de la mer Baltique</p>        
            <p className="mediumNunito text-center w-96">Nous demandons au gouvernement islandais d'interdire la chasse à la baleine une fois pour toutes. 
                                                            Selon un rapport de l'autorité alimentaire et vétérinaire islandaise, les baleines ont mis jusqu'
                                                            à deux heures pour mourir lors des chasses islandaises. J’ai créé cet évènement dans l’objectif de sauver tout ces animaux.
            </p>
            <div className=" space-y-8">
                <div className=" space-y-3">
                    <div class=" flex  space-x-2 items-center ">               
                        <img className="h-10 w-10 rounded-full " src="../img/avatar1.png" alt="avatar de l'utilisateur"/>                
                        <p className="extraBoldNunito">Natt</p>                               
                    </div>
                    <div className="border  bg-neutral-200 rounded w-96">
                        <p class =" mediumNunito">Le message de l'utilisateur qui parle de l'évenement avec passion.</p>
                    </div>
                </div>
                <div className=" space-y-3">
                    <div class=" flex  space-x-2 items-center ">               
                        <img className="h-10 w-10 rounded-full " src="../img/avatar1.png" alt="avatar de l'utilisateur"/>                
                        <p className="extraBoldNunito">Lilian</p>                               
                    </div>
                    <div className="border  bg-neutral-200 rounded w-96">
                        <p class =" mediumNunito">Le message de l'utilisateur qui parle de l'évenement avec passion.</p>
                    </div>
                </div>
            </div>
                <form class="max-w-sm mx-auto">
                    <div class="space-y-3">
                        <label for="message" class="mediumNunito">Ton message</label>
                        <textarea id="message" rows="4" class="block p-2.5  mediumNunito w-full border  bg-neutral-200 rounded " placeholder="Envoyer un message..."></textarea>
                        <div class="">
                            <button type="submit" class="text-white blueButton  blackNunito rounded-xl text-sm w-[375px]  text-center h-[46px] ">Envoyer</button>
                        </div>
                    </div>     
                </form>                          
            </div>
    </div>
    
}
export default Threadcontent