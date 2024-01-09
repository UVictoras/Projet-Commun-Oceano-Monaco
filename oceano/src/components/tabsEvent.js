import { useState } from "react";

export default function Tab(props) {
    const Menu = [
        {
            id: 1,
            title: "PRÉSENTATION",
            content: props.event.Description,
            span: "Voir plus",
            imgDatePicker: "img/event/calendar.png",
            textDatePicker: "Du " + new Intl.DateTimeFormat("fr-FR", { month: "long", day: "numeric" }).format(new Date(props.event.Start_date)) +
                " au " + new Intl.DateTimeFormat("fr-FR", { month: "long", day: "numeric" }).format(new Date(props.event.End_date)),
            imgLocate: "img/event/locate.png",
            textLocate: "En ligne",
            imgLink: "img/event/link.png",
            textLink: props.event.Link,
            imgGoal: "img/event/goal.svg",
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
            imgProfile: props.event.ImageProfil,
            name: props.event.First_name + " " + props.event.Last_name,
            titleLevel: props.event.TitleName,
            level: "Niveau " + props.event.Number,
            participer: "Participer",
            logoShare: "img/event/share.png",
            phoneImage: "img/event/phone.png",
            phoneText: "06.50.41.92.25",
            mailImage: "img/event/mail.png",
            mailText: props.event.Email,
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

                        className={`${item.color} panel flex ${(item.id === 2) ? "h-80 overflow-y-scroll customScrollbar" : ""} ${checkActive(item.id, "active flex nunito400")}`}
                    >
                        {item.id === 2 ? <div className="grid grid-cols-2 customScrollbar space-y-4">

                            <div className="profile">
                                <div className="grid grid-cols-2">
                                    <div className="flex justify-center">
                                        <img src={item.imgProfile} alt="profile Make it blue" className="w-28 h-28 rounded-full" />
                                    </div>
                                    <div className="mt-4">
                                        <p className="blackNunito text-start">{item.name}</p>
                                        <p className="semiBoldNunito text-start mt-1.5">{item.titleLevel}</p>
                                        <p className="extraBold800 text-start mt-6">{item.level}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="contact space-y-3 mt-4">
                                <div className="flex items-center space-x-4">
                                    <img src={item.phoneImage} alt="phone make it blue" />
                                    <p>{item.phoneText}</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <img src={item.mailImage} alt="mail make it blue" />
                                    <p>{item.mailText}</p>
                                </div>
                            </div>


                        </div> : ""
                        }
                        <div>
                            <p className="text-left mr-16">{item.content}<span className="blueTextColor">
                                {item.span}
                            </span></p>
                        </div>


                        {item.id === 1 ? <div className="mt-4 text-left space-y-4">
                            <div className="flex semiBoldNunito items-center space-x-2">
                                <img src={item.imgDatePicker} alt="date picker make it blue" className="w-8" />
                                <p>{item.textDatePicker}</p>
                            </div>
                            <div className="flex semiBoldNunito items-center space-x-2">
                                <img src={item.imgLocate} alt="locate make it blue" />
                                <p>{item.textLocate}</p>
                            </div>
                            <div className="flex semiBoldNunito items-center space-x-1">
                                <img src={item.imgLink} alt="link make it blue" />
                                <a href className="underline blueTextColor">{item.textLink}</a>
                            </div>
                            <div className="flex extraBold800 items-center space-x-2">
                                <img src={item.imgGoal} alt="goal make it blue" />
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