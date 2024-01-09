//--------------------- Game Loop ---------------------
import { useState } from 'react';
import * as THREE from 'three';
import TravelAnimation from './travelAnimation';
let labelDisplay = null;

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

export function norme(vector) {
    let carre = vector.x ** 2 + vector.y ** 2 + vector.z ** 2;
    let racine = Math.sqrt(carre);
    const vectornorme = new THREE.Vector3(vector.x / racine, vector.y / racine, vector.z / racine);
    return vectornorme;
}

export function calculnorme(vector) {
    let carre = vector.x ** 2 + vector.y ** 2 + vector.z ** 2;
    let norme = Math.sqrt(carre);
    return norme;
}
export function multiplication(vector, matrice) {
    const math = require('mathjs');

    let para1 = vector.x * math.subset(matrice, math.index(0, 0)) + vector.y * math.subset(matrice, math.index(1, 0)) + vector.z * math.subset(matrice, math.index(2, 0));
    let para2 = vector.x * math.subset(matrice, math.index(0, 1)) + vector.y * math.subset(matrice, math.index(1, 1)) + vector.z * math.subset(matrice, math.index(2, 1));
    let para3 = vector.x * math.subset(matrice, math.index(0, 2)) + vector.y * math.subset(matrice, math.index(1, 2)) + vector.z * math.subset(matrice, math.index(2, 2));

    var newvector = new THREE.Vector3(para1, para2, para3);
    return newvector;
}

export function multiplicationVectorNorme(vector, scalaire) {
    let vectorx1 = vector.x * scalaire;
    let vectory2 = vector.y * scalaire;
    let vectorz3 = vector.z * scalaire;
    var newvector = new THREE.Vector3(vectorx1, vectory2, vectorz3);
    return newvector;
}

export function produitScalaire(vecteur1, vecteur2) {
    let resultat = vecteur1.x * vecteur2.x + vecteur1.y * vecteur2.y + vecteur1.z * vecteur2.z;

    return resultat;
}

export function produitVectorielle(vecteur1, vecteur2) {
    let vectorx1 = vecteur1.x * vecteur2.y - vecteur1.y * vecteur2.x;
    let vectory2 = vecteur1.y * vecteur2.z - vecteur1.z * vecteur2.y;
    let vectorz3 = vecteur1.z * vecteur2.x - vecteur1.x * vecteur2.z;
    var newvector = new THREE.Vector3(vectorx1, vectory2, vectorz3);
    return newvector
}

export function calculVector(vecteur1, vecteur2) {
    let vectorx1 = vecteur2.x - vecteur1.x;
    let vectory2 = vecteur2.y - vecteur1.y;
    let vectorz3 = vecteur2.z - vecteur1.z;
    var newvector = new THREE.Vector3(vectorx1, vectory2, vectorz3);
    return newvector;
}

export function multiplicationVector(vecteur1, vecteur2) {
    let vectorx1 = vecteur2.x * vecteur1.x;
    let vectory2 = vecteur2.y * vecteur1.y;
    let vectorz3 = vecteur2.z * vecteur1.z;
    var newvector = new THREE.Vector3(vectorx1, vectory2, vectorz3);
    return newvector;
}


