
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
    console.log("0")
    const canvas = document.getElementById('display-canvas')
    console.log("1")

        canvas.addEventListener('wheel', async(event) => {

            console.log("2")
            const camera = await window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()

        //const viewports = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()

        // const camera = window.SDK3DVerse.engineAPI.cameraAPI.getCamera()
            const test = window.SDK3DVerse.engineAPI.findEntitiesByEUID("3632abc5-1ff2-4f2f-9b9f-672d3bde66be")

            if(camera.length != 0){
                console.log(await camera[0].getTransform())
                let speed = 0

                if (camera[0].getTransform().position[2] >= 1.5){

                    const settings = {
                        speed: 10,
                        sensitivity: 1,
                        damping: 0.65,
                        angularDamping: 0.65

                    }
                    console.log(settings["speed"])
                    window.SDK3DVerse.updateControllerSetting(settings);
                    speed = settings["speed"]

                }

                else if(camera[0].getTransform().position[2] >= 1){

                    const settings = {
                        speed: 5,
                        sensitivity: 1,
                        damping: 0.65,
                        angularDamping: 0.65

                    }
                    console.log(settings["speed"])
                    window.SDK3DVerse.updateControllerSetting(settings);
                    speed = settings["speed"]

                }

                else if(camera[0].getTransform().position[2] >= 0.5){

                    const settings = {
                        speed: 1,
                        sensitivity: 1,
                        damping: 0.65,
                        angularDamping: 0.65

                    }
                    console.log(settings["speed"])
                    window.SDK3DVerse.updateControllerSetting(settings);
                    speed = settings["speed"]
                }

                else{

                    const settings = {
                        speed: 0.5,
                        sensitivity: 1,
                        damping: 0.65,
                        angularDamping: 0.65

                    }
                    console.log(settings["speed"])
                    window.SDK3DVerse.updateControllerSetting(settings);
                    speed = settings["speed"]

                }               
                let molette = 0 

                if(event.deltaY < 0)
                {
                    molette = - 0.1                  
                }

                else if(event.deltaY > 0)
                {
                    molette =  0.1
                }              
                window.SDK3DVerse.engineAPI.cameraAPI.travel(camera[0], [camera[0].getTransform().position[0] + molette * (camera[0].getTransform().position[0]), camera[0].getTransform().position[1] + molette * (camera[0].getTransform().position[1]),camera[0].getTransform().position[2] + molette *(camera[0].getTransform().position[2])]
                    ,[camera[0].getTransform().orientation[0],camera[0].getTransform().orientation[1],camera[0].getTransform().orientation[2],camera[0].getTransform().orientation[3]]
                    , speed, 
                    [camera[0].getTransform().position[0],camera[0].getTransform().position[1],camera[0].getTransform().position[2]], 
                    [camera[0].getTransform().orientation[0],camera[0].getTransform().orientation[1],camera[0].getTransform().orientation[2],camera[0].getTransform().orientation[3]])
                    console.log(camera[0].getTransform().position[2])   
                console.log(camera[0])
            }
            });


    
    
    
    
    //if (viewports != []){
        // if(test[0].cameraEntity.components.local_transform.position[2] <= 400){
        //     console.log("aa")
        // }
    //};
    
    // window.SDK3DVerse.updateControllerSetting(settings);
}


export function DisabledInput(){
    // console.log(window.SDK3DVerse.actionMap.values)
    window.SDK3DVerse.actionMap.values["DISPLACE_DOWN"] = []
    window.SDK3DVerse.actionMap.values["DISPLACE_LEFT"] = []
    window.SDK3DVerse.actionMap.values["DISPLACE_RIGHT"] = []
    window.SDK3DVerse.actionMap.values["DISPLACE_UP"] = []
    window.SDK3DVerse.actionMap.propagate();



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

        const { entity, pickedPosition, pickedNormal } = await window.SDK3DVerse.engineAPI.castScreenSpaceRay(e.clientX, e.clientY, keepOldSelection);

        if (entity) {
            console.log('Selected entity', entity.getName())
            console.log(27)
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

        
    }, false);
}

//--------------------- Création d'élément ---------------------

async function newElement(x,y,z) {

    // let labelEntities = window.SDK3DVerse.extensions.LabelDisplay.labelEntities un tableau avec tout les labels

    const entityTemplate = new window.SDK3DVerse.EntityTemplate();

    //window.SDK3DVerse.extensions.LabelDisplay.labelIndex = 200 a modifier par la variable qu on recuperera
    entityTemplate.attachComponent('label')


    entityTemplate.entityTemplate.local_transform.position[0] = x
    entityTemplate.entityTemplate.local_transform.position[1] = y
    entityTemplate.entityTemplate.local_transform.position[2] = z

    entityTemplate.instantiateEntity()

}


export function OpenModal() {

    return isVisible
}

async function showVisibleLabelsOnly() {
    const earth = await window.SDK3DVerse.engineAPI.findEntitiesByEUID('fb850887-d5c9-46af-9b74-a78e52f51c83')

    let camera = window.SDK3DVerse.engineAPI.cameraAPI.getCamera()

}