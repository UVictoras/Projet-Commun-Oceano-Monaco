import { useState } from "react";

export default function Tab() {
    const Menu = [
        {
            id: 1,
            title: "PRÉSENTATION",
            content: "Nous demandons au gouvernement islandais d'interdire la chasse à la baleine une fois pour toutes. Selon un rapport de l'autorité alimentaire et vétérinaire islandaise, les baleines ont mis jusqu'à deux heures pour mourir lors des chasses islandaises. J’ai créé cet évènement dans l’objectif de sauver tout ces anima... ",
            span: "Voir plus",
            imgDatePicker: "img/event/calendar.png",
            textDatePicker: "Du 14 Mai au 8 Juin",
            imgLocate: "img/event/locate.png",
            textLocate: "En ligne",
            imgLink: "img/event/link.png",
            textLink: "Oceanic Conservation",
            imgGoal: "img/event/goal.png",
            textGoal: "14 152€ sur 30 000€ collectés",
            color: "fontColor3C",
            participer: "Participer",
            logoShare: "img/event/share.png",

        },
        {
            id: 2,
            title: "ORGANISATEUR",
            content: "Hello je m’appelle Loris P., j’ai 19 ans et depuis toujours je kiffe les poissons, je les préfère en sauce LOL, non en vrai je suis passionné des océans et membre de beaucoup d’associations dans ma région, si jamais vous aussi vous êtes passionné n’hésitez pas à me contacter pour discuter...",
            span: "Voir plus",
            color: "fontColor3C",
            participer: "Participer",
            logoShare: "img/event/share.png",
        }
    ];

    const [activeIndex, setActiveIndex] = useState(1)
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "text-lg fontColor3C extraBold800 w-1/2  ";


    return <>
        <div className="mt-6 flex flex-col space-y-4">
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
            <div className="flex mx-10">
                {Menu.map(item => (
                    <div
                        key={item.id}
                        className={`${item.color} panel flex  ${checkActive(item.id, "active flex nunito400")}`}
                    >
                        <p className="text-left">{item.content}<span className="blueTextColor">
                            {item.span}
                        </span></p>

                        {item.id === 1 ? <div className="mt-7 text-left space-y-6">
                            <div className="flex">
                                <img src={item.imgDatePicker} alt="a" className="w-8" />
                                <p>{item.textDatePicker}</p>
                            </div>
                            <div className="flex">
                                <img src={item.imgLocate} alt="a" />
                                <p>{item.textLocate}</p>
                            </div>
                            <div className="flex">
                                <img src={item.imgLink} />
                                <a href className="underline">{item.textLink}</a>
                            </div>
                            <div className="flex">
                                <img src={item.imgGoal} />
                                <p >{item.textGoal}</p>
                            </div>
                            <div className="w-[425px] h-[14px] bg-neutral-200 rounded-l-lg">
                                <div className=" w-[321px] h-[14px] progressBarObjectif rounded-l-lg"></div>
                            </div>
                        </div> : ""
                        }
                        <div className="flex mt-[43px]">
                            <boutton className="w-[460px] h-11 blueButton rounded-2xl blackNunito text-white flex items-center justify-center ">{item.participer}</boutton>
                            <boutton className="ml-2.5 w-16 flex items-center justify-center border border-neutral-200 bg-white rounded-2xl whiteButton">
                                <img
                                    src={item.logoShare}
                                ></img>
                            </boutton>
                        </div>

                    </div>))
                }
            </div>

        </div>
    </>;
}