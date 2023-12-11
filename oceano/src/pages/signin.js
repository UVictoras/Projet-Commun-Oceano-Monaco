import Onedate from "../components/pickonedate";


function Signin(props) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center absolute top-0 z-20 bg-neutral-50">
      <a href="signup">
        <button className="absolute h-[50px] w-[120px] top-5 right-5 blueTextColor px-3 py-1 border-b-4 
                     rounded-2xl border border-neutral-200 rounded-lg blackNunito uppercase text-[13px]">
          S'inscrire
        </button>
      </a>
      <div className="text h-2/3 w-1/3">
        <h1 className="text-center font-bold text-xl mt-8 mb-6 titleFont blackNunito">Connexion</h1>
        <div>
          <form className="">
            <div className="mb-5">
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Nom d'utilisateur ou E-mail"
                name="email"
                required
              />
            </div>
            <div className="mb-5">
              <input
                type="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                placeholder="Mot de passe"
                name="password"
                required
              />
            </div>
            <div className="mb-5">
              <button
                type="submit"
                className="text-white blueButton font-medium rounded-lg text-sm w-full text-center uppercase "
              >
                se connecter
              </button>
            </div>
          </form>
          <div className="mb-5">
            <p className="text-center line relative">ou</p>
          </div>
          {/* Boutons pour se connecter avec Google ou Facebook */}
          <div className="flex ">
            <a href="" >
              <button className="bg-white text-black border border-black px-4 py-2 rounded-lg flex items-center uppercaseText blackNunito">
                <img src="https://via.placeholder.com/20" alt="Google Logo" className="mr-2" />
                Facebook
              </button>
            </a>
            <a href="">
              <button className="bg-white text-black border border-black px-4 py-2 rounded-lg flex items-center uppercaseText blackNunito">
                <img src="https://via.placeholder.com/20" alt="Facebook Logo" className="mr-2" />
                Google
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;