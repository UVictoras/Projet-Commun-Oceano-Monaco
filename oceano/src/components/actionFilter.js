import { isSelected } from "../utils/webFunction";

export default function ActionFilter(props) {
    return <div className=''>
        <button className="donationFiltre rounded-2xl flex items-center space-x-2" id={props.id} onClick={()=>isSelected(props.id,props.index)}>
            <div className="ml-2 mr-2">
                <img src='img/icon/coin.png' alt='coin make it blue' className='w-12' />
            </div>

            <div className="text-start py-2 pr-2">
                <h3 className='text-sm extraBoldNunito'>Donations</h3>
                <p className="semiBoldNunito greyText text-xs">Donnez une petite somme d’argent pour une cause qui compte pour vous.</p>
            </div>
        </button>
    </div>
}