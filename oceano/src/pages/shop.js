import Navbar from "../components/navbar";
import ShopItems from "../components/shopItems";

export default function Shop() {
  return (
    <>
      <Navbar />

      <div className="flex mt-4 justify-between">
        <div className="w-1/2 pr-5">
          <div className="image-center flex items-center justify-center h-75% ">
            <img src="img/items.svg" alt="Objet à acheter" className="w-[35%]" />
          </div>
            <div className="w-1/4 ml-auto">
              <div className="bottom-section mb-4">
                <button className="text-white shopButton extraBold800 rounded-xl text-sm flex items-center justify-center w-[375px] h-[46px] ">
                  SAUVEGARDER
                </button>
              </div>
            </div>
        <div className="mb-4 max-w-sm mx-auto">
            <p className="text-center loune relative extraBold800 ">Ma collection</p>
          </div>
          <div className="flex items-center space-x-5 ml-3 mr-3"> 
              <ShopItems />
              <ShopItems />
              <ShopItems />
              <ShopItems />
            </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div class="border-l border-gray-400 pl-5 overflow-y-scroll customScrollbar h-[800px] ml-9">
            <div className="flex items-center space-x-9 space-y-2 ml-5 mr-9"> 
              <ShopItems />
              <ShopItems />
              <ShopItems />
            </div>
            <div className="flex items-center space-x-9 space-y-2 ml-5 mr-9"> 
              <ShopItems />
              <ShopItems />
              <ShopItems />
            </div>
            <div className="flex items-center space-x-9 space-y-2 ml-5 mr-9"> 
              <ShopItems />
              <ShopItems />
              <ShopItems />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}