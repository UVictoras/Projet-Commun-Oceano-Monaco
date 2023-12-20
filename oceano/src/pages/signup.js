import Onedate from "../components/pickonedate";

function Signup(props) {

    return <div>
        <div class="mb-5 grid grid-cols-10">
            <div class="col-start-10">
                <a href="signin">
                    <button class="whiteButton absolute h-[50px] w-[120px] top-5 right-5 blueTextColor px-3 py-1 bg-white
                     rounded-[15px] border border-neutral-200 rounded-lg blackNunito uppercase text-[13px]">
                        Connexion
                    </button>
                </a>

            </div>

        </div>

        <h1 class=" flex items-end justify-center h-48 text font-medium blackNunito titleFont text-xl ">Créer ton profil</h1>
        <form class="max-w-sm mx-auto mt-10">
            <div class="mb-5">
                <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl ">
                    <Onedate contentPlaceHolder={"Date de naissance"} />
                </div>

            </div>
            <div class="mb-5">
                <label for="date" class="block mb-2 text-xs mediumNunito  ">Tu dois avoir au moins 13 ans pour utiliser Make it Blue. Pour en savoir plus, tu peux consulter notre
                <a href="lien vers la politique de confidentialité" className="font-bold text-sky-400 hover:underline"> Politique de confidentialité.</a></label>
            </div>
            <div class="mb-5">
                <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-2.5 " placeholder="Nom d'utilisateur" name="first name" required></input>
            </div>
            <div class="mb-5">
                <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-2.5 " placeholder="E-mail" name="email" required></input>
            </div>
            <div class="mb-5">
                <input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-2.5" placeholder="Mot de passe" name="password" required></input>
            </div>
            <div class="mb-5">
                <button type="submit" class="text-white blueButton  font-medium rounded-xl text-sm w-full p-2.5  text-center ">CREER MON COMPTE</button>
            </div>
        </form>
        <div className="mb-5 max-w-sm mx-auto">
            <p className="text-center line relative">ou</p>
        </div>

        <div class="mb-5  max-w-sm mx-auto">
            <div class="flex ml-1 space-x-4 mb-4">
                <div className="flex justify-center space-x-4">
                    <button className="flex items-center justify-center mr-2 whiteButton border border-gray-300 bg-white border-gray-300 facebookTextColor font-medium rounded-lg text-sm w-44 p-2.5 blackNunito " >
                        <img src="img/icon/network/facebook_logo.svg" alt="Facebook Logo" className="mr-2" />
                        <p className="facebookColor">Facebook</p>
                    </button>
                </div>
                <div className="col-start-2">
                    <button className="flex items-center justify-center mr-2 whiteButton border border-gray-300 bg-white border-gray-300 googleTextColor font-medium rounded-lg text-sm w-44 p-2.5 blackNunito " >
                        <img src="img/icon/network/Google_logo.svg" alt="Google Logo" className="mr-2" />
                        <p className="googleColor">Google</p>
                    </button>

                </div>


            </div>
            <p class="block mb-2 text-xs regularNunito ">En te connectant à Make it Blue, tu acceptes nos 
            <a href="#lien vers les conditions d'utilisation" className=" extraBoldNunito hover:underline">Conditions d’utilisation</a> et notre 
            <a href="#lien vers la politique de confidentialités" className=" extraBoldNunito hover:underline">Politique de confidentialité</a>.</p>

        </div>

    </div>
}
export default Signup;