export function Mouvcamera() {
    const canvas = document.getElementById('display-canvas')


    canvas.addEventListener('mouseup', async (event) => {
        const math = require('mathjs');

        console.log("5")
        const componentFilter = { mandatoryComponents: ['label'], forbiddenComponents: [] };
        const labelEntities = await window.SDK3DVerse.engineAPI.findEntitiesByComponents(componentFilter);

        const camera = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
        console.log(labelEntities[2])

        const vectorlabel = new THREE.Vector3(labelEntities[0].getComponents().local_transform.position[0], labelEntities[0].getComponents().local_transform.position[1], labelEntities[0].getComponents().local_transform.position[2]);

        const vectorcamera = new THREE.Vector3(camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]);
        var vector0x = new THREE.Vector3(1, 0, 0);

        var vectorV = new THREE.Vector3();

        vectorV = produitVectorielle(vector0x, vectorcamera)

        var vectorVnorme = new THREE.Vector3();
        vectorVnorme = norme(vectorV)

        let scalaire = produitScalaire(vectorVnorme, vector0x)


        let test = scalaire / (calculnorme(vectorVnorme) * calculnorme(vector0x))

        var angle1 = Math.acos(test);

        var matrice = math.matrix([[Math.cos(angle1) + (1 - Math.cos(angle1)) * (vectorVnorme.x) ** 2, (1 - Math.cos(angle1)) * (vectorVnorme.y * vectorVnorme.x) + Math.sin(angle1) * vectorVnorme.z, (1 - Math.cos(angle1)) * (vectorVnorme.z * vectorVnorme.x) - Math.sin(angle1) * vectorVnorme.y]
            , [(1 - Math.cos(angle1)) * (vectorVnorme.x * vectorVnorme.y) - Math.sin(angle1) * vectorVnorme.z, Math.cos(angle1) + (1 - Math.cos(angle1)) * (vectorVnorme.y) ** 2, (1 - Math.cos(angle1)) * (vectorVnorme.z * vectorVnorme.y) + Math.sin(angle1) * vectorVnorme.x],
        [(1 - Math.cos(angle1)) * (vectorVnorme.x * vectorVnorme.z) + Math.sin(angle1) * vectorVnorme.y, (1 - Math.cos(angle1)) * (vectorVnorme.y * vectorVnorme.z) - Math.sin(angle1) * vectorVnorme.z, Math.cos(angle1) + (1 - Math.cos(angle1)) * (vectorVnorme.z) ** 2]]);

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
        vectorcamerafullprime = calculVector(vectorcameraprime, vectorcamera2prime)

        let etape1 = 2 * calculnorme(vectorcameraprime) * calculnorme(vectorcamera2prime)

        var etape2 = ((calculnorme(vectorcameraprime) ** 2) + (calculnorme(vectorcamera2prime) ** 2) - (calculnorme(vectorcamerafullprime) ** 2))

        var etape4 = etape2 / etape1

        var angle2 = Math.acos(etape4);

        var matriceOx = math.matrix([[1, 0, 0]
            , [0, Math.cos(angle2), Math.sin(angle2)],
        [0, - Math.sin(angle2), Math.cos(angle2)]]);

        var resultat = new THREE.Vector3();
        resultat = multiplication(vectorcameraprime, matriceOx)

        var matricetranspose = math.matrix([[Math.cos(angle1) + (1 - Math.cos(angle1)) * (vectorVnorme.x) ** 2, (1 - Math.cos(angle1)) * (vectorVnorme.x * vectorVnorme.y) - Math.sin(angle1) * vectorVnorme.z, (1 - Math.cos(angle1)) * (vectorVnorme.x * vectorVnorme.z) + Math.sin(angle1) * vectorVnorme.y]
            , [(1 - Math.cos(angle1)) * (vectorVnorme.y * vectorVnorme.x) + Math.sin(angle1) * vectorVnorme.z, Math.cos(angle1) + (1 - Math.cos(angle1)) * (vectorVnorme.y) ** 2, (1 - Math.cos(angle1)) * (vectorVnorme.y * vectorVnorme.z) - Math.sin(angle1) * vectorVnorme.x],
        [(1 - Math.cos(angle1)) * (vectorVnorme.z * vectorVnorme.x) - Math.sin(angle1) * vectorVnorme.y, (1 - Math.cos(angle1)) * (vectorVnorme.z * vectorVnorme.y) + Math.sin(angle1) * vectorVnorme.z, Math.cos(angle1) + (1 - Math.cos(angle1)) * (vectorVnorme.z) ** 2]]);

        var position = new THREE.Vector3();
        position = multiplication(resultat, matricetranspose)
        //window.SDK3DVerse.engineAPI.cameraAPI.travel(camera[0], [position.x, position.y,position.z]
        //,[camera[0].getTransform().orientation[0],camera[0].getTransform().orientation[1],camera[0].getTransform().orientation[2],camera[0].getTransform().orientation[3]]
        //, 1, 
        //[camera[0].getTransform().position[0],camera[0].getTransform().position[1],camera[0].getTransform().position[2]], 
        //[camera[0].getTransform().orientation[0],camera[0].getTransform().orientation[1],camera[0].getTransform().orientation[2],camera[0].getTransform().orientation[3]])
    })
}

