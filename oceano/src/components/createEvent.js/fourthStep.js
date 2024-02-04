import { useState } from "react";

export default function FourthStep(props) {
    const [imgSrc, setImgSrc] = useState("img/impact/addImage.png");

    const changeImage = (event) => {
        const img = event.target.files[0];
        console.log(img)
        if (img) {
            setImgSrc(URL.createObjectURL(img))
            props.register("Image", {value : img, shouldValidate: true, shouldDirty: true })
        } else {
            setImgSrc("img/impact/addImage.png")
        }
    }
    return <div className="h-full">
        <div>
            <h1 className="text-5xl extraBoldNunito fontColor3C">As-tu une image pour illustrer <br /> ton action ?</h1>
        </div>
        <p className="text-[#9F9FA4] semiBoldNunito text-2xl">Les actions avec une image reçoivent jusqu'à 6 fois plus d'engagement !</p>
        <div className="border-2 border-neutral-200 rounded-2xl h-3/4 flex items-center justify-center">
            <div className="space-y-8">
                <div className="flex justify-center">
                    <img src={imgSrc} alt="add image make it blue" className="w-32" />
                </div>
                <div>
                    <input type="file" hidden id="upload" onChange={changeImage}/>
                    <label for="upload" className="blueTextColor border-2 border-neutral-200 rounded-2xl px-8 py-3 extraBoldNunito" >Ajouter une image</label>
                </div>
            </div>
        </div>
    </div>
}