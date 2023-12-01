import { Canvas } from "./Canva.jsx";

// const a = window.SDK3DVerse

export async function Anim(props) {
    const test = ['7f79f21d-ef6c-44eb-9922-7b0515f8c7fd', '6261d10d-8540-4511-8cc8-e149ec35627e']

    const entity = await window.SDK3DVerse.engineAPI.findEntitiesByEUID('30e6e720-827f-4eb8-bcc1-7990ce91d388');

    const component = entity[0].getComponent('mesh_ref').value

    console.log(entity)
    if (component == test[0]) {
        entity[0].setComponent('mesh_ref', entity[0].getComponent('mesh_ref').value = test[1])

    } else {
        entity[0].setComponent('mesh_ref', entity[0].getComponent('mesh_ref').value = test[0])
    }
}


export async function Camera(props) {
    console.log(window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports())
    const camera = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
}
export async function Click(props) {
    const canvas = document.getElementById('display-canvas')
    let MouseClick = [0,0,0]
    canvas.addEventListener('mouseup', async (e) => {
        console.log("aa")
        const selectEntity = true;
        const keepOldSelection = e.ctrlKey;
        const { entity, pickedPosition, pickedNormal } = await window.SDK3DVerse.engineAPI.castScreenSpaceRay(e.clientX, e.clientY, selectEntity, keepOldSelection);
        entity ? console.log('Selected entity', entity.getName()) : console.log('No entity selected');
        console.log(pickedPosition)
        // MouseClick[0] = pickedPosition[0]
        // MouseClick[1] = pickedPosition[1]
        // MouseClick[2] = pickedPosition[2]
        // console.log(MouseClick)

        const entityTemplate = await new window.SDK3DVerse.EntityTemplate();
        entityTemplate.attachComponent('label');
        entityTemplate.entityTemplate.local_transform.position[0] = pickedPosition[0]
        entityTemplate.entityTemplate.local_transform.position[1] = pickedPosition[1]
        entityTemplate.entityTemplate.local_transform.position[2] = pickedPosition[2]
        entityTemplate.instantiateEntity()
        console.log(entityTemplate.entityTemplate.local_transform)


    }, false);
    console.log(MouseClick)
}
