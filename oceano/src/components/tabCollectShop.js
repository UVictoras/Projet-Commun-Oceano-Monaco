import { useState, useEffect } from "react";
import ShopItems from "./shopItems";
import Shop from "../pages/shop";
import { getEquipAccessories } from "../api/user";

export default function TabCollectShop(props) {
    const [accessories, setAccessories] = useState([])
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

    useEffect(() => {
        const userFetched = getEquipAccessories({ id: props.ID });
        userFetched
        .then(result => setAccessories(result))
        .catch(error=>console.error("Error :",error.message))
    },[]);

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
                        {accessories.map(accessorie => (
                            <div className="w-1/4 flex justify-center">
                                <ShopItems accessorie={accessorie}/>
                            </div>
                        ))}
                            <div className="w-1/4 flex justify-center">
                                <ShopItems />
                            </div>
                            <div className="w-1/4 flex justify-center">
                                <ShopItems />
                            </div>
                            <div className="w-1/4 flex justify-center">
                                <ShopItems />
                            </div>
                            <div className="w-1/4 flex justify-center">
                                <ShopItems />
                            </div>
                        </div>





                    </div>))
                }
            </div>

        </div>
    </>;
}

