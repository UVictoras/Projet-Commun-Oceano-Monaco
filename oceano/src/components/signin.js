import { useEffect, useState} from "react";
import { getUsers, getUser } from "../api/user";
import { setUserSession } from "../api/session";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

var sha1 = require('sha1');

function Signin(props) {
  let history = useHistory();

  const { register, handleSubmit } = useForm();
  const [ users, setUsers ] = useState([]);
  const [ user, setUser ] = useState([]);

  useEffect(() => {
      const usersFetched = getUsers();
      usersFetched
      .then(result => setUsers(result))
      .catch(error=>console.error("Error :",error.message))
  },[]);

  useEffect(() => {
      if(user.length != 0){
          setUserSession(user[0]);
          history.push("/act");
      }
  },[user])


  const onSubmit = (data) => {
      users.map((userMap) => {
          if((userMap.Pseudo == data.pseudo || userMap.Email == data.pseudo) && userMap.Password == sha1(data.password)){
              const usersFetched = getUser({id: userMap.ID});
              usersFetched
              .then(result => setUser(result))
              .catch(error=>console.error("Error :",error.message))
          }
      })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
        {/* Bouton pour s'inscrire en haut à gauche */}
        <button className="absolute top-5 right-5 bg-blue-500 text-white px-3 py-1 rounded-lg">
            <a href="signup">
                S'inscrire
            </a>
        </button>
        <div>
        <h1 className="text-center font-bold text-gray-900 text-xl mt-8 mb-6">Connexion</h1>
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-5">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Nom d'utilisateur ou E-mail"
            name="email"
            {...register("pseudo")}
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder="Mot de passe"
            name="password"
            {...register("password")}
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
            <img src="https://via.placeholder.com/20" alt="Google Logo" className="mr-2" />
            Se connecter avec Google
          </button>
          <button className="bg-white text-black border border-black px-4 py-2 rounded-lg flex items-center">
            <img src="https://via.placeholder.com/20" alt="Facebook Logo" className="mr-2" />
            Se connecter avec Facebook
          </button>
        </div>
    </div>
    </div>
  );
}

export default Signin;