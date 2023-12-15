import Onedate from "../components/pickonedate";


function Signin(props) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center absolute top-0 z-20 bg-neutral-50">
      <a href="signup">
        <button className="whiteButton absolute h-[48px] w-[119px] bg-white top-5 right-5 blueTextColor px-3 py-1
                     rounded-[15px] border border-neutral-200 rounded-lg blackNunito uppercase text-[13px]">
          S'inscrire
        </button>
      </a>

      <div className="title h-1/3 flex items-end">
        <h1 class=" grid place-content-center text font-medium blackNunito titleFont text-[26px] ">Connexion</h1>
      </div>
      <div className="text h-2/3 mt-9">
        <form class="max-w-sm mx-auto">
          <div class="mb-5">
            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5" placeholder="Nom d'utilisateur ou E-mail" name="email" required></input>
          </div>
          <div class="mb-5">
            <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5" placeholder="Mot de passe" name="password" required></input>
          </div>
          <div class="mb-5 h-[46px]">
            <button type="submit" class="text-white blueButton  blackNunito rounded-xl text-sm w-[375px]  text-center h-[46px] ">SE CONNECTER</button>
          </div>
        </form>

        <div className="mb-5 max-w-sm mx-auto">
          <p className="text-center line relative">ou</p>
        </div>

        <div class="mb-5  max-w-sm mx-auto">
          <div class="flex ml-1 space-x-4 mb-4">
            <div className="flex justify-center space-x-4 ">
              <button className="flex items-center justify-center mr-2 whiteButton border border-gray-300 bg-white facebookColor border-gray-300 facebookTextColor font-medium rounded-lg text-sm w-44 p-2.5 blackNunito " >
                <img src="img/icon/network/facebook_logo.svg" alt="Facebook Logo" className="mr-2" />
                Facebook
              </button>
            </div>
            <div className="col-start-2">
              <button className="flex items-center justify-center mr-2 whiteButton border border-gray-300 bg-white googleColor border-gray-300 googleTextColor font-medium rounded-lg text-sm w-44 p-2.5 blackNunito " >
                <img src="img/icon/network/Google_logo.svg" alt="Google Logo" className="mr-2" />
                Google
              </button>
            </div>
          </div>
          <p class="block mb-2 text-xs regularNunito ">En te connectant à Make it Blue, tu acceptes nos <a href="#" className="extraBoldNunito hover:underline">Conditions d’utilisation</a> et notre <a href="#" className=" extraBoldNunito hover:underline">Politique de confidentialité</a>.</p>

        </div>
      </div>
    </div>
  );
}

export default Signin;