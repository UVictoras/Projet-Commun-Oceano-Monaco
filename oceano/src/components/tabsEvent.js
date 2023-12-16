import { useState } from "react";

export default function Tab() {
    const Menu = [
        {
            id: 1,
            title: "PRÉSENTATION",
            content: "Nous demandons au gouvernement islandais d'interdire la chasse à la baleine une fois pour toutes. Selon un rapport de l'autorité alimentaire et vétérinaire islandaise, les baleines ont mis jusqu'à deux heures pour mourir lors des chasses islandaises. J’ai créé cet évènement dans l’objectif de sauver tout ces anima... ",
            span: "Voir plus",
            imgDatePicker: "img/event/calendar.png",
            textDatePicker: "Du   au 8 Juin",
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
            imgProfile: "img/victor.jpg",
            name: "Victor M.",
            titleLevel: "Héros des Grecs",
            level: "Niveau 4",
            participer: "Participer",
            logoShare: "img/event/share.png",
            linkImage: "",
            linkText: "Oceanic Conservation",
            phoneImage: "img/event/phone.png",
            phoneText: "06.50.41.92.25",
            mailImage:"img/event/mail.png",
            mailText:"vMartinant@gaming.tech",
        }
    ];

    const [activeIndex, setActiveIndex] = useState(1)
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "text-lg fontColor3C extraBold800 w-1/2  ";


    return <>
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
        
            <div className="flex mx-10 w-full ">
                {Menu.map(item => (
                    <div
                        key={item.id}
                        
                        className={`${item.color} panel flex ${(item.id===2)? "h-80 overflow-y-scroll customScrollbar" : ""} ${checkActive(item.id, "active flex nunito400")}`}
                    >
                        {item.id === 2 ? <div className="grid grid-cols-2   customScrollbar ">

                            <div className="profile ">
                                <div className="grid grid-cols-2">
                                    <div className="flex justify-center">
                                        <img src={item.imgProfile} alt="profile picture Make it blue" className="w-28 h-28 rounded-full" />
                                    </div>
                                    <div className="mt-4">
                                        <p className="blackNunito text-start">{item.name}</p>
                                        <p className="semiBoldNunito text-start mt-1.5">{item.titleLevel}</p>
                                        <p className="extraBold800 text-start mt-6">{item.level}</p>
                                    </div>
                                </div>
                                <div className="icon mt-5 flex space-x-4 mb-[22.5px]">
                                    <div className="w-11 h-11 backD9 rounded-2xl"></div>
                                    <div className="w-11 h-11 backD9 rounded-2xl"></div>
                                    <div className="w-11 h-11 backD9 rounded-2xl"></div>
                                    <div className="w-11 h-11 backD9 rounded-2xl"></div>
                                </div>
                            </div>
                            <div className="contact space-y-5 mt-4">
                                <div className="flex items-center space-x-4">
                                    <img src={item.linkImage}/>
                                    <p>{item.linkText}</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <img src={item.phoneImage}/>
                                    <p>{item.phoneText}</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <img src={item.mailImage}/>
                                    <p>{item.mailText}</p>
                                </div>
                            </div>


                        </div> : ""
                        }
                        <p className="text-left mr-16">{item.content}<span className="blueTextColor">
                            {item.span}
                        </span></p>

                        {item.id === 1 ? <div className="mt-7 text-left space-y-2">
                            <div className="flex semiBoldNunito">
                                <img src={item.imgDatePicker} alt="a" className="w-8" />
                                <p>{item.textDatePicker}</p>
                            </div>
                            <div className="flex semiBoldNunito">
                                <img src={item.imgLocate} alt="a" />
                                <p>{item.textLocate}</p>
                            </div>
                            <div className="flex semiBoldNunito">
                                <img src={item.imgLink} />
                                <a href className="underline blueTextColor">{item.textLink}</a>
                            </div>
                            <div className="flex extraBold800">
                                <img src={item.imgGoal} />
                                <p >{item.textGoal}</p>
                            </div>
                            <div className="w-[425px] h-[14px] bg-neutral-200 rounded-l-lg">
                                <div className=" w-[321px] h-[14px] progressBarObjectif rounded-l-lg"></div>
                            </div>
                        </div> :
                        <div className="lastAction text-start blackNunito text-2xl mt-7">
                            <h2>Dernières actions</h2>
                        </div>
                        }


                    </div>))
                }
            </div>

        </div>
    </>;
}