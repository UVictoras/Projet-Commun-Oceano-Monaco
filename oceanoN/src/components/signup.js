import Onedate from "./pickonedate";
import { addUser } from "../api/user";
import { useForm } from "react-hook-form";

function Signup(props){
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        data.birthday = "2004-10-23";
        data.picture = 1;
        data.x = 15.6;
        data.y = 19.1;
        data.z = 17.2;
        data.banner = 1;
        data.title = 1;
        addUser(data);
    }

    return <div>
        
        <h1 class=" grid place-content-center h-48 ...  text font-medium   text-gray-900 ">Créez votre compte</h1>
        <form class="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-5">
                <label for="first name" class="block mb-2 text-sm font-medium text-gray-900 ">Votre Prénom</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " 
                        placeholder="Entrer votre Prénom" name="first name" {...register("first_name")} required></input>
            </div>
            <div class="mb-5">
                <label for="last name" class="block mb-2 text-sm font-medium text-gray-900 ">Votre Nom</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " 
                        placeholder="Entrer votre Nom" name="last name" {...register("last_name")} required></input>

    
            </div>
            <div class="mb-5">
                <label for="pseudo" class="block mb-2 text-sm font-medium text-gray-900 ">Votre Pseudo</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " 
                        placeholder="Entrer votre Pseudo" name="pseudo" {...register("pseudo")} required></input>

    
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Votre email</label>
                <input type="email" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " 
                        placeholder="Entrer votre email" name="email" {...register("email")} required></input>   
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Votre mot de passe</label>
                <input type="password" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5" 
                        placeholder="Entrer votre mot de passe" name="password" {...register("password")} required></input>
            </div>
            <div class="mb-5">
                <label for="date" class="block mb-2 text-sm font-medium text-gray-900 ">Votre date de naissance</label>
                <Onedate/>    
            </div>
            <div class="mb-5">
                <label for="country" class="block mb-2 text-sm font-medium text-gray-900 ">Votre pays</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 " 
                        placeholder="Entrer votre pays" name="country" {...register("country")} required></input>   
            </div>
            <div class="mb-5">
                <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type d'utilisateur</label>
                <select id="type" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                                            focus:border-blue-500 block w-full p-2.5 " {...register("type")}>
                    <option>Particulier</option>
                    <option>Association</option>                   
                </select>
            </div>
            <div class="mb-5">
                <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre localisation :</label>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">S'inscrire</button>
        </form>
    </div>
}
export default Signup;