// --------------------- Desactivé les touche ---------------------
export function desactiveKey() {
    var boutonGaucheEnfonce = false;
    var boutonDroitEnfonce = false;
    const canvas = document.getElementById('display-canvas')
    canvas.addEventListener('mousedown', async (event) => {
        const camera = await window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
        if (event.button === 0) {
            boutonGaucheEnfonce = true;
        } else if (event.button === 2) {
            boutonDroitEnfonce = true;
        }

        // Vérifiez si les deux boutons sont enfoncés
        if (boutonGaucheEnfonce && boutonDroitEnfonce) {
            console.log("cliquenefoncé")
            console.log(window.SDK3DVerse.actionMap.values)
            window.SDK3DVerse.engineAPI.cameraAPI.travel(camera[0], [camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]]
                , [camera[0].getTransform().orientation[0], camera[0].getTransform().orientation[1], camera[0].getTransform().orientation[2], camera[0].getTransform().orientation[3]]
                , 1,
                [camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]],
                [camera[0].getTransform().orientation[0], camera[0].getTransform().orientation[1], camera[0].getTransform().orientation[2], camera[0].getTransform().orientation[3]])
            console.log(camera[0].getTransform().position[0])

        }
    });
}

// --------------------- Partie Modal ---------------------

export function Open() {
    let label = window.SDK3DVerse.extensions.LabelDisplay.labelEntities
    console.log(window.SDK3DVerse.extensions.LabelDisplay.labelEntities)
    window.SDK3DVerse.extensions.LabelDisplay.onLabelClicked = function (label, viewport) {
    }
    const camera = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()

    label.forEach(function (element) {

        window.SDK3DVerse.extensions.LabelDisplay.onLabelClicked(element, camera[0])
    })
}

// --------------------- Partie Camera ---------------------

export function speed(positionx, positiony, positionz) {
    let positionabsolutex = positionx
    let positionabsolutey = positiony
    let positionabsolutez = positionz
    let speedcamera = 0
    if (positionx < 0) {
        positionabsolutex = -positionx
    }
    if (positiony < 0) {
        positionabsolutey = -positiony
    }
    if (positionz < 0) {
        positionabsolutez = -positionz
    }
    let positionmax = Math.max(positionabsolutex, positionabsolutey, positionabsolutez);

    if (positionmax >= 4) {

        const settings = {
            speed: 15,
            sensitivity: 1.5,
            damping: 0.65,
            angularDamping: 0.65
        }
        window.SDK3DVerse.updateControllerSetting(settings);
        return speedcamera = settings["speed"]
    }
    else if (positionmax >= 3) {
        const settings = {
            speed: 1.5,
            sensitivity: 0.4,
            damping: 0.65,
            angularDamping: 0.65
        }
        window.SDK3DVerse.updateControllerSetting(settings);
        return speedcamera = settings["speed"]
    }

    else if (positionmax >= 2) {

        const settings = {
            speed: 1,
            sensitivity: 0.2,
            damping: 0.65,
            angularDamping: 0.65
        }
        window.SDK3DVerse.updateControllerSetting(settings);
        return speedcamera = settings["speed"]
    }

    else if (positionmax >= 1) {
        const settings = {
            speed: 0.8,
            sensitivity: 0.15,
            damping: 0.65,
            angularDamping: 0.65
        }
        window.SDK3DVerse.updateControllerSetting(settings);
        return speedcamera = settings["speed"]
    }

    else {
        const settings = {
            speed: 0.5,
            sensitivity: 0.1,
            damping: 0.65,
            angularDamping: 0.65
        }
        window.SDK3DVerse.updateControllerSetting(settings);
        return speedcamera = settings["speed"];
    }
}

