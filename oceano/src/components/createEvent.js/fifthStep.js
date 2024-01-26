export default function FifthStep() {
    return <div className="h-full">
        <div>
            <h1 className="text-5xl extraBoldNunito fontColor3C pb-6">Est-ce que toutes les <br />informations sont correctes ?</h1>
        </div>
        <div className="border-2 border-neutral-200 rounded-2xl h-3/4 overflow-hidden">
            <div className="h-1/4 w-full relative">
                <img src="img/event/whale.svg" alt="whale make it blue" className=" rounded-2xl absolute inset-0 w-full h-full object-cover" />

            </div>
            <div className="h-3/4 px-5">
                <div className="h-1/3 grid grid-cols-1 gap-4 content-center">
                    <h1 className="fontColor3C text-3xl extraBold800 mt-4">Sauvons la baleine franche de la mer Baltique</h1>
                    <div class="flex items-center">
                        <p class="flex-grow semiBoldNunito greyText">
                            Lancé par <span className="text-[#1CB0F6] extraBold800"> Matéo C.</span>
                        </p>
                        <div className="flex-shrink-0 flex space-x-3.5 ">
                            <div className='donation px-4 rounded-2xl flex items-center justify-center space-x-2 py-2'>
                                <img src='img/icon/coinFilter.svg' alt='coin make it blue' className='w-4' />
                                <p className='text-sm extraBoldNunito'>Donation</p>
                            </div>
                            <div className="date bg-white border-2 px-4 border-neutral-200 rounded-2xl flex items-center justify-center space-x-2 whitespace-nowrap">
                                <img src='img/event/date.svg' alt='date make it blue' className='w-4' />
                                <p className='text-sm extraBoldNunito flex'>8 Juin</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-1/3 mt-6">
                    <p className="nunito500 fontColor3C text-sm">Nous demandons au gouvernement islandais d'interdire la chasse à la baleine une fois pour toutes.
                        Selon un rapport de l'autorité alimentaire et vétérinaire islandaise, les baleines ont mis jusqu'à deux heures pour mourir lors
                        des chasses islandaises. J’ai créé cet évènement dans l’objectif de sauver tout ces animaux sans défense qui subissent contre leur volonté et
                        la volonté des protecteurs des océans les foudres du capitalisme et de la société occidentale moderne qui est, comme nous... Voir plus</p>

                </div>
                <div className="h-1/4 flex items-center justify-between">
                    <div className="flex semiBoldNunito items-center space-x-2">
                        <img src="img/event/calendar.png" alt="date picker make it blue" className="w-8" />
                        <p>Du 14 Mai au 8 Juin</p>
                    </div>
                    <div className="flex semiBoldNunito items-center space-x-2">
                        <img src="img/event/locate.png" alt="locate make it blue" />
                        <p>En ligne</p>
                    </div>
                    <div className="flex semiBoldNunito items-center space-x-1">
                        <img src="img/event/link.png" alt="link make it blue" />
                        <a href className="underline blueTextColor">Oceanic Conservation</a>
                    </div>
                    <div className="flex extraBold800 items-center space-x-2">
                        <img src="img/event/goal.svg" alt="goal make it blue" />
                        <p >1500 signatures</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
}