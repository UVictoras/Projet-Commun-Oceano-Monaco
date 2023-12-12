function Searchbar(props) {
    return <div className="searchBar  relative w-screen flex items-center justify-center z-10  h-[73px]">
    <div className=" top-1/2 left-1/2 ">
        <form className="">
            <div class="relative">
                <input type="search" id="default-search" 
                class="p-4 test pr-16  text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 h-[73px] w-[605px] " 
                placeholder="Rechercher une action..." />
                        <button type="submit" class="levelColor absolute end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 flex items-center">
                            <svg class="w-4 h-4 text-white-500 dark:text-grey-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>
                        </button>
                </div>
            </form>
        </div>

    </div>
}
export default Searchbar