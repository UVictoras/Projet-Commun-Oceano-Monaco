import Calendar from "./calendar"

function Create(){
    return(
        <div class="">
            <p class=" grid place-content-center h-48 ...  text font-medium   text-gray-900 ">Choisissez une action à créer</p>
            <form class="max-w-sm mx-auto">
                <fieldset>
                    <legend class="sr-only">Countries</legend>

                    <div class="flex items-center mb-4">
                        <div >
                            <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300   " checked></input>
                            <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                            Pétition
                            </label>
                        </div>
                        <div>
                            <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300  " checked></input>
                            <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                            Nettoyage de plage
                            </label>
                        </div>
                        <div>
                            <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 border-gray-300  " checked></input>
                            <label for="country-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
                            Un autre truc
                            </label>
                        </div>
                        
                    </div>


                </fieldset>
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Le nom de votre action</label>
                    <input type="text" class ="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Entrer le nom" name="name" required></input>
                </div>
                <div className="col-span-full mb-5">
                    <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                    La description de votre évenement
                    </label>
                    <div className="mt-2 ">
                        <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="block w-full rounded-md  py-1.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                        defaultValue={''}
                        />
                    </div>
                </div>
                <div class="mb-5">
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">A quel date se déroulera votre évenement</label>
                    <Calendar/>
                </div>
                <div class="mb-5 h-24 ...">
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">Créer</button>
                </div>
            </form>
        </div>
        
    )
}
export default Create