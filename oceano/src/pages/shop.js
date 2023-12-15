import Navbar from "../components/navbar";
import ShopItems from"../components/shopItems";

export default function Shop() {
    return <>
        <Navbar />
        <div className="flex space-x-5 ">
        <ShopItems />
        <ShopItems />
        <ShopItems />
        <ShopItems />
        </div>
    </>
}