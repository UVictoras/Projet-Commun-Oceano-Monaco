function Searchbar(props) {
    return <div className="z-40 flex justify-center space-x-2.5 ">
        <div>
            <form className="">
                <div className="">
                    <div className=" text-gray-600 z-20 flex items-center">
                        <span className="absolute pl-2">
                            <svg className="w-6 h-6 searchBarGlassColor ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </span>
                        <input className=" pl-12 pr-4 p-4 text-sm border-2 border-neutral-200 rounded-xl bg-white w-96 extraBoldNunito " placeholder="Rechercher une action..." />
                    </div>
                </div>
            </form>
        </div>
        <div className="flex ">
            <button className="bg-white flex items-center justify-center filterButton rounded-xl w-[60px] h-[60px]" onClick={props.handlePing}>
                <img src="img/icon/plus.svg" alt="add make it blue" />
            </button>
        </div>
    </div >
}
export default Searchbar