export function distancecamera(positionx, positiony, positionz) {
    let positionabsolutex = positionx;
    let positionabsolutey = positiony;
    let positionabsolutez = positionz;

    if (positionx < 0) {
        positionabsolutex = -positionx;
    }
    if (positiony < 0) {
        positionabsolutey = -positiony;
    }
    if (positionz < 0) {
        positionabsolutez = -positionz;
    }
    let positionmax = Math.max(positionabsolutex, positionabsolutey, positionabsolutez);
    return positionmax;


}

export function Camera(props) {

    const canvas = document.getElementById('display-canvas');

    canvas.addEventListener('wheel', async (event) => {

        const camera = await window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports();
        //const viewports = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
        // const camera = window.SDK3DVerse.engineAPI.cameraAPI.getCamera()

        if (camera.length !== 0) {

            let molette = 0;
            let speedcamera = speed(camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]);


            if (camera.length != 0) {

                let molette = 0;
                let speedcamera = speed(camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]);
                let limit = distancecamera(camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]);

                const vector1 = new THREE.Vector3(camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]);
                const vector2 = new THREE.Vector3(0, 0, 0);
                const distanceToSphere = vector1.distanceTo(vector2);
                if (event.deltaY < 0) {
                    if (distanceToSphere > 0.8) {
                        molette = - 0.2;
                    }
                    else {
                        molette = 0;
                    }
                }

                else if (event.deltaY > 0) {
                    if (distanceToSphere < 2) {
                        molette = 0.2
                    }
                    else {
                        molette = 0
                    }
                }
                await window.SDK3DVerse.engineAPI.cameraAPI.travel(camera[0], [camera[0].getTransform().position[0] + molette * (camera[0].getTransform().position[0]), camera[0].getTransform().position[1] + molette * (camera[0].getTransform().position[1]), camera[0].getTransform().position[2] + molette * (camera[0].getTransform().position[2])]
                    , [camera[0].getTransform().orientation[0], camera[0].getTransform().orientation[1], camera[0].getTransform().orientation[2], camera[0].getTransform().orientation[3]]
                    , speedcamera,
                    [camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]],
                    [camera[0].getTransform().orientation[0], camera[0].getTransform().orientation[1], camera[0].getTransform().orientation[2], camera[0].getTransform().orientation[3]])
                console.log(camera[0].getTransform().position[0])
                console.log(camera[0].getTransform().position[1])
                console.log(camera[0].getTransform().position[2])
            }
        } 
    })
}


export function myTravel(viewport, destinationPosition, destinationOrientation, speed, startPosition, startOrientation) {
    const glm = require('gl-matrix');
    const myTravelRebinded = window.SDK3DVerse.engineAPI.cameraAPI
    myTravelRebinded.streamer.inputRelay.suspendInputs();

    const intervalFrequency = 30;

    const currentCameraTransform =
    {
        position: glm.vec3.fromValues(...(startPosition || viewport.getTransform().position)),
        orientation: glm.quat.fromValues(...(startOrientation || viewport.getTransform().orientation))
    };

    const destinationTransform =
    {
        position: glm.vec3.fromValues(...destinationPosition),
        orientation: glm.quat.fromValues(...destinationOrientation)
    };

    const distance = glm.vec3.distance(currentCameraTransform.position, destinationTransform.position);
    const travelingDuration = distance > 0.001 ? (distance / speed) : 0.5;
    const stepCount = travelingDuration * intervalFrequency;
    const stepInterval = 1 / stepCount;

    let step = 0.0;
    let currentPosition = glm.vec3.create();
    let currentOrientation = glm.quat.create();

    if (myTravelRebinded.interval) {
        clearInterval(myTravelRebinded.interval);
    }

    return new Promise(resolve => {
        myTravelRebinded.interval = setInterval(
            () => {
                step += stepInterval;
                const alpha = Math.min(myTravelRebinded.smoothStep(step), 1.0);

                glm.vec3.lerp(currentPosition, currentCameraTransform.position, destinationTransform.position, alpha);
                glm.quat.slerp(currentOrientation, currentCameraTransform.orientation, destinationTransform.orientation, alpha);

                viewport.setGlobalTransform(
                    {
                        position: Array.from(currentPosition),
                        orientation: Array.from(currentOrientation)
                    });

                if (alpha >= 1.0) {
                    myTravelRebinded.stopTravel();
                    resolve();

                    // Dirty fix to reset the orbit controller distance with the look at point.
                    const controllerType = myTravelRebinded.getControllerType(viewport.id);
                    if (controllerType !== myTravelRebinded.controller_type.orbit) {
                        return;
                    }

                    setTimeout(() => {
                        myTravelRebinded.setControllerType(viewport.id, controllerType);
                    }, 100);
                }
            },
            1000 / intervalFrequency
        );
    });

};




export function DisabledInput() {
    // console.log(window.SDK3DVerse.actionMap.values)
    window.SDK3DVerse.actionMap.values["DISPLACE_DOWN"] = []
    window.SDK3DVerse.actionMap.values["DISPLACE_LEFT"] = []
    window.SDK3DVerse.actionMap.values["DISPLACE_RIGHT"] = []
    window.SDK3DVerse.actionMap.values["DISPLACE_UP"] = []
    window.SDK3DVerse.actionMap.propagate();
}
//--------------------- Récupération des Positions ---------------------

export function Modalll(props) {
    const canvas = document.getElementById('display-canvas')

    window.SDK3DVerse.extensions.LabelDisplay.onLabelClicked = function OpenModal(label, viewport) {
        console.log(label)
        console.log("a")
    }
}

// export function Test(){
//     window.SDK3DVerse.extensions.LabelDisplay.onLabelClicked = function OpenModal() {
//         console.log("aa")
//     }
// }

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
            if (entity.getName() === "continents" || entity.getName() === "seas") {
                newElement.apply(null, position);
                isVisible = false;
            } else if (entity.getName() === "SM_Cube") {
                isVisible = true;
            } else {
                console.log('No entity selected');
                isVisible = false
            }
            twoDPos[0] = e.clientX
            twoDPos[1] = e.clientY
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

async function newElement(x, y, z) {

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
    if (labelDisplay.labelEntities.length > 0) {
        for (var k = 0; k < labelDisplay.labelEntities.length; k++) {
            if (labelDisplay.labelEntities[k].children.length === 0) {
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
    for (var k = 0; k < 3; k++) {
        normalizedArr[k] /= norm;
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

    if (!labelDisplay.labelEntities.length) {
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
            entity.labelElement.clonedNodes.get(0).style.visibility = "visible";
        } else if (scalar < 0.) {
            entity.labelElement.clonedNodes.get(0).style.visibility = "hidden";
        }
    }
}

// export async function moveShip() {
//     const boat = await window.SDK3DVerse.engineAPI.findEntitiesByEUID('0d6a5ec3-974c-40f5-88af-f336e3e8074e')
//     const anim = new TravelAnimation();
//     await anim.init();
//     anim.gotoSplineAndTravel(boat[0], anim.splines[0], 0.1);
// }


export async function getAllLabelPosition(){
    return window.SDK3DVerse.extensions.LabelDisplay.labelEntities
}