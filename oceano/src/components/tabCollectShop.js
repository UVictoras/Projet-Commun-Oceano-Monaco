import { useState } from "react";
import ShopItems from "./shopItems";
import Shop from "../pages/shop";

export default function TabCollectShop(props) {
    const Menu = [
        {
            id: 1,
            title: "Accessoires",
            content: "props.event.Description",
            span: "Voir plus",
            imgDatePicker: "img/event/calendar.png",
            textDatePicker: "Du ",
            imgLocate: "img/event/locate.png",
            textLocate: "En ligne",
            imgLink: "img/event/link.png",
            textLink: "props.event.Link",
            imgGoal: "img/event/goal.svg",
            textGoal: "14 152€ sur 30 000€ collectés",
            color: "fontColor3C",
            participer: "Participer",
            logoShare: "img/event/share.png",

        },
        {
            id: 2,
            title: "Bannières",
            content: "Hello je m’appelle Loris P., j’ai 19 ans et depuis toujours je kiffe les poissons, je les préfère en sauce LOL, non en vrai je suis passionné des océans et membre de beaucoup d’associations dans ma région, si jamais vous aussi vous êtes passionné n’hésitez pas à me contacter pour discuter...",
            span: "Voir plus",
            color: "fontColor3C",
            imgProfile: "props.event.ImageProfil",
            name: 'props.event.First_name + " " + props.event.Last_name',
            titleLevel: "props.event.TitleName",
            level: "Niveau " + "props.event.Number",
            participer: "Participer",
            logoShare: "img/event/share.png",
            phoneImage: "img/event/phone.png",
            phoneText: "06.50.41.92.25",
            mailImage: "img/event/mail.png",
            mailText: "props.event.Email",
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

