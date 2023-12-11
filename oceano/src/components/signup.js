import Onedate from "./pickonedate";


function Signup(props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Bouton pour s'inscrire en haut à gauche */}
        <button className="absolute top-5 right-5 bg-blue-500 text-white px-3 py-1 rounded-lg">
          S'inscrire
        </button>
        <div>
        <h1 className="text-center font-bold text-gray-900 text-center mt-8 mb-6">Connexion</h1>
        <form className="max-w-sm mx-auto">
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
            className="text-white bg-sky-500 hover:bg-sky-600 border-b-4 border-sky-600 font-medium rounded-lg text-sm w-full p-2.5 text-center"
          >
            CONNEXION
          </button>
        </div>
      </form>
      <div className="mb-5">
        <p className="text-center">ou</p>
      </div>
     {/* Boutons pour se connecter avec Google ou Facebook */}
     <div className="flex justify-center space-x-4">
          <button className="bg-white text-black border border-black px-4 py-2 rounded-lg flex items-center">
            <img src="/img/facebook_logo.svg" alt="Facebook Logo" className="mr-2" />
            Facebook
          </button>
          <button className="bg-white text-black border border-black px-4 py-2 rounded-lg flex items-center">
            <img src="/img/Google_logo.svg" alt="Google Logo" className="mr-2" />
            Google
          </button>
        </div>
    </div>
    </div>
  );
}

export default Signup;
