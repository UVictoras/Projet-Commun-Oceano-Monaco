
import { useEffect, useRef } from "react";
import ReceiveMessage from "./receiveMessage";
import SentMessage from "./sentMessage";

export default function Chat(props) {
    const chatRef = useRef(null);

    useEffect(() => {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, []);
    
    return <div className="backgroundChat">
        <div className="headband w-full flex  border-x-2 border-b-2 border-neutral-200 rounded-2xl">
            <div className="w-1/2 flex">
                <div>
                    <img src={props.event.Image} alt='Whale make it blue' className="rounded-2xl w-20 h-20 object-cover" />
                </div>
                <div className="p-4 ml-2">
                    <h1 className="extraBold800 fontColor3C text-base">{props.event.Title}</h1>
                    <p className="text-start greyText nunito500 text-base">{props.event.Pseudo}</p>
                </div>
            </div>

            <div className="flex items-center justify-end w-1/2 p-6">
                <button onClick={props.closeChat} className="">
                    <img src="img/icon/exit.png" alt="croix make it blue" className="" />
                </button>
            </div>
        </div>
        <div className="chat h-5/6 overflow-y-auto max-h-full customScrollbar flex-col justify-end p-4"  ref={chatRef}>
            <div className="ml-auto max-w-max">
                <SentMessage />
            </div>
            <div className="max-w-max">
                <ReceiveMessage />
            </div>
            <div className="ml-auto max-w-max">
                <SentMessage />
            </div>
            <div className="max-w-max">
                <ReceiveMessage />
            </div>
            <div className="ml-auto max-w-max">
                <SentMessage />
            </div>
            <div className="max-w-max">
                <ReceiveMessage />
            </div>
            <div className="ml-auto max-w-max">
                <SentMessage />
            </div>
            <div className="max-w-max">
                <ReceiveMessage />
            </div>
            <div className="ml-auto max-w-max">
                <SentMessage />
            </div>
            <div className="max-w-max">
                <ReceiveMessage />
            </div>
            <div className="ml-auto max-w-max">
                <SentMessage />
            </div>
            <div className="max-w-max">
                <ReceiveMessage />
            </div>
            <div className="ml-auto max-w-max">
                <SentMessage />
            </div>
            <div className="max-w-max">
                <ReceiveMessage />
            </div>
            <div className="ml-auto max-w-max">
                <SentMessage />
            </div>
            <div className="max-w-max">
                <ReceiveMessage />
            </div>
        </div>
        <div className="send ">
            <form className="flex space-x-4">
                <button className="bg-white flex items-center justify-center plusButton rounded-xl p-3 ml-2" type="button">
                    <img src="img/icon/plus.svg" alt="plus make it blue" />
                </button>
                <input className="rounded-xl inputChat w-4/5 pl-4" placeholder="Ecriver un message..."></input>
                <button className="blueButtonEvent px-9 rounded-xl text-white blackNunito uppercaseText text-sm h-[50px]">Envoyer</button>
            </form>
        </div>
    </div >
}