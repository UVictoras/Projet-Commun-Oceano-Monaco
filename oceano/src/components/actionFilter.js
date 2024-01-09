import { isSelected } from "../utils/webFunction";

export default function ActionFilter(props) {
    return <div className='w-1/2'>
        <button className="donationFiltre p-1 rounded-2xl flex items-center hover:bg-neutral-200 space-x-2  h-full" id={props.id} onClick={()=>isSelected(props.id,props.index)}>
            <div className="ml-2 mr-2">
                <img src='img/icon/coinFilter.svg' alt='coin make it blue' className='w-12' />
            </div>

            <div className="text-start py-2 pr-2">
                <h3 className='text-sm extraBoldNunito'>Donations</h3>
                <p className="semiBoldNunito greyText text-xs">Donnez une petite somme d’argent pour une cause qui compte pour vous.</p>
            </div>
        </button>
    </div>
}