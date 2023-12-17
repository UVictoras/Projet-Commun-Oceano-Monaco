import Navbar from "../components/navbar";
import ShopItems from "../components/shopItems";
import { useState } from "react";

export default function Shop() {
  const Menu = [
    {
      id: 1,
      title: "Accessoires",
    },
    {
      id: 2,
      title: "Bannières",
    },
    {
      id: 3,
      title: "Bonus",
    },
    {
      id: 3,
      title: "Récompenses",
    }
  ];


  const [activeIndex, setActiveIndex] = useState(1)
  const handleClick = (index) => setActiveIndex(index);
  const checkActive = (index, className) => activeIndex === index ? className : "text-lg fontColor3C extraBold800 w-1/2  ";


  return (
    <>

      <Navbar />

      <div className="flex mt-4">
        <div className="w-1/2 pr-5">
          <div className="image-center flex items-center justify-center h-full ">
            <img src="img/items.svg" alt="Objet à acheter" className="w-[75%]" />
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
        <div className="mt-6 flex flex-col space-y-4 ">
          {/* Tab list*/}
          <div className="border-b border-b-neutral-200 border-b-2">
            {Menu.map(item =>
            (<button
              key={item.id}
              className={`${checkActive(item.id, "w-1/2 text-lg blueTextColor extraBold800 pb-3 tabsActiveBorder")}`}
              onClick={() => handleClick(item.id)}>
              {item.title}

            </button>))
            }
          </div>
        </div>
        
         
        <div className="mt-6 flex flex-col space-y-4 ">
          {/* Tab list*/}
          <div className="border-b border-b-neutral-200 border-b-2">
            {Menu.map(item =>
            (<button
              //key={item.id}
              className={`${checkActive(item.id, "w-1/2 text-lg blueTextColor extraBold800 pb-3 tabsActiveBorder")}`}
              onClick={() => handleClick(item.id)}>
              {item.title}

            </button>))
            }
          </div>

          <div className="w-2/3 border-l border-gray-400 pl-5 overflow-x-scroll customScrollbar">
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
      </div>
    </>
  );
}