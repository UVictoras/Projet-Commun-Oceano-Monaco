function Signin(props){
    return <div>     
                <h1 class=" grid place-content-center h-48 ...  text font-medium   text-gray-900">Connectez vous </h1>
                <form class="max-w-sm mx-auto">
                    <div class="mb-5">
                        <label for="pseudo" class="block mb-2 text-sm font-medium text-gray-900">Votre Pseudo ou votre email</label>
                        <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Entrer votre Pseudo ou votre email" name="pseudo" required></input>
                    </div>           
                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Votre mot de passe</label>
                        <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Entrer votre mot de passe" name="password" required></input>
                    </div>
                    <div class="mb-5">             
                        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Se connecter</button>
                    </div>
                </form>
    </div>
}
export default Signin;