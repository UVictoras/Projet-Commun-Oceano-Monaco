import { useEffect, useState } from "react";
import ShopItems from "./shopItems";
import Shop from "../pages/shop";
import { getAccessories } from "../api/user";

export default function TabShop(props) {
    const [ accessories, setAccessories ] = useState([]);
    const [ shopItem, setShopItem ] = useState([]);
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

    useEffect(() => {
        const userFetched = getAccessories();
        userFetched
        .then(result => setAccessories(result))
        .catch(error=>console.error("Error :",error.message))
    },[]);

    useEffect(() => {
        const generatedItems = accessories.reduce((acc, accessorie, index) => {
            if (index % 3 === 0) {
                acc.push([]);
            }
            acc[acc.length - 1].push(<ShopItems key={index} accessorie={accessorie} />);
            return acc;
        }, []);

        const shopItemElements = generatedItems.map((group, index) => (
            <div key={index} className="flex items-end space-x-9 h-2/5">
                {group}
            </div>
        ));

        setShopItem(shopItemElements);
    },[accessories]);

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
                            {/* <div className="flex items-end space-x-9 h-2/5 ">
                                <ShopItems />
                                <ShopItems />
                                <ShopItems />
                            </div>
                            <div className="flex items-end space-x-9 h-2/5">
                                <ShopItems />
                                <ShopItems />
                                <ShopItems />
                            </div>
                            <div className="flex items-end space-x-9 h-2/5">
                                <ShopItems />
                                <ShopItems />
                                <ShopItems />
                            </div> */}
                            {shopItem}
                        </div>


                    </div>))
                }
            </div>

        </div>
    </>;
}


