import * as THREE from 'three';
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

export function speed(positionx, positiony, positionz ){
    let positionabsolutex = positionx
    let positionabsolutey = positiony
    let positionabsolutez = positionz
    let speedcamera = 0
    if(positionx < 0){
        positionabsolutex = -positionx
    }
    if(positiony < 0){
        positionabsolutey = -positiony
    }
    if(positionz < 0){
        positionabsolutez = -positionz
    }
    let positionmax = Math.max(positionabsolutex, positionabsolutey, positionabsolutez);
    if (positionmax >= 4){

        const settings = {
            speed: 15,
            sensitivity: 1.5,
            damping: 0.65,
            angularDamping: 0.65
            
        }
        console.log(settings["speed"])
        window.SDK3DVerse.updateControllerSetting(settings);
        return speedcamera = settings["speed"]
        

    }
    else if (positionmax >= 3 ){

        const settings = {
            speed: 10,
            sensitivity: 1.5,
            damping: 0.65,
            angularDamping: 0.65
            
        }
        console.log(settings["speed"])
        window.SDK3DVerse.updateControllerSetting(settings);
        return speedcamera = settings["speed"]

    }

    else if(positionmax >= 2 ){

        const settings = {
            speed: 5,
            sensitivity: 1,
            damping: 0.65,
            angularDamping: 0.65
            
        }
        console.log(settings["speed"])
        window.SDK3DVerse.updateControllerSetting(settings);
        return speedcamera = settings["speed"]

    }

    else if(positionmax >= 1 ){

        const settings = {
            speed: 1,
            sensitivity: 0.5,
            damping: 0.65,
            angularDamping: 0.65
            
        }
        console.log(settings["speed"])
        window.SDK3DVerse.updateControllerSetting(settings);
        return speedcamera = settings["speed"]
    }

    else{

        const settings = {
            speed: 0.5,
            sensitivity: 0.1,
            damping: 0.65,
            angularDamping: 0.65
            
        }
        console.log(settings["speed"])
        window.SDK3DVerse.updateControllerSetting(settings);
        return speedcamera = settings["speed"]

    } 
}

export function distancecamera(positionx, positiony, positionz){
    let positionabsolutex = positionx
    let positionabsolutey = positiony
    let positionabsolutez = positionz
    
    if(positionx < 0){
        positionabsolutex = -positionx
    }
    if(positiony < 0){
        positionabsolutey = -positiony
    }
    if(positionz < 0){
        positionabsolutez = -positionz
    }
    let positionmax = Math.max(positionabsolutex, positionabsolutey, positionabsolutez);
    return positionmax
    
    
}



export async function Camera(props) {
    
    const canvas = document.getElementById('display-canvas')
    
    
        canvas.addEventListener('wheel', async(event) => {
            
           
            const camera = await window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
            
        //const viewports = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
        
        // const camera = window.SDK3DVerse.engineAPI.cameraAPI.getCamera()
            const test = window.SDK3DVerse.engineAPI.findEntitiesByEUID("3632abc5-1ff2-4f2f-9b9f-672d3bde66be")
            
            if(camera.length != 0){
                console.log(await camera[0].getTransform())
                
               
                                  
                    let molette = 0 
                    let speedcamera = speed(camera[0].getTransform().position[0],camera[0].getTransform().position[1],camera[0].getTransform().position[2])
                    let limit = distancecamera(camera[0].getTransform().position[0],camera[0].getTransform().position[1],camera[0].getTransform().position[2])
                    
                    const vector1 = new THREE.Vector3(camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]);
                    const vector2 = new THREE.Vector3(0, 0, 0);
                    const distanceToSphere = vector1.distanceTo(vector2);
                    if(event.deltaY < 0)
                    {
                        if (distanceToSphere > 0.8 ){
                            molette = - 0.2
                            
                        }
                        else{
                            molette = 0
                        }
                                         
                    }
    
                    else if(event.deltaY > 0)
                    {
                        molette =  0.2
                    }              
                    window.SDK3DVerse.engineAPI.cameraAPI.travel(camera[0], [camera[0].getTransform().position[0] + molette * (camera[0].getTransform().position[0]), camera[0].getTransform().position[1] + molette * (camera[0].getTransform().position[1]),camera[0].getTransform().position[2] + molette *(camera[0].getTransform().position[2])]
                        ,[camera[0].getTransform().orientation[0],camera[0].getTransform().orientation[1],camera[0].getTransform().orientation[2],camera[0].getTransform().orientation[3]]
                        , speedcamera, 
                        [camera[0].getTransform().position[0],camera[0].getTransform().position[1],camera[0].getTransform().position[2]], 
                        [camera[0].getTransform().orientation[0],camera[0].getTransform().orientation[1],camera[0].getTransform().orientation[2],camera[0].getTransform().orientation[3]])
                        console.log(camera[0].getTransform().position[0])
                        console.log(camera[0].getTransform().position[1])
                        console.log(camera[0].getTransform().position[2])   
                    

                
                
            }
            });
    
    // const camera = window.SDK3DVerse.engineAPI.cameraAPI.getCamera()

   
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