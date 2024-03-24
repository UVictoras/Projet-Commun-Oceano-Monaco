import { useState, useEffect } from "react";
import ShopItems from "./shopItems";
import Shop from "../pages/shop";

export default function TabCollectShop(props) {
    
    const Menu = [
        {
            id: 1,
            title: "Accessoires"
        },
        {
            id: 2,
            title: "Bannières"
        },

    ];

    const [activeIndex, setActiveIndex] = useState(1)
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "w-1/2 text-lg fontColor3C extraBold800  uppercaseText ";

    return <>
        <div className="mt-6 flex flex-col space-y-4 h-full ">
            <div className="border-b border-b-neutral-200 border-b-2">
                {Menu.map(item =>
                (<button
                    key={item.id}
                    className={`${checkActive(item.id, "w-1/2 text-lg blueTextColor extraBold800 pb-3 tabsActiveBorder uppercaseText")}`}
                    onClick={() => handleClick(item.id)}>
                    {item.title}

                </button>))
                }
            </div>

            <div className="h-full">
                {Menu.map(item => (
                    <div
                        key={item.id}

                        className={`${item.color} panel  ${checkActive(item.id, "active nunito400 h-full ")}`}
                    >


                        <div className="flex h-full">
                            {props.accessories.map(accessorie => (
                                <div className="w-1/4 flex justify-center">
                                    <ShopItems accessorie={accessorie}/>
                                </div>
                            ))}
                        </div>





                    </div>))
                }
            </div>

        </div>
    </>;
}

