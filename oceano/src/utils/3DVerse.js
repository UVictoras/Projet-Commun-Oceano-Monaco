import * as THREE from 'three';
import Modal from'../components/modal.js'



import { useState } from 'react';
//--------------------- Game Loop ---------------------

let isVisible = false
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



// --------------------- Partie Mouvement camera ---------------------

export function norme(vector){
    let carre = vector.x ** 2 + vector.y ** 2 + vector.z ** 2
    let racine = Math.sqrt(carre);
    const vectornorme = new THREE.Vector3(vector.x / racine, vector.y / racine, vector.z / racine);
    return vectornorme
}

export function calculnorme(vector){
    let carre = vector.x ** 2 + vector.y ** 2 + vector.z ** 2
    let norme = Math.sqrt(carre);
    return norme
}
export function multiplication(vector, matrice){
    const math = require('mathjs');
    
    let para1 = vector.x *  math.subset(matrice, math.index(0, 0))+ vector.y *  math.subset(matrice, math.index(1, 0))+ vector.z * math.subset(matrice, math.index(2, 0))
    let para2 = vector.x *  math.subset(matrice, math.index(0, 1))+ vector.y *  math.subset(matrice, math.index(1, 1))+ vector.z * math.subset(matrice, math.index(2, 1))
    let para3 = vector.x *  math.subset(matrice, math.index(0, 2))+ vector.y *  math.subset(matrice, math.index(1, 2))+ vector.z * math.subset(matrice, math.index(2, 2))
    
    var newvector = new THREE.Vector3(para1, para2, para3);  
    return newvector
}

export function multiplicationVectorNorme(vector, scalaire){
    let vectorx1 = vector.x * scalaire 
    let vectory2 = vector.y * scalaire 
    let vectorz3 = vector.z * scalaire
    var newvector = new THREE.Vector3(vectorx1, vectory2, vectorz3);  
    return newvector 
}

export function produitScalaire(vecteur1, vecteur2) {
    let resultat = vecteur1.x * vecteur2.x + vecteur1.y * vecteur2.y + vecteur1.z * vecteur2.z 
    
    return resultat;
}

export function produitVectorielle(vecteur1, vecteur2){
    let vectorx1 = vecteur1.x *  vecteur2.y - vecteur1.y *vecteur2.x
    let vectory2 = vecteur1.y *  vecteur2.z - vecteur1.z *vecteur2.y
    let vectorz3 = vecteur1.z *  vecteur2.x - vecteur1.x *vecteur2.z
    var newvector = new THREE.Vector3(vectorx1, vectory2, vectorz3);  
    return newvector
}

export function calculVector(vecteur1, vecteur2){
    let vectorx1 = vecteur2.x - vecteur1.x 
    let vectory2 = vecteur2.y - vecteur1.y
    let vectorz3 = vecteur2.z - vecteur1.z
    var newvector = new THREE.Vector3(vectorx1, vectory2, vectorz3);  
    return newvector
}

export function multiplicationVector(vecteur1, vecteur2){
    let vectorx1 = vecteur2.x * vecteur1.x 
    let vectory2 = vecteur2.y * vecteur1.y
    let vectorz3 = vecteur2.z * vecteur1.z
    var newvector = new THREE.Vector3(vectorx1, vectory2, vectorz3);  
    return newvector
}


