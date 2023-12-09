import Onedate from "./pickonedate";

function Signup(props){
   
    return <div>
        
        <h1 class=" grid place-content-center h-48 ...  text font-medium   text-gray-900  text-xl ">Crée ton profil</h1>
        <form class="max-w-sm mx-auto">
            <div class="mb-5">                
                <Onedate/>
                <label for="date" class="block mb-2 text-xs  ">Tu dois avoir au moins 13 ans pour utiliser Make it Blue. Pour en savoir plus, tu peux consulter notre<span class = "text-sky-500 "> Politique de confidentialité.</span></label>    
            </div>
            <div class="mb-5">               
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="Nom d'utilisateur" name="first name" required></input>
            </div>
            <div class="mb-5">                
                <input type="email" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " placeholder="E-mail" name="email" required></input>   
            </div>
            <div class="mb-5"> 
                <input type="password" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" placeholder="Mot de passe" name="password" required></input>
            </div>
            <div class="mb-5"> 
                <button type="submit" class="text-white bg-sky-500 hover:bg-sky-600  border-b-4 border-sky-600 font-medium rounded-lg text-sm w-full p-2.5  text-center ">CREER MON COMPTE</button>
            </div>   
        </form>
        <div class="mb-5"> 
            <p class ="text-center">ou</p>
        </div> 
        
    </div>
}
export default Signup;


