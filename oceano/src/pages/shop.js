import Navbar from "../components/navbar";
import ShopItems from "../components/shopItems";

export default function Shop() {
  return (
    <>
      <Navbar />

      <div className="flex mt-4"> 
        <div className="w-1/2 pr-5"> 
        <div className="image-center flex items-center justify-center h-full ">
            <img src="img/items.svg" alt="Objet à acheter" className="w-[75%]"/>
          </div> 
          <div className="bottom-section mb-4">
      <button className="text-white shopButton extraBold800 rounded-xl text-sm flex items-center justify-center w-[375px] h-[46px]">
        SAUVEGARDER
      </button>
    </div>
    <div className="mb-4 max-w-sm mx-auto">
                <p className="text-center loune relative extraBoldNunito ">Ma collection</p>
            </div>
        </div>
        
        <div className="w-2/3 border-l border-gray-300 pl-5 customScrollbar"> 
          <div className="flex flex-row space-x-5 space-y-3"> 
            <ShopItems />
            <ShopItems />
            <ShopItems />
            <ShopItems />
          </div>
          <div className="flex flex-row space-x-5 space-y-3">
            <ShopItems />
            <ShopItems />
            <ShopItems />
            <ShopItems />
        </div>
        <div className="flex flex-row space-x-5 space-y-3">
            <ShopItems />
            <ShopItems />
            <ShopItems />
            <ShopItems />
        </div>
        <div className="flex flex-row space-x-5 space-y-3">
            <ShopItems />
            <ShopItems />
            <ShopItems />
            <ShopItems />
        </div>
      </div>
    </div>  
    </>
  );
}