import * as THREE from 'three';
import { useState } from 'react';

let labelDisplay = null;

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

// --------------------- Partie Modal ---------------------


export function Open(){
    
    let label = window.SDK3DVerse.extensions.LabelDisplay.labelEntities
    console.log(window.SDK3DVerse.extensions.LabelDisplay.labelEntities)
    window.SDK3DVerse.extensions.LabelDisplay.onLabelClicked = function(label, viewport){
    }
    const camera = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()

    label.forEach(function(element){
   
        window.SDK3DVerse.extensions.LabelDisplay.onLabelClicked(element,camera[0])
    })
    
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



export function Camera(props) {
    
    const canvas = document.getElementById('display-canvas')
    
    canvas.addEventListener('wheel', async(event) => {

        const camera = await window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
        //const viewports = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
        // const camera = window.SDK3DVerse.engineAPI.cameraAPI.getCamera()
        
        if(camera.length !== 0){
                                
            let molette = 0 ;
            let speedcamera = speed(camera[0].getTransform().position[0],camera[0].getTransform().position[1],camera[0].getTransform().position[2]);
            
            const vector1 = new THREE.Vector3(camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]);
            const vector2 = new THREE.Vector3(0, 0, 0);
            const distanceToSphere = vector1.distanceTo(vector2);
            console.log(distanceToSphere);
            if(event.deltaY < 0)
            {
                if (distanceToSphere > 0.8 ){
                    molette = - 0.2;   
                } else {
                    molette = 0;
                }
            }

            else if(event.deltaY > 0)
            {
                if (distanceToSphere < 2. ){
                    molette = 0.2;  
                } else {
                    molette = 0;
                }
            }              
            window.SDK3DVerse.engineAPI.cameraAPI.travel(camera[0], [camera[0].getTransform().position[0] + molette * (camera[0].getTransform().position[0]), camera[0].getTransform().position[1] + molette * (camera[0].getTransform().position[1]),camera[0].getTransform().position[2] + molette *(camera[0].getTransform().position[2])]
                ,[camera[0].getTransform().orientation[0],camera[0].getTransform().orientation[1],camera[0].getTransform().orientation[2],camera[0].getTransform().orientation[3]]
                , speedcamera, 
                [camera[0].getTransform().position[0],camera[0].getTransform().position[1],camera[0].getTransform().position[2]], 
                [camera[0].getTransform().orientation[0],camera[0].getTransform().orientation[1],camera[0].getTransform().orientation[2],camera[0].getTransform().orientation[3]]);
                console.log(camera[0].getTransform().position[0]);
                console.log(camera[0].getTransform().position[1]);
                console.log(camera[0].getTransform().position[2]); 
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



let isVisible = false;
export async function Click(props) {

    const twoDPos = [0, 0];
    const position = [0, 0, 0];


    const canvas = document.getElementById('display-canvas')
    canvas.addEventListener('mouseup', async (e) => {
        
        const keepOldSelection = e.ctrlKey;

        const x = e.clientX + (canvas.width - canvas.clientWidth) / 2;
        const y = e.clientY + (canvas.height - canvas.clientHeight) / 2;
        const { entity, pickedPosition, pickedNormal } = await window.SDK3DVerse.engineAPI.castScreenSpaceRay(x, y, keepOldSelection);
        
        console.log(e);
        if (entity) {
            
            position[0] = pickedPosition[0];
            position[1] = pickedPosition[1];
            position[2] = pickedPosition[2];
            if (entity.getName() === "continents" || entity.getName() === "seas" ) {
                newElement.apply(null,position);
                isVisible = false;

            } else if (entity.getName() === "SM_Cube") {
                isVisible = true;

            }

        } else {
            console.log('No entity selected');
            isVisible = false;
        }
        twoDPos[0] = e.clientX;
        twoDPos[1] = e.clientY;

        
    }, false);
    console.log(labelDisplay);
}

//--------------------- Création d'élément ---------------------

async function newElement(x,y,z) {

    // let labelEntities = window.SDK3DVerse.extensions.LabelDisplay.labelEntities un tableau avec tout les labels

    const entityTemplate = new window.SDK3DVerse.EntityTemplate();

    //window.SDK3DVerse.extensions.LabelDisplay.labelIndex = 200 a modifier par la variable qu on recuperera
    entityTemplate.attachComponent('label');


    entityTemplate.entityTemplate.local_transform.position[0] = x;
    entityTemplate.entityTemplate.local_transform.position[1] = y;
    entityTemplate.entityTemplate.local_transform.position[2] = z;

    entityTemplate.instantiateEntity();

}

export function OpenModal() {

    return isVisible;
}

export function createImgTag() {
    let labelDisplay = window.SDK3DVerse.extensions.LabelDisplay;

    if (labelDisplay.labelEntities.length > 0)
    {
        for (var k = 0; k < labelDisplay.labelEntities.length; k++)
        {
            if (labelDisplay.labelEntities[k].children.length === 0)
            {
                // Create a new img element
                var newImg = document.createElement('img');

                // Set the source and alt attributes for the img
                newImg.src = '/img/bottle.svg';
                newImg.alt = 'Description of the image';

                // Add a class to the img
                newImg.classList.add('collect');
                labelDisplay.labelEntities[k].labelElement.appendChild(newImg);

                var newParagraph = document.createElement('p');

                // Set the text content of the paragraph
                newParagraph.textContent = '128';

                // Optionally, add a class to the paragraph
                newParagraph.classList.add('attendees');

                var newParagraphAtt = document.createElement('p');

                // Set the text content of the paragraph
                newParagraphAtt.textContent = 'participants';

                // Optionally, add a class to the paragraph
                newParagraphAtt.classList.add('attendees-txt');

                labelDisplay.labelEntities[k].labelElement.appendChild(newParagraph);
                labelDisplay.labelEntities[k].labelElement.appendChild(newParagraphAtt);
            }
        }
    }
}

//--------------------- Fonctions labels ---------------------
function normalize(arr = [0., 0., 0.]) {
    var normalizedArr = arr.slice();

    var norm = Math.sqrt(arr[0] ** 2 + arr[1] ** 2 + arr[2] ** 2)
    for (var k = 0; k < 3; k++)
    {
        normalizedArr[k] /=  norm;
    }
    return normalizedArr;
}

function scalarProduct(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

export function showVisibleLabelsOnly() {
    let camera = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports();

    labelDisplay = window.SDK3DVerse.extensions.LabelDisplay;

    var cameraVector = normalize([camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]]);
    var labelVector = [0., 0., 0.];

    var scalar = 0.;

    if(!labelDisplay.labelEntities.length) {
        return;
    }

   
    for (const entity of labelDisplay.labelEntities) {
        if (!entity || !entity.isAttached('local_transform') || !entity.labelElement) {
            console.error("Label element or its position is undefined.", entity);
            continue;  // Skip to the next iteration if the label element or its position is undefined
        }

        const { position } = entity.getComponent('local_transform');
        //let labelVector = normalize([position[0], position[1], position[2]]);
        let labelVector = normalize([...position]);
        scalar = scalarProduct(cameraVector, labelVector);

        //console.log("Scalar:", scalar);

        if (scalar > 0.0) {
            //labelDivs[j].style.visibility = "visible";
            entity.labelElement.domElement.style.visibility = "visible";
            //entity.setVisibility(true);
        } else if (scalar < 0.) {
            //labelDivs[j].style.visibility = "hidden";
            entity.labelElement.domElement.style.visibility = "hidden";
            //entity.setVisibility(false);
        }
    }
}