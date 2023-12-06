function Join(){
    return(
        <div class=" grid place-content-center">
            <h1 class=" grid place-content-center h-24 ... text font-medium   text-gray-900 ">Titre de l'action</h1>
            <h2 class=" grid place-content-center h-24 ... text font-medium   text-gray-900 ">Le nom de l'utilisatuer qui a créé l'action</h2>           
            <p class="grid place-content-center h-24 ...">Description de l'action</p>
            <p class="grid place-content-center ">Votre manière de contribuer :</p>
            <form class="grid place-content-center ">
                <fieldset class="grid place-content-center h-48 ... ">
                <div className="mt-6 space-y-6">
                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="comments"
                        name="comments"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="comments" className="font-medium text-gray-900">
                        Don
                        </label>
                    </div>
                    </div>
                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="candidates"
                        name="candidates"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="candidates" className="font-medium text-gray-900">
                        Présence
                        </label>
                    </div>
                    </div>
                    <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                        <input
                        id="offers"
                        name="offers"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                    </div>
                    <div className="text-sm leading-6">
                        <label htmlFor="offers" className="font-medium text-gray-900">
                        Signature
                        </label>                       
                    </div>
                    </div>
                </div>
                </fieldset>
                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Rejoindre</button>
            </form>    
        </div>
    )
}
export default Join