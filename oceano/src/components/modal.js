const Modal = ({isVisible, onClose}) => {

    if (!isVisible) return null;

    return (
            <div className="modal">
                <div class="relative p-4 w-full max-w-2xl max-h-full">
                    <div class="relative rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Avatar
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={() => onClose()}>
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div>
                            <form>
                                <fieldset>
                                    <label>personnage :</label>
                                    <div class="flex items-center mb-4">
                                        <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4 " ></input>
                                        <img src ="carrevert.jpg" alt="poisson"></img>                                    
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="country-option-1" type="radio" name="countries" value="USA" class="w-4 h-4" ></input>
                                        <img src ="carrevert.jpg" alt="oiseaux"></img>                                    
                                    </div>
                                </fieldset>
                                <fieldset>
                                    <label>accessoire :</label>
                                    <div class="flex items-center mb-4">
                                        <input id="country-option-2" type="radio" name="pays" value="USA" class="w-4 h-4 " ></input>
                                        <img src ="carrevert.jpg" alt="chapeau"></img>                                    
                                    </div>
                                    <div class="flex items-center mb-4">
                                        <input id="country-option-2" type="radio" name="pays" value="USA" class="w-4 h-4" ></input>
                                        <img src ="carrevert.jpg" alt="lunette"></img>                                    
                                    </div>
                                </fieldset>
                                <img src ="pages/vert.jpg" alt="Le résultat"></img>
                                <button type="submit" class="text-white bg-blue-700 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Se connecter</button>
                            </form>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
    )
}

export default Modal

// {/* <div className="Commmunity">
        
            
//         <button class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" onClick={() => setShowModal(true)}>
//             Votre avatar
//         </button>
//         <Modal isVisible={showModal} onClose={()=> setShowModal(false)}/>
    
//     </div> */}

//const [showModal, setShowModal] = useState(false);