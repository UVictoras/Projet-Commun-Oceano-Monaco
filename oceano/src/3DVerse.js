import { Canvas } from "./Canva.jsx";


async function Anim(props){

    const meshUUID = 'b9cf175a-1a94-4247-b9ab-b0cb006e9feb';
    const entity = await Canvas.SDK3DVerse.engineAPI.findEntitiesByEUID('dd582951-6348-4fca-a352-294de65f515c');
    console.log(entity);
}
export default Anim