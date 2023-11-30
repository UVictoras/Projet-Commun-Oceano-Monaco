import Navbar from "../components/navbar";

function Profile(props) {
    return <div className="profile">
        <Navbar />
        <div className="sm:container sm:mx-auto mt-20">
            <div class="grid grid-flow-col">
                <div className="profil">
                    <div class="grid grid-cols-4">
                        <div className="picture flex justify-self-end pr-10">
                            <img
                                className="h-20 w-20 rounded-full justify-items-end"
                                src="https://media.discordapp.net/attachments/1159417612036485120/1177256252770893884/image.png?ex=6571d853&is=655f6353&hm=dd486ffd06e77498dc10c9d22ba494839e2913d2fd9b1cbc322b6edfdc91930f&=&format=webp"
                                alt=""
                            />
                        </div>

                        <div className="profilWelcom">
                            <div className="flex place-self-center pb-2 pt-3">
                                <b className="">Profil</b>
                            </div>
                            <p>Bienvenu Mathéo Carré</p>
                        </div>

                        <div className="button flex place-items-center">
                            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg">
                                Modifier votre profil
                            </button></div>

                    </div>
                    <div className="grid grid-cols-3 ">
                        <div className="pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 flex justify-content-center">Nom d'utilisateur :</label>
                            <input type="text" id="first_name" class=" flex justify-content-center border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required></input>
                        </div>
                        <div className=" pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Date de naissance :</label>
                            <input type="text" id="first_name" class=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="06/24/1996" required></input>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 ">
                        <div className="pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 flex justify-content-center">Email :</label>
                            <input type="text" id="first_name" class=" flex justify-content-center border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mcarre@gaming.bs" required></input>
                        </div>
                        <div className=" pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Numéro de téléphone :</label>
                            <input type="text" id="first_name" class=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="07/68/91/58/30" required></input>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 ">
                        <div className="pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 flex justify-content-center">Mot de passe :</label>
                            <input type="text" id="first_name" class=" flex justify-content-center border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required></input>
                        </div>
                        <div className=" pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Langue :</label>
                            <input type="text" id="first_name" class=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Français (FR)" required></input>
                        </div>
                    </div>
                </div>
                <b>Dernières actions</b>
            </div>
        </div>
    </div>
}
export default Profile