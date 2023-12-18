import { useState } from "react";

export default function Tab() {
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
            title: "Accessoires",

        },
        {
            id: 4,
            title: "Bannières",

        },
        {
            id: 5,
            title: "Bonus",

        },
        {
            id: 6,
            title: "Récompenses",

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
    
        <div className="flex mx-10 overflow-y-scroll w-full customScrollbar">
            {Menu.map(item => (
                <div
                    key={item.id}
                    className={`${item.color} panel flex  ${checkActive(item.id, "active flex nunito400")}`}
                >
                    {item.id === 2 ? <div className="grid grid-cols-2">

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
                            <div className="flex items-center  space-x-4">
                                <img src={item.phoneImage}/>
                                <p>{item.phoneText}</p>
                            </div>
                            <div className="flex items-center  space-x-4">
                                <img src={item.mailImage}/>
                                <p>{item.mailText}</p>
                            </div>
                        </div>


                    </div> : ""
                    }
                    <p className="text-left mr-16">{item.content}<span className="blueTextColor">
                        {item.span}
                    </span></p>

                    {item.id === 1 ? <div className="mt-7 text-left space-y-6">
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

                    {item.id === 2 ? <div className="grid grid-cols-2">

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
                            <div className="flex items-center  space-x-4">
                                <img src={item.phoneImage}/>
                                <p>{item.phoneText}</p>
                            </div>
                            <div className="flex items-center  space-x-4">
                                <img src={item.mailImage}/>
                                <p>{item.mailText}</p>
                            </div>
                        </div>


                    </div> : ""
                    }
                    <p className="text-left mr-16">{item.content}<span className="blueTextColor">
                        {item.span}
                    </span></p>



                </div>))
            }
        </div>

    </div>
</>;
}