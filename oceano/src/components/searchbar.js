function Searchbar(props) {
    return <div className="z-10 flex justify-center ">

        <form className="">
            <div class="">
                <div class=" text-gray-600 z-20 flex items-center">
                    <span class="absolute pl-2">
                        <svg class="w-6 h-6 searchBarGlassColor ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </span>
                    <input type="text" class=" pl-12 pr-4 p-4 text-sm border-4 border-gray-300 rounded-xl bg-gray-50 lg:w-[505px] w-[20px] extraBoldNunito " placeholder="Rechercher une action..." />
                </div>
            </div>
        </form>
    </div>
}
export default Searchbar