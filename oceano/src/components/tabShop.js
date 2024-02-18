import { useState } from "react";
import ShopItems from "./shopItems";
import Shop from "../pages/shop";

export default function TabShop(props) {
    const Menu = [
        {
            id: 1,
            title: "Accessoires"

        },
        {
            id: 2,
            title: "Bannières"
        },
        {
            id: 3,
            title: "Bonus"
        },
        {
            id: 4,
            title: "Récompenses"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(1)
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "w-1/4 text-lg fontColor3C extraBold800  uppercaseText ";


    return <>
        <div className="mt-6 flex flex-col space-y-4 h-full ">
            <div className="border-b border-b-neutral-200 border-b-2">
                {Menu.map(item =>
                (<button
                    key={item.id}
                    className={`${checkActive(item.id, "w-1/4 text-lg blueTextColor extraBold800 pb-3 tabsActiveBorder uppercaseText")}`}
                    onClick={() => handleClick(item.id)}>
                    {item.title}

                </button>))
                }
            </div>

            <div className="h-full">
                {Menu.map(item => (
                    <div
                        key={item.id}

                        className={`${item.color} panel  ${checkActive(item.id, "active nunito400 overflow-y-scroll customScrollbar h-[710px]")}`}
                    >

                        <div className="mx-20 justify-center space-y-2 h-full">
                            <div className="grid grid-cols-3 space-y-32 justify-items-center">
                                <ShopItems />
                                <ShopItems />
                                <ShopItems />
                                <ShopItems />
                                <ShopItems />
                                <ShopItems />
                                <ShopItems />
                                <ShopItems />
                                <ShopItems />
                            </div>
                        
                            {/* <div className="flex items-end space-x-9 h-2/5 ">
                                <ShopItems />
                                <ShopItems />
                            </div>
                            <div className="flex items-end space-x-9 h-2/5">
                                <ShopItems />
                            </div>
                            <div className="flex items-end space-x-9 h-2/5">
                                <ShopItems />
                            </div> */}
                        </div>


                    </div>))
                }
            </div>

        </div>
    </>;
}


