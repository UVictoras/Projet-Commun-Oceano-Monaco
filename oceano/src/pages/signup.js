import Navbar from "../components/navbar";

function Signup(props){
    return <div>
        <Navbar/>
        <h1 class=" grid place-content-center h-48 ...  text font-medium   text-gray-900 dark:text-white">Créez votre compte</h1>
        <form class="max-w-sm mx-auto">
            <div class="mb-5">
                <label for="first name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Prénom</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entrer votre Prénom" name="first name" required></input>
            </div>
            <div class="mb-5">
                <label for="last name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Nom</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entrer votre Nom" name="last name" required></input>

    
            </div>
            <div class="mb-5">
                <label for="pseudo" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre Pseudo</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entrer votre Pseudo" name="pseudo" required></input>

    
            </div>
            <div class="mb-5">
                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre email</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entrer votre email" name="email" required></input>

    
            </div>
            <div class="mb-5">
                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Votre mot de passe</label>
                <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Entrer votre mot de passe" name="password" required></input>
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
            
            <div class="flex items-start mb-5">
                <div class="flex items-center h-5">
                    <input type="checkbox" placeholder="Enter Email" name="email" required></input>
                </div>
                <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">S'inscrire</button>
        </form>
    </div>
}
export default Signup;