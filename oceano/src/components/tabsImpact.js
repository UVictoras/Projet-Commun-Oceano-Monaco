import { useState } from "react";
import BannierFriend from "./bannierFriend";
import { updateHeight } from "../utils/webFunction";


export default function TabShop(props) {
    const Menu = [
        {
            id: 1,
            title: "Amis",
            color: "fontColor3C",
        },
        {
            id: 2,
            title: "Région",
            color: "fontColor3C",
        },
        {
            id: 3,
            title: "Monde",
            color: "fontColor3C",
        },


    ];

    const [activeIndex, setActiveIndex] = useState(1)
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "w-1/3 text-lg fontColor3C extraBold800 uppercaseText ";


    return <>

        <div className="border-b border-b-neutral-200 border-b-2">
            {Menu.map(item =>
            (<button
                key={item.id}
                className={`${checkActive(item.id, "w-1/3 text-lg blueTextColor extraBold800 p-3 tabsActiveBorder uppercaseText")}`}
                onClick={() => handleClick(item.id)}>
                {item.title}

            </button>))
            }
        </div>
        <div className="h-[90%] mt-2 ">
            <div className="overflow-y-auto customScrollbar h-full px-5 ">
                {Menu.map(item => (
                    <div
                        key={item.id}

                        className={`${item.color} panel  ${checkActive(item.id, "active nunito400 space-y-4")}`}

                    >
                        <BannierFriend />
                        <BannierFriend />
                        <BannierFriend />
                        <BannierFriend />
                        <BannierFriend />
                        <BannierFriend />
                        <BannierFriend />
                        <BannierFriend />
                        <BannierFriend />
                        <BannierFriend />
                        <BannierFriend />
                        <BannierFriend />
                        <BannierFriend />








                    </div>))
                }
            </div>
        </div>

    </>;
}


