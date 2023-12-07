
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
    
    // const camera = window.SDK3DVerse.engineAPI.cameraAPI.getCamera()


    const transform = await window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
    const globe = await window.SDK3DVerse.engineAPI.findEntitiesByEUID('fb850887-d5c9-46af-9b74-a78e52f51c83');
    console.log("aa")
    
    if(transform.length != 0){
        // console.log(globe[0].components.local_transform.position[1])
        // console.log(await transform[0].getTransform())

        // console.log(transform[0].getTransform().position[2])
        

        // console.log(1 / Math.log((transform[0].getTransform().position[1] - globe[0].components.local_transform.position[1]) + 0, 0))
        console.log (Math.abs(1 / Math.log((transform[0].getTransform().position[1] - globe[0].components.local_transform.position[1]) + 0, 0)))
        const settings = {
            speed: Math.abs(1 / Math.log((transform[0].getTransform().position[1] - globe[0].components.local_transform.position[1]) + 0, 0)),
            sensitivity: 1,
            damping: 0.65,
            angularDamping: 0.65
            
        }
        
        window.SDK3DVerse.updateControllerSetting(settings);
        // if(transform[0].getTransform().position[2] < 3){
            
    
        // }
    }






    // if (viewports != []){
    //     // if(test[0].cameraEntity.components.local_transform.position[2] <= 400){
    //     //     console.log("aa")
    //     // }
    // };



}

//--------------------- Récupération des Positions ---------------------



let isVisible = false
export async function Click(props) {
    const twoDPos = [0, 0]
    const position = [0, 0, 0]
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
                newElement.apply(null,position);
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

        return isVisible
    }, false);
}

//--------------------- Création d'élément ---------------------

async function newElement(x,y,z) {
    const entityTemplate = new window.SDK3DVerse.EntityTemplate();
    entityTemplate.attachComponent('label')
    
    entityTemplate.entityTemplate.local_transform.position[0] = x
    entityTemplate.entityTemplate.local_transform.position[1] = y
    entityTemplate.entityTemplate.local_transform.position[2] = z
    // console.log(entityTemplate)

    const clickedPosition = window.SDK3DVerse.engineAPI.cameraAPI.computeLocalPositionInCanvas(x, y);
    const hoveredViewport = window.SDK3DVerse.engineAPI.cameraAPI.getHoveredViewport(clickedPosition);
    // const offset = hoveredViewport.getOffset();
    console.log(hoveredViewport);
    // window.SDK3DVerse.extensions.LabelDisplay.createLabelElement(200,entityTemplate)
    entityTemplate.instantiateEntity()
    // const test = await window.SDK3DVerse.engineAPI.findEntitiesByEUID('1400fde3-a1b6-4e6b-a772-8aca119ef758')
    // const label = test[0].getComponent('label');
    // console.log(label)
    // label.setDisplayState(true)

    
    // console.log(test[0].labelIndex)



}

export function OpenModal() {

    return isVisible
}