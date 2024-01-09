import { useEffect, useState } from "react";
import { getUsers, getUser } from "../api/user";
import { setUserSession } from "../api/session";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

var sha1 = require('sha1');

function Signin(props) {
  let history = useHistory();

  const { register, handleSubmit } = useForm();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const usersFetched = getUsers();
    usersFetched
      .then(result => setUsers(result))
      .catch(error => console.error("Error :", error.message))
  }, []);

  useEffect(() => {
    if (user.length != 0) {
      setUserSession(user[0]);
      history.push("/act");
    }
  }, [user])


  const onSubmit = (data) => {
    users.map((userMap) => {
      if ((userMap.Pseudo == data.pseudo || userMap.Email == data.pseudo) && userMap.Password == sha1(data.password)) {
        const usersFetched = getUser({ id: userMap.ID });
        usersFetched
          .then(result => setUser(result))
          .catch(error => console.error("Error :", error.message))
      }
    })
  }
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center z-20 bg-white container mx-auto px-4">
      <a href="signup">
        <button className="whiteButton absolute h-[48px] w-[119px] bg-white top-5 right-5 blueTextColor px-3 py-1
                     rounded-[15px] border border-neutral-200 rounded-lg blackNunito uppercase text-[13px]">
          S'inscrire
        </button>
      </a>

      <div className="title h-1/3 flex items-end">
        <h1 class=" grid place-content-center text font-medium blackNunito titleFont text-[26px] ">Connexion</h1>
      </div>
      <div className="text h-2/3 mt-9 w-full">
        <form class="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div class="mb-5">
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5" placeholder="Nom d'utilisateur ou E-mail" name="email" {...register("pseudo")} required></input>
          </div>
          <div class="mb-5">
            <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5" placeholder="Mot de passe" name="password" {...register("password")} required></input>
          </div>
          <div class="mb-5 h-[46px]">
            <button type="submit" class="text-white blueButton  blackNunito rounded-xl text-sm w-full  text-center h-[46px] ">SE CONNECTER</button>
          </div>
        </form>

        <div className="mb-5 max-w-sm mx-auto">
          <p className="text-center line relative">ou</p>
        </div>

        <div class="mb-5  max-w-sm mx-auto">
          <div class="flex justify-center ml-1 space-x-4 mb-4">
            <div className="flex justify-center space-x-4 ">
              <button className="flex items-center justify-center mr-2 whiteButton border border-gray-300 bg-white facebookColor border-gray-300 facebookTextColor font-medium rounded-lg text-sm lg:w-44 w-32 p-2.5 blackNunito " >
                <img src="img/icon/network/facebook_logo.svg" alt="Facebook Logo" className="mr-2" />
                Facebook
              </button>
            </div>
            <div className="col-start-2">
              <button className="flex items-center justify-center mr-2 whiteButton border border-gray-300 bg-white googleColor border-gray-300 googleTextColor font-medium rounded-lg text-sm lg:w-44 w-32 p-2.5 blackNunito " >
                <img src="img/icon/network/Google_logo.svg" alt="Google Logo" className="mr-2" />
                Google
              </button>
            </div>
          </div>
          <p class="block mb-2 text-xs regularNunito ">
            En te connectant à Make it Blue, tu acceptes nos
            <a href="#viveLilian" className="extraBoldNunito hover:underline"> Conditions d’utilisation </a>
            et notre
            <a href="#viveLoan" className=" extraBoldNunito hover:underline"> Politique de confidentialité</a>.</p>

        </div>
      </div>
    </div>
  );
}

export default Signin;