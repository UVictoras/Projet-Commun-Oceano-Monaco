import Onedate from "../components/pickonedate";
import { addUser } from "../api/user";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { setUserSession } from "../api/session";

function Signup(props) {
    let history = useHistory();

    const { register, handleSubmit } = useForm();
    const [birthday, setBirthday] = useState("");

    const handleOnedateChange = (newValue) => {
        setBirthday(newValue.startDate);
    };

    const onSubmit = (data) => {
        console.log(data);
        data.first_name = "";
        data.last_name = "";
        data.birthday = birthday;
        data.country = "France";
        data.type = "Particulier"
        data.picture = 1;
        data.x = 15.6;
        data.y = 19.1;
        data.z = 17.2;
        data.banner = 1;
        data.title = 1;
        addUser(data);
        setUserSession(data);
        history.push("/signin");
    }

    return <div className="h-screen w-full flex flex-col items-center justify-center z-20 bg-white container mx-auto px-4 mt-">

        <div className="title flex lg:items-center items-end">
            <a href="signin">
                <button class="whiteButton absolute h-[48px] w-[119px] bg-white top-5 right-5 blueTextColor px-3 py-1
                     rounded-[15px] border border-neutral-200 rounded-lg blackNunito uppercase text-[13px]">
                    Connexion
                </button>
            </a>
            <h1 class=" grid place-content-center text font-medium blackNunito titleFont text-[26px] ">Créer ton profil</h1>
        </div>
        <div className="text h-2/3 mt-4 w-full">
            <form class="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <div class="mb-2">
                    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl ">
                        <Onedate contentPlaceHolder={"Date de naissance"} onChange={handleOnedateChange} />
                    </div>

                </div>
                <div class="mb-5">
                    <label for="date" class="block mb-2 text-xs mediumNunito  ">Tu dois avoir au moins 13 ans pour utiliser Make it Blue. Pour en savoir plus, tu peux consulter notre
                        <a href="lien vers la politique de confidentialité" className="font-bold text-sky-400 hover:underline"> Politique de confidentialité.</a></label>
                </div>
                <div class="mb-5">
                    <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-2.5 " placeholder="Nom d'utilisateur" name="first name" {...register("pseudo")} required></input>
                </div>
                <div class="mb-5">
                    <input type="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-2.5 " placeholder="E-mail" name="email" {...register("email")} required></input>
                </div>
                <div class="mb-5">
                    <input type="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl  block w-full p-2.5" placeholder="Mot de passe" name="password" {...register("password")} required></input>
                </div>
                <div class="mb-5">
                    <button type="submit" class="text-white blueButton  font-medium rounded-xl text-sm w-full p-2.5  text-center ">CREER MON COMPTE</button>
                </div>
            </form>
            <div className="mb-3 max-w-sm mx-auto">
                <p className="text-center line relative">ou</p>
            </div>
            <div class="mb-3  max-w-sm mx-auto">
                <div class="flex justify-center ml-1 space-x-4 mb-4">
                    <div className="flex justify-center space-x-4 ">
                        <button className="flex items-center justify-center mr-2 whiteButton border border-gray-300 bg-white facebookColor border-gray-300 facebookTextColor font-medium rounded-lg text-sm lg:w-44 w-32 p-2.5 blackNunito " >
                            <img src="img/icon/network/facebook_logo.svg" alt="Facebook Logo" className="mr-2" />
                            Facebook
                        </button>
                    </div>
                    <div className="col-start-2">
                        <button className="flex items-center justify-center mr-2 whiteButton border border-gray-300 bg-white googleColor border-gray-300 googleTextColor font-medium rounded-lg text-sm lg:w-44 w-32 p-2.5 blackNunito " >
                            <img src="img/icon/network/Google_logo.svg" alt="Google Logo" className="mr-2" />
                            Google
                        </button>
                    </div>
                </div>
                <p class="block text-xs regularNunito ">
                    En te connectant à Make it Blue, tu acceptes nos
                    <a href="#viveLilian" className="extraBoldNunito hover:underline"> Conditions d’utilisation </a>
                    et notre
                    <a href="#viveLoan" className=" extraBoldNunito hover:underline"> Politique de confidentialité</a>.</p>

            </div>
        </div>


    </div>
}
export default Signup;