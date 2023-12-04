
//--------------------- Game Loop ---------------------

export async function Anim(props) {

    const meshUUID = ['c77be900-43c3-4598-a6db-d67dd9a7585d', '6e8b13bd-cf97-4d39-b6f1-250cf134da54']

    const entity = await window.SDK3DVerse.engineAPI.findEntitiesByEUID('c410caff-7a0d-4f9c-88ca-0a9d54daf854');
    // console.log(entity)
    const component = entity[0].getComponent('mesh_ref').value

    // entity[0].setComponent('mesh_ref', entity[0].getComponent('mesh_ref').value = meshUUID[index])


    if (component === meshUUID[0]) {
        entity[0].setComponent('mesh_ref', entity[0].getComponent('mesh_ref').value = meshUUID[1])

    } else {
        entity[0].setComponent('mesh_ref', entity[0].getComponent('mesh_ref').value = meshUUID[0])
    }
}

// --------------------- Partie Camera ---------------------

export async function Camera(props) {
    const viewports = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
    // const camera = window.SDK3DVerse.engineAPI.cameraAPI.getCamera()
    console.log(viewports)

    const settings = {
        speed: 5,
        sensitivity: 1,
        damping: 0.65,
        angularDamping: 0.65
    };
    window.SDK3DVerse.updateControllerSetting(settings);
}

//--------------------- Récupération des Positions ---------------------

const position = [0,0,0]
export async function Click(props) {
    const canvas = document.getElementById('display-canvas')
    canvas.addEventListener('mouseup', async (e) => {
        const selectEntity = true;
        const keepOldSelection = e.ctrlKey;
        const { entity, pickedPosition, pickedNormal } = await window.SDK3DVerse.engineAPI.castScreenSpaceRay(e.clientX, e.clientY, selectEntity, keepOldSelection);
        if(entity){
            console.log('Selected entity', entity.getName())
            position[0] = pickedPosition[0]
            position[1] = pickedPosition[1]
            position[2] = pickedPosition[2]
            if(entity.getName() === "SM_Cube"){
                console.log("aaa");
                
            }else if(entity.getName() === "sphere"){
                newElement();
            }
            
        }else{
            console.log('No entity selected');
        }
    }, false);
}

//--------------------- Création d'élément ---------------------

async function newElement(props){
        console.log(position)
        const entityTemplate = new window.SDK3DVerse.EntityTemplate();
        entityTemplate.attachComponent('label')
        
        entityTemplate.entityTemplate.local_transform.position[0] = position[0]
        entityTemplate.entityTemplate.local_transform.position[1] = position[1]
        entityTemplate.entityTemplate.local_transform.position[2] = position[2]

        entityTemplate.instantiateEntity()
        const test = await window.SDK3DVerse.engineAPI.findEntitiesByEUID('583bd537-2e51-4be6-9055-83ff20857b23');

}