
//--------------------- Game Loop ---------------------


export async function Anim(props) {

    // const meshUUID = ['c77be900-43c3-4598-a6db-d67dd9a7585d', '6e8b13bd-cf97-4d39-b6f1-250cf134da54']

    // const entity = await window.SDK3DVerse.engineAPI.findEntitiesByEUID('fb850887-d5c9-46af-9b74-a78e52f51c83');
    // // console.log(entity)
    // const component = entity[0].getComponent('mesh_ref').value

    // // entity[0].setComponent('mesh_ref', entity[0].getComponent('mesh_ref').value = meshUUID[index])


    // if (component === meshUUID[0]) {
    //     entity[0].setComponent('mesh_ref', entity[0].getComponent('mesh_ref').value = meshUUID[1])

    // } else {
    //     entity[0].setComponent('mesh_ref', entity[0].getComponent('mesh_ref').value = meshUUID[0])
    // }
}

// --------------------- Partie Camera ---------------------

export async function Camera(props) {
    const viewports = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
    
    // const camera = window.SDK3DVerse.engineAPI.cameraAPI.getCamera()
    const test = window.SDK3DVerse.engineAPI.findEntitiesByEUID("3632abc5-1ff2-4f2f-9b9f-672d3bde66be")
    
    const entity = viewports[0].cameraEntity.components.local_transform.position


    const transform = await window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()

    console.log(await transform[0].getTransform())

    console.log(transform[0].getTransform().position[2])


    const settings = {
        speed: 0.1,
        sensitivity: 1,
        damping: 0.65,
        angularDamping: 0.65
        
    }
    
    if(transform[0].getTransform().position[2] < 3){
        window.SDK3DVerse.updateControllerSetting(settings);

    }
    

    if (viewports != []){
        // if(test[0].cameraEntity.components.local_transform.position[2] <= 400){
        //     console.log("aa")
        // }
    };




    
    // window.SDK3DVerse.updateControllerSetting(settings);


}

//--------------------- Récupération des Positions ---------------------

const position = [0, 0, 0]
let isVisible = false
const twoDPos = [0, 0]
export async function Click(props) {
    const canvas = document.getElementById('display-canvas')
    canvas.addEventListener('mouseup', async (e) => {
        const selectEntity = true;
        const keepOldSelection = e.ctrlKey;
        const { entity, pickedPosition, pickedNormal } = await window.SDK3DVerse.engineAPI.castScreenSpaceRay(e.clientX, e.clientY, selectEntity, keepOldSelection);
        if (entity) {
            console.log('Selected entity', entity.getName())
            position[0] = pickedPosition[0]
            position[1] = pickedPosition[1]
            position[2] = pickedPosition[2]
            if (entity.getName() === "Globe" || entity.getName() == "Extract3" ) {
                newElement();
                isVisible = false

            } else if (entity.getName() === "SM_Cube") {
                isVisible = true

            }

        } else {
            console.log('No entity selected');
            isVisible = false
        }
        twoDPos[0] = e.clientX
        twoDPos[1] = e.clientY
    }, false);
}

//--------------------- Création d'élément ---------------------

async function newElement(props) {

    const entityTemplate = new window.SDK3DVerse.EntityTemplate();
    entityTemplate.attachComponent('label')
    
    entityTemplate.entityTemplate.local_transform.position[0] = position[0]
    entityTemplate.entityTemplate.local_transform.position[1] = position[1]
    entityTemplate.entityTemplate.local_transform.position[2] = position[2]
    console.log(entityTemplate)
    entityTemplate.instantiateEntity()
    console.log(entityTemplate)
    // const test = await window.SDK3DVerse.engineAPI.findEntitiesByEUID('1400fde3-a1b6-4e6b-a772-8aca119ef758')
    // const label = test[0].getComponent('label');
    // console.log(label)
    // label.setDisplayState(true)
    const test = await window.SDK3DVerse.engineAPI.findEntitiesByEUID('166009d9-1d03-4033-923d-b4cc2ef87c6f')
    
    // console.log(test[0].labelIndex)



}

export function OpenModal() {

    return isVisible
}