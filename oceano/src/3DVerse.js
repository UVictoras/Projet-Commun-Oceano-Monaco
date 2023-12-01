import { Canvas } from "./Canva.jsx";

// const a = window.SDK3DVerse


export async function Anim(props){
    const test = ['7f79f21d-ef6c-44eb-9922-7b0515f8c7fd', 'b2e76a8a-d75e-4868-b5f3-04fe31620158']

    const entity = await window.SDK3DVerse.engineAPI.findEntitiesByEUID('30e6e720-827f-4eb8-bcc1-7990ce91d388');

    const component = entity[0].getComponent('mesh_ref').value

    if(component == test[0]){ 
        entity[0].setComponent('mesh_ref',entity[0].getComponent('mesh_ref').value = test[1])

    }else{
        entity[0].setComponent('mesh_ref',entity[0].getComponent('mesh_ref').value = test[0])
    }
}


export async function Click(props){
    console.log(window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports())
    const camera = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
    camera[0].cameraEntity.components.local_transform.eulerOrientation[0] = 2;
    camera[0].cameraEntity.components.local_transform.eulerOrientation[1] = 2;
    camera[0].cameraEntity.components.local_transform.eulerOrientation[2] = 2;
    camera[0].cameraEntity.components.local_transform.position[0] = 2;
    camera[0].cameraEntity.components.local_transform.position[1] = 2;
    camera[0].cameraEntity.components.local_transform.position[2] = 2;

    

}
