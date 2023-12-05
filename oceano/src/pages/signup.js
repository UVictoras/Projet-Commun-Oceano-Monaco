import Navbar from "../components/navbar";
import { addUser } from "../api/user";
import { useForm } from "react-hook-form";

function Signup(props){
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        data.birthday = "2004-10-23";
        data.country = "France";
        data.picture = 1;
        data.x = 15.6;
        data.y = 19.1;
        data.z = 17.2;
        data.type = "Visiteur";
        data.banner = 1;
        data.title = 1;
        addUser(data);
    }

    return <div>
        <Navbar/>
        <h1 class=" grid place-content-center h-48 ...  text font-medium   text-gray-900 dark:text-white">Créez votre compte</h1>
        <form class="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <div class="mb-5">
                <label for="first name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Prénom</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Entrer votre Prénom" name="first name" {...register("first_name")} required></input>
            </div>
            <div class="mb-5">
                <label for="last name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Nom</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Entrer votre Nom" name="last name" {...register("last_name")} required></input>

    
            </div>
            <div class="mb-5">
                <label for="pseudo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Pseudo</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Entrer votre Pseudo" name="pseudo" {...register("pseudo")} required></input>

    
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre email</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Entrer votre email" name="email" {...register("email")} required></input>

    
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre mot de passe</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
                                            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
                                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    placeholder="Entrer votre mot de passe" name="password" {...register("password")} required></input>
            </div>
            <div class="mb-5">
                <label for="photo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre photo de profil :</label>
                

<fieldset>
  <legend class="sr-only">Countries</legend>

  <div class="flex items-center mb-4">
    <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked></input>
    <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
    <img src="../img/vert.jpg" alt="Grapefruit slice atop a pile of other slices" />
      United States
    </label>
    <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked></input>
    <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
      France
    </label>
  </div>


</fieldset>

            </div>
            <div class="mb-5">
                <label for="location" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre localisation :</label>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg 
                                        text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">S'inscrire</button>
        </form>
    </div>
}
export default Signup;