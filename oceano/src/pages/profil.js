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
                                src="https://media.discordapp.net/attachments/1166020127339327637/1181569102859489290/20231205_131257.jpg?ex=658188fa&is=656f13fa&hm=dc4e2074fd533cb0f90439fe28767a7a115a8ab40faa59a6e0a53f70aae79f65&=&format=webp&width=454&height=605"
                                alt=""
                            />
                        </div>

                        <div className="profilWelcom">
                            <div className="flex place-self-center pb-2 pt-3">
                                <b className="">Profil</b>
                            </div>
                            <p>Bienvenu Matéo Carré</p>
                        </div>

                        <div className="button flex place-items-center">
                            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-lg">
                                Modifier votre profil
                            </button></div>

                    </div>
                    <div className="grid grid-cols-3 ">
                        <div className="pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 flex justify-content-center">Nom d'utilisateur :</label>
                            <input type="text" id="first_name" class=" flex justify-content-center border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required></input>
                        </div>
                        <div className=" pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Date de naissance :</label>
                            <input type="text" id="first_name" class=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="06/24/1996" required></input>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 ">
                        <div className="pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 flex justify-content-center">Email :</label>
                            <input type="text" id="first_name" class=" flex justify-content-center border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mcarre@gaming.bs" required></input>
                        </div>
                        <div className=" pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Numéro de téléphone :</label>
                            <input type="text" id="first_name" class=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="07/68/91/58/30" required></input>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 ">
                        <div className="pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 flex justify-content-center">Mot de passe :</label>
                            <input type="text" id="first_name" class=" flex justify-content-center border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required></input>
                        </div>
                        <div className=" pt-8">
                            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 ">Langue :</label>
                            <input type="text" id="first_name" class=" border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-300 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Français (FR)" required></input>
                        </div>
                    </div>
                </div>
                <b>Dernières actions</b>
            </div>
        </div>
    </div>
}
export default Profile