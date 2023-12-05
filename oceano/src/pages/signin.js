import Navbar from "../components/navbar";
import { useEffect, useState} from "react";
import { getUsers, getUser } from "../api/user";
import { useForm } from "react-hook-form";
var sha1 = require('sha1');

function Signin(props){
    const { register, handleSubmit } = useForm();
    const [ users, setUsers ] = useState([]);
    const [ user, setUser ] = useState([]);

    useEffect(() => {
        const usersFetched = getUsers();
        usersFetched
        .then(result => setUsers(result))
        .catch(error=>console.error("Error :",error.message))
    },[]);

    const onSubmit = (data) => {
        console.log(data);
        users.map((user) => {
            if((user.Pseudo == data.pseudo || user.Email == data.pseudo) && user.Password == sha1(data.password)){
                const usersFetched = getUser([{id: user.id}]);
                usersFetched
                .then(result => setUser(result))
                .catch(error=>console.error("Error :",error.message))
                console.log("yes");
            }
            else{
                console.log("no");
            }
        })
    }

    return <div>
        <Navbar/>
        <h1 class=" grid place-content-center h-48 ...  text font-medium   text-gray-900 dark:text-white">Connectez vous </h1>
        <form class="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre email</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Entrer votre email ou votre pseudo" name="email" {...register("pseudo")} required></input>
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre mot de passe</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Entrer votre mot de passe" name="password" {...register("password")} required></input>
            </div>
            <div class="mb-5">
                
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Se connecter</button>
            </div>
        </form>
        </div>
}
export default Signin;