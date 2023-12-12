import Navbar from "../components/navbar";
import Onedate from "../components/pickonedate";
import { useEffect, useState } from "react";
import { getUserSession } from "../api/session";

function Profile(props) {
    const [ user, setUser ] = useState([]);

    useEffect(() => {
        const userFetched = getUserSession();
        userFetched
        .then(result => setUser(result))
        .catch(error=>console.error("Error :",error.message))
    },[]);

    return <div className="profile">
        <Navbar />
        <div className="sm:container sm:mx-auto mt-20">
            <div class="grid grid-flow-col">
                <div className="profil">
                    <div class="grid grid-cols-4">
                        <div className="picture flex justify-self-end pr-10">
                            <img
                                className="h-20 w-20 rounded-full justify-items-end"
                                src="../img/avatar.png" 
                                alt=""
                            />
                        </div>

                        <div className="profilWelcom">
                            <div className="flex place-self-center pb-2 pt-3">
                                <b className="">Profil</b>
                            </div>
                            <p>Bienvenu {user.First_name} {user.Last_name}</p>
                        </div>

                        <div className="button flex place-items-center">
                            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg">
                                Modifier votre profil
                            </button></div>

                    </div>
                    <div className="grid grid-cols-3 ">
                        <div className="pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 flex justify-content-center">Nom d'utilisateur :</label>
                            <input type="text" id="first_name" class=" flex justify-content-center border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.Pseudo} required></input>
                        </div>
                        <div className=" pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Date de naissance :</label>
                            <Onedate value={user.Birthday}/>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 ">
                        <div className="pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 flex justify-content-center">Email :</label>
                            <input type="text" id="first_name" class=" flex justify-content-center border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.Email} required></input>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 ">
                        <div className="pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 flex justify-content-center">Mot de passe :</label>
                            <input type="text" id="first_name" class=" flex justify-content-center border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required></input>
                        </div>
                        <div className=" pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Pays :</label>
                            <input type="text" id="first_name" class=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.Country} required></input>
                        </div>
                    </div>
                </div>
                <b>Dernières actions</b>
            </div>
        </div>
    </div>
}
export default Profile