export function Mouvcamera(){
    const canvas = document.getElementById('display-canvas')
    
    
    canvas.addEventListener('mouseup', async(event) => {
        const math = require('mathjs');
        let labellist = window.SDK3DVerse.extensions.LabelDisplay.labelEntities
        console.log("5")
        const componentFilter = { mandatoryComponents : ['label'], forbiddenComponents : [] };
        const labelEntities = await window.SDK3DVerse.engineAPI.findEntitiesByComponents(componentFilter);
    
        const camera = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
        console.log(labelEntities[2])
        
            
            const vectorlabel = new THREE.Vector3(labelEntities[1].getComponents().local_transform.position[0], labelEntities[1].getComponents().local_transform.position[1], labelEntities[1].getComponents().local_transform.position[2]);
            
            const vectorcamera = new THREE.Vector3(camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]);
            var vector0x = new THREE.Vector3(1,0,0);
            
            var vectorV = new THREE.Vector3();
           


            
            vectorV = produitVectorielle(vector0x,vectorcamera)
            
            var vectorVnorme = new THREE.Vector3();
            vectorVnorme = norme(vectorV)
            
            

            
            let scalaire = produitScalaire(vectorVnorme, vector0x)
            
            // on en est là
            let test = (calculnorme(vectorV)* calculnorme(vector0x)) / scalaire
            console.log(test);
            test = ((test - 1) % 2 + 2) % 2 - 1;
            console.log(test);
            var angle1 = Math.acos(test);
            console.log(angle1)
            let para1 = Math.cos(angle1) + (1 - Math.cos(angle1))*(vectorVnorme.x)**2
            
            
            
            var matrice = math.matrix([[Math.cos(angle1) + (1 - Math.cos(angle1))*(vectorVnorme.x)**2 ,(1 - Math.cos(angle1))*(vectorVnorme.y * vectorVnorme.x ) + Math.sin(angle1) * vectorVnorme.z,  (1 - Math.cos(angle1))*(vectorVnorme.z * vectorVnorme.x ) - Math.sin(angle1) * vectorVnorme.y]
                                    ,[(1 - Math.cos(angle1))*(vectorVnorme.x * vectorVnorme.y ) - Math.sin(angle1) * vectorVnorme.z, Math.cos(angle1) + (1 - Math.cos(angle1))*(vectorVnorme.y)**2  , (1 - Math.cos(angle1))*(vectorVnorme.z * vectorVnorme.y ) + Math.sin(angle1) * vectorVnorme.x],
                                    [(1 - Math.cos(angle1))*(vectorVnorme.x * vectorVnorme.z ) + Math.sin(angle1) * vectorVnorme.y, (1 - Math.cos(angle1))*(vectorVnorme.y * vectorVnorme.z ) - Math.sin(angle1) * vectorVnorme.z, Math.cos(angle1) + (1 - Math.cos(angle1))*(vectorVnorme.z)**2]]);
            
            var vectorlabelprime = new THREE.Vector3(); 
            var vectorlabelprime = multiplication(vectorlabel, matrice)
            
            var vectorcameraprime = new THREE.Vector3(); 
            var vectorcameraprime = multiplication(vectorcamera, matrice)
            
            var vectorlabelprimenorme = new THREE.Vector3();
            vectorlabelprimenorme = norme(vectorlabelprime) 
           
            var vectorcamera2prime = new THREE.Vector3();
            let normecamera = calculnorme(vectorcameraprime)
            vectorcamera2prime = multiplicationVectorNorme(vectorlabelprimenorme, normecamera)
            

            var vectorcamerafullprime = new THREE.Vector3();
            vectorcamerafullprime = calculVector(vectorcameraprime, vectorcamera2prime )
            var etape1 = new THREE.Vector3();
            etape1 = multiplicationVectorNorme (vectorcameraprime, 2)
            
            var etape2 = new THREE.Vector3();
            etape2 =  multiplicationVector(etape1, vectorcamera2prime )
            
            // 2 * vectorcameraprime *  vectorcamera2prime
            var etape3 = ((calculnorme(vectorcameraprime)**2) + (calculnorme(vectorcamera2prime)**2) - (calculnorme(vectorcamerafullprime)**2)) 
            console.log(etape3)
            var etape4 = etape3 / etape2  
            var angle2 = Math.acos(etape4);
            var matriceOx = math.matrix([[1,0,0]
                                    ,[0, Math.cos(angle2) , Math.sin(angle2) ],
                                    [0, - Math.sin(angle2), Math.cos(angle2)]]);

            let resultat = multiplication(vectorcameraprime, matriceOx)
            var matricetransposé = math.matrix([[Math.cos(angle1) + (1 - Math.cos(angle1))*(vectorVnorme.x)**2 ,(1 - Math.cos(angle1))*(vectorVnorme.x * vectorVnorme.y ) - Math.sin(angle1) * vectorVnorme.z,  (1 - Math.cos(angle1))*(vectorVnorme.x * vectorVnorme.z ) + Math.sin(angle1) * vectorVnorme.y]
                                                ,[(1 - Math.cos(angle1))*(vectorVnorme.y * vectorVnorme.x ) + Math.sin(angle1) * vectorVnorme.z, Math.cos(angle1) + (1 - Math.cos(angle1))*(vectorVnorme.y)**2  , (1 - Math.cos(angle1))*(vectorVnorme.y * vectorVnorme.z ) - Math.sin(angle1) * vectorVnorme.x],
                                                [(1 - Math.cos(angle1))*(vectorVnorme.z * vectorVnorme.x ) - Math.sin(angle1) * vectorVnorme.y, (1 - Math.cos(angle1))*(vectorVnorme.z * vectorVnorme.y ) + Math.sin(angle1) * vectorVnorme.z, Math.cos(angle1) + (1 - Math.cos(angle1))*(vectorVnorme.z)**2]]);
            let position = multiplication(resultat, matricetransposé)
            
            
    })      
    
        
        
        
    
    

}


// --------------------- Partie Modal ---------------------


export function Open(){
    
    
    let label = window.SDK3DVerse.extensions.LabelDisplay.labelEntities
    console.log(window.SDK3DVerse.extensions.LabelDisplay.labelEntities)
    window.SDK3DVerse.extensions.LabelDisplay.onLabelClicked = function(label, viewport){
        console.log("5")
        
        
        
    
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
            console.log(camera[0])
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
            showVisibleLabelsOnly();
    
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

export function createImgTag() {
    var labelDivs = document.getElementsByClassName('label');

    if (labelDivs.length > 0)
    {
        for (var k = 0; k < labelDivs.length; k++)
        {
            if (labelDivs[k].children.length == 0)
            {
                // Create a new img element
                var newImg = document.createElement('img');

                // Set the source and alt attributes for the img
                newImg.src = '/img/bottle.svg';
                newImg.alt = 'Description of the image';

                // Add a class to the img
                newImg.classList.add('collect');
                labelDivs[k].appendChild(newImg);

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

                labelDivs[k].appendChild(newParagraph);
                labelDivs[k].appendChild(newParagraphAtt);
            }
        }
    }
}


async function normalize(arr = [0., 0., 0.]) {
    var normalizedArr = arr.slice();

    var norm = Math.sqrt(arr[0] ** 2 + arr[1] ** 2 + arr[2] ** 2)
    for (var k = 0; k < 3; k++)
    {
        normalizedArr[k] /=  norm;
    }
    return normalizedArr;
}

async function scalarProduct(arr1, arr2) {
    const scalar = await Promise.all([arr1, arr2]).then(([v1, v2]) => {
        return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
    });

    return parseFloat(scalar);
}

export async function showVisibleLabelsOnly() {

    let camera = await window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports();

    var labelDisplay = window.SDK3DVerse.extensions.LabelDisplay;

    if (!labelDisplay || !labelDisplay.labelEntities) {
        console.error("Label entities not available.");
        return;
    }

    const componentFilter = { mandatoryComponents : ['label'], forbiddenComponents : [] };
    const labelEntities = await window.SDK3DVerse.engineAPI.findEntitiesByComponents(componentFilter);

    var labelElements = await labelDisplay.labelEntities;

    var labelDivs = document.getElementsByClassName('label');

    var cameraVector = normalize([camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]]);

    var labelVector = [0., 0., 0.];

    var scalar;

    for (var j = 0; j < labelElements.length; j++) {
        if (!labelEntities[j] || !labelEntities[j].getComponents().local_transform.position) {
            console.error("Label element or its position is undefined.");
            continue;  // Skip to the next iteration if the label element or its position is undefined
        }

        let labelVector = await normalize([
            labelEntities[j].getComponents().local_transform.position[0],
            labelEntities[j].getComponents().local_transform.position[1],
            labelEntities[j].getComponents().local_transform.position[2]
        ]);
        scalar = await scalarProduct(cameraVector, labelVector);

        console.log("Scalar:", scalar);

        if (!isNaN(scalar) && scalar > 0. && labelEntities.length == labelDivs.length) {
            labelDivs[j].style.display = "flex";
        } else if (!isNaN(scalar) && scalar < 0. && labelEntities.length == labelDivs.length) {
            labelDivs[j].style.display = "hidden";
        }
    }
}