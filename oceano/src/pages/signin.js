import { useEffect, useState } from "react";
import { getUsers, getUser } from "../api/user";
import { setUserSession } from "../api/session";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

var sha1 = require('sha1');

function Signin(props) {
  let history = useHistory();

  const { register, handleSubmit } = useForm();
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState([]);
  const [change, setChange] = useState(false);
  const [afficherToast, setAfficherToast] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const fetchedUsers = await getUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (user.length !== 0) {
      setUserSession(user[0]);
      history.push("/act");
    }
  }, [user, history]);

  useEffect(() => {
    if (change && user.length === 0) {
      setAfficherToast(true);
    }
  }, [change, user]);

  const closeToast = () => {
    setAfficherToast(false);
    setChange(false); // Réinitialise la variable d'état change à false lors de la fermeture du toast
  };

  const onSubmit = (data) => {
    setChange(true);
    users.forEach((userMap) => {
      if ((userMap.Pseudo == data.pseudo || userMap.Email == data.pseudo) && userMap.Password == sha1(data.password)) {
        const usersFetched = getUser({ id: userMap.ID });
        usersFetched
          .then(result => setUser(result))
          .catch(error => console.error("Error :", error.message));
      }
    });
  };

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center z-20 bg-white container mx-auto px-4">
      <Link to="signup">
        <button className="whiteButton absolute h-[48px] w-[119px] bg-white top-5 right-5 blueTextColor px-3 py-1
                     rounded-[15px] border border-neutral-200 rounded-lg blackNunito uppercase text-[13px]">
          S'inscrire
        </button>
      </Link>

      <div className="title h-1/3 flex items-end">
        <h1 className="grid place-content-center text font-medium blackNunito titleFont text-[26px] ">Connexion</h1>
      </div>
      <div className="text h-2/3 mt-9 w-full">
        <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5" placeholder="Nom d'utilisateur ou E-mail" name="email" {...register("pseudo")} required></input>
          </div>
          <div className="mb-5">
            <input type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-2.5" placeholder="Mot de passe" name="password" {...register("password")} required></input>
          </div>
          <div className="mb-5 h-[46px]">
            <button type="submit" className="text-white blueButton  blackNunito rounded-xl text-sm w-full  text-center h-[46px] ">SE CONNECTER</button>
          </div>
        </form>

        {afficherToast && (
          <div id="toast-danger" className="flex justify-center items-center w-75 h-50 ">
            <div className="flex w-full max-w-xs p-4 bgToast text-Neutral-950 rounded-lg shadow " role="alert">
              <div className="flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
                </svg>
                <span className="sr-only">Error icon</span>
              </div>
              <div className="ms-3 text-sm regularNunito">identifiant ou mot de passe incorrect.</div>
              <button type="button" className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" aria-label="Close" onClick={closeToast}>
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="mb-5 max-w-sm mx-auto">
          <p className="text-center line relative">ou</p>
        </div>

        <div className="mb-5  max-w-sm mx-auto">
          <div className="flex justify-center ml-1 space-x-4 mb-4">
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
          <p className="block mb-2 text-xs regularNunito ">
            En te connectant à Make it Blue, tu acceptes nos
            <a href="#viveLilian" className="extraBoldNunito hover:underline"> Conditions d’utilisation </a>
            et notre
            <a href="#viveLoan" className=" extraBoldNunito hover:underline"> Politique de confidentialité</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signin;