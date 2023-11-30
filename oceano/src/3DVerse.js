import { Canvas } from "./Canva.jsx";

// const a = window.SDK3DVerse

async function Anim(props){
    const test = ['7f79f21d-ef6c-44eb-9922-7b0515f8c7fd', 'b2e76a8a-d75e-4868-b5f3-04fe31620158']

    const entity = await window.SDK3DVerse.engineAPI.findEntitiesByEUID('dd582951-6348-4fca-a352-294de65f515c');
    console.log(entity);
    // console.log(entity[0].components.mesh_ref.value)
    const component = entity[0].getComponent('mesh_ref')
    // console.log(entity[0].getComponent('mesh_ref'))
    if(component.value == test[0]){
        console.log("a")
        component.value = test[1]
        // const meshRefComponent = { value : test[1], submeshIndex : 0 };
        // entity[0].detachComponent('mesh_ref');
        // entity[0].attachComponent('mesh_ref', meshRefComponent);
    }
    // else{
    //     entity[0].components.mesh_ref.value = test[0]
    //     window.SDK3DVerse.engineAPI.saveEntities(entity);
    //     // const meshRefComponent = { value : test[0], submeshIndex : 0 };
    //     // entity[0].detachComponent('mesh_ref');
    //     // entity[0].attachComponent('mesh_ref', meshRefComponent);
    // }
    // window.SDK3DVerse.engineAPI.saveEntities(entity);
    
}
export default Anim