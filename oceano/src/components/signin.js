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

    useEffect(() => {
        console.log(user);
    })


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

    return <div>     
                <h1 class=" grid place-content-center h-48 ...  text font-medium   text-gray-900">Connectez vous </h1>
                <form class="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
                    <div class="mb-5">
                        <label for="pseudo" class="block mb-2 text-sm font-medium text-gray-900">Votre Pseudo ou votre email</label>
                        <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " 
                                placeholder="Entrer votre Pseudo ou votre email" name="pseudo" {...register("pseudo")} required></input>
                    </div>           
                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Votre mot de passe</label>
                        <input type="password" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " 
                                placeholder="Entrer votre mot de passe" name="password" {...register("password")} required></input>
                    </div>
                    <div class="mb-5">             
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Se connecter</button>
                    </div>
                </form>
    </div>
}
export default Signin;