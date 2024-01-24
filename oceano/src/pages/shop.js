import Navbar from "../components/navbar";
import ShopItems from "../components/shopItems";
import TabCollectShop from "../components/tabCollectShop";
import TabShop from "../components/tabShop";

export default function Shop() {
    return (
        <>
            <Navbar />

            <div className="flex mt-4 w-full h-full">
                <div className="w-1/2">
                    <div className="h-2/3 ">
                        <div className="h-3/4 flex items-center justify-center ">
                            <div className="images">
                                <img src="img/profil/loutre.png" className="w-96" />
                            </div>
                        </div>
                        <div className=" flex justify-end mr-11">
                            <button className="items-end jusitfy-end shopButton px-5 py-2 blackNunito text-white uppercaseText"> Sauvegarder</button>
                        </div>
                        <div className="mt-10">
                            <p className="text-center relative lineShop colorAE extraBold800 text-xl">Ma collection</p>
                        </div>
                    </div>
                    <div className="h-1/3">
                        <TabCollectShop />
                    </div>
                </div>
                <div className="w-1/2 flex justify-end ">
                    <div className=" border-l-2 border-neutral-200 ">
                        <TabShop />
                    </div>


                </div>



            </div>
        </>
    );
}