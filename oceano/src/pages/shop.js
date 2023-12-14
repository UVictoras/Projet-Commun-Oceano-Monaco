import Navbar from "../components/navbar";

export default function Shop() {
    return <>
        <Navbar />
        <div className="wrapper flex h-screen w-full">
            <div className="fixed w-1/3 p-4 bg-gray-200"></div>
            <div className="w-2/3 scrollable overflow-y-auto p-4"></div>
        </div>

    </>
}