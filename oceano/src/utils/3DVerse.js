//--------------------- Game Loop ---------------------

import * as THREE from 'three';
import TravelAnimation from './travelAnimation';
import { glMatrix, vec3, quat, mat4 }   from 'gl-matrix';



let labelDisplay = null;
let isVisible = false

export const controller_type =
{
    none    : -1,
    fps     : 0,
    orbit   : 1,
    fixed   : 2,
    editor  : 4
};
export const neutralUp = vec3.fromValues(0.0, 1.0, 0.0)

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
    let racine = calculnorme(vector);
    return [vector[0] / racine, vector[1] / racine, vector[2] / racine];
}

export function calculnorme(vector) {
    let carre = vector[0] ** 2 + vector[1] ** 2 + vector[2] ** 2;
    return Math.sqrt(carre);
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
    let x = vector[0] * scalaire;
    console.log("x", x)
    let y = vector[1] * scalaire;
    let z = vector[2] * scalaire;
    return [x, y, z];
}

export function produitScalaire(vecteur1, vecteur2) {
    let resultat = vecteur1[0] * vecteur2[0] + vecteur1[1] * vecteur2[1] + vecteur1[2] * vecteur2[2];

    return resultat;
}

export function produitVectorielle(vecteur1, vecteur2) {
    let vectorx3 = vecteur1.x * vecteur2.y - vecteur1.y * vecteur2.x;
    let vectory1 = vecteur1.y * vecteur2.z - vecteur1.z * vecteur2.y;
    let vectorz2 = vecteur1.z * vecteur2.x - vecteur1.x * vecteur2.z;
    var newvector = new THREE.Vector3(vectory1, vectorz2, vectorx3);
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

export function slerpInterpolation(cartesianStart, cartesianEnd, t) {
    // Convertir les coordonnées cartésiennes en coordonnées polaires
    const polarStart = cartesianToPolar(cartesianStart);
    const polarEnd = cartesianToPolar(cartesianEnd);
    polarEnd.radius = polarStart.radius;

    // Interpolation sphérique (slerp) des coordonnées polaires
    const resultPolar = slerp(polarStart, polarEnd, t);

    // Convertir les coordonnées polaires interpolées en coordonnées cartésiennes
    const resultCartesian = polarToCartesian(resultPolar);

    return resultCartesian;
}

// Fonction pour convertir les coordonnées cartésiennes en coordonnées polaires
export function cartesianToPolar(cartesian) {
    const radius = Math.sqrt(cartesian.x * cartesian.x + cartesian.y * cartesian.y + cartesian.z * cartesian.z);
    const inclination = Math.acos(cartesian.y / radius);
    const azimuth = Math.atan2(cartesian.z, cartesian.x);
    return { radius, inclination, azimuth };
}

// Fonction pour convertir les coordonnées polaires en coordonnées cartésiennes
export function polarToCartesian(polar) {
    const {radius, inclination, azimuth} = polar;
    const x = radius * Math.sin(inclination) * Math.cos(azimuth);
    const y = radius * Math.cos(inclination);
    const z = radius * Math.sin(inclination) * Math.sin(azimuth);
    return { x, y, z };
}

// Fonction d'interpolation sphérique (slerp) entre deux coordonnées polaires
export function slerp(polar1, polar2, t) {
    const radius = polar1.radius + t * (polar2.radius - polar1.radius);
    const inclination = polar1.inclination + t * (polar2.inclination - polar1.inclination);
    const azimuth = polar1.azimuth + t * (polar2.azimuth - polar1.azimuth);

    return { radius, inclination, azimuth };
}

export function labelTravel(destinationPosition, speed, startPosition, startOrientation) {
    const camera = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports()
    camera[0].engineAPI.cameraAPI.streamer.inputRelay.suspendInputs();

    const intervalFrequency = 30;

    const currentCameraTransform =
    {
        position    : vec3.fromValues(...(startPosition || camera[0].getTransform().position))
        // orientation : quat.fromValues(...(startOrientation || camera[0].getTransform().orientation))
    };
    console.log("currentCameraTransform", currentCameraTransform)

    const destinationTransform =
    {
        position    : vec3.fromValues(...destinationPosition)
        // orientation : quat.fromValues(...destinationOrientation)
    };

    const distance          = vec3.distance(currentCameraTransform.position, destinationTransform.position);
    const travelingDuration = distance > 0.001 ? (distance / speed) : 0.5;
    const stepCount         = travelingDuration * intervalFrequency;
    const stepInterval      = 1 / stepCount;

    let step                = 0.0;
    let currentPosition     = vec3.create();
    let currentOrientation  = quat.create();

    if(camera[0].interval)
    {
        clearInterval(camera[0].interval);
    }

    return new Promise(resolve =>
    {
        let [x, y, z] = currentCameraTransform.position;
        const camStartPosition = {x, y, z};
        [x, y, z] = destinationTransform.position;
        const camEndPosition = {x, y, z};
        camera[0].interval = setInterval(
            () =>
            {
                step        += stepInterval;
                const alpha = Math.min(camera[0].smoothStep(step), 1.0);

                // vec3.lerp(currentPosition, currentCameraTransform.position, destinationTransform.position, alpha);
                // quat.slerp(currentOrientation, currentCameraTransform.orientation, destinationTransform.orientation, alpha);
                
                currentPosition = slerpInterpolation(camStartPosition, camEndPosition, alpha);
                console.log("currentPosition", currentPosition)

                const {x, y, z} = currentPosition;
                const resultOrientation = computeOrientationToTarget([0, 0, 0], [x, y, z]);
                currentOrientation = resultOrientation.targetOrientation

                //quat.slerp(currentOrientation, currentCameraTransform.orientation, destinationTransform.orientation, alpha)
                console.log("currentOrientation", currentOrientation)

                
                camera[0].setGlobalTransform(
                {
                    position    : [x, y, z],
                    orientation : Array.from(currentOrientation)
                });

                if(alpha >= 1.0)
                {
                    camera[0].stopTravel();
                    resolve();

                    // Dirty fix to reset the orbit controller distance with the look at point.
                    const controllerType = camera[0].getControllerType();
                    if(controllerType !== controller_type.orbit)
                    {
                        return;
                    }

                    setTimeout(() =>
                    {
                        camera[0].setControllerType(controllerType);
                    }, 100);
                }
            },
            1000 / intervalFrequency
        );
    });
}

export function computeOrientationToTarget(target, position) {
    const targetPosition    = vec3.fromValues(...target);
    const globalPosition    = vec3.fromValues(...position);

    let direction   = vec3.create();
    vec3.sub(direction, globalPosition, targetPosition);
    vec3.normalize(direction, direction);

    let rightVector         = vec3.create();
    vec3.cross(rightVector, direction, neutralUp);
    // vec3.cross(rightVector, direction, SDK3DVerse_Utils.neutralUp);

    let upVector            = vec3.create();
    vec3.cross(upVector, rightVector, direction);

    let targetToMat         = mat4.create();
    mat4.targetTo(targetToMat, globalPosition, targetPosition, upVector);

    let targetOrientation   = quat.create();
    mat4.getRotation(targetOrientation, targetToMat);

    return {
        targetOrientation : Array.from(targetOrientation),
        direction
    };
}

export function Mouvcamera() {
    // const canvas = document.getElementById('display-canvas')


//     canvas.addEventListener('mouseup', async (event) => {
       
//         const componentFilter = { mandatoryComponents: ['label'], forbiddenComponents: [] };
//         const labelEntities = await window.SDK3DVerse.engineAPI.findEntitiesByComponents(componentFilter);
//         // const camera = window.SDK3DVerse.engineAPI.cameraAPI.getActiveViewports();

//         let labelPosition = labelEntities[0].getGlobalTransform().position;
//         console.log("labelPosition", labelPosition);
//         let test = norme(labelPosition);
//         console.log("test", test);
//         let test2 = multiplicationVectorNorme(test, 0.5);
//         console.log("test2", test2);
//         for(var i = 0; i < 3; i++){
//             labelPosition[i] += test2[i]
//         }
//         console.log("labelPosition", labelPosition);
//         //const destinationPosition = [0, 0, -1.2]
//         // const { targetOrientation } = computeOrientationToTarget([0, 0, 0], destinationPosition);
//         // console.log("targetOrientation", targetOrientation)
//         // labelTravel(labelPosition, 0.5);





//         /*----------  Test cam ------------------- */
//         // const math = require('mathjs');
//         // console.log(labelEntities[2])
//         // const target = [0,0,0]
//         // const cam = [0, 0.5005945563316345, 0.5005945563316345]
//         // const targetPosition    = vec3.fromValues(...target);
//         // const globalPosition    = vec3.fromValues(...cam);
//         // let direction   = vec3.create();
//         // vec3.sub(direction, globalPosition, targetPosition);
//         // vec3.normalize(direction, direction);
//         // let rightVector         = vec3.create();
//         // vec3.cross(rightVector, direction, SDK3DVerse_Utils.neutralUp);

//         // let upVector            = vec3.create();
//         // vec3.cross(upVector, rightVector, direction);

//         // let targetToMat         = mat4.create();
//         // mat4.targetTo(targetToMat, globalPosition, targetPosition, upVector);

//         // let targetOrientation   = quat.create();
//         // mat4.getRotation(targetOrientation, targetToMat);
    
//         // console.log(Array.from(targetOrientation))
//         // console.log(Array.from(camera[0].getTransform().orientation))

//         /*----------  Ancien code------------------- */

//         // const vectorlabel = [labelEntities[0].getComponents().local_transform.position[0], labelEntities[0].getComponents().local_transform.position[1], labelEntities[0].getComponents().local_transform.position[2]];

//         // const vectorcamera = [camera[0].getTransform().position[0], camera[0].getTransform().position[1], camera[0].getTransform().position[2]];
//         // console.log(vectorcamera)

        
//         // const vectorcameranorme = norme(vectorcamera);

//         // console.log(vectorcameranorme)
//         // var vectorlabelanorme = norme(vectorlabel)
//         // console.log(vectorlabelanorme)
        

//         // var vectore1 = math.cross(vectorcameranorme, vectorlabelanorme)
//         // console.log(vectore1)
//         // let scalaire = math.dot(vectorcameranorme,vectorlabelanorme)
//         // let sin = Math.asin(scalaire);
//         // let scalaire2 = math.dot(vectorcameranorme, vectorcameranorme )
//         // let angle = Math.acos(scalaire2);
//         // if (sin < 0){
//         //     angle*= -1
            
//         // }
//         // console.log(angle)
//         // if(angle != 0){
//         //     var matriceMBT = math.matrix([[vectore1[0],vectore1[1],vectore1[2]],[vectorcameranorme[0],vectorcameranorme[1],vectorcameranorme[2]],[vectorlabelanorme[0],vectorlabelanorme[1],vectorlabelanorme[2]]])
//         //     var matriceMB = math.matrix([[vectore1[0],vectorcameranorme[0],vectorlabelanorme[0]],[vectore1[1],vectorcameranorme[1],vectorlabelanorme[1]],[vectore1[2],vectorcameranorme[2],vectorlabelanorme[2]]])

//         //     var matrice = math.matrix([[1,0,0],[0,Math.cos(angle),Math.sin(angle)],[0,-Math.sin(angle),Math.cos(angle)]])
//         //     var matriceFinale = math.multiply(matriceMB,matrice,matriceMBT )
//         //     console.log(matriceFinale)
            
//         //     var vectorcameraprim = math.multiply(math.matrix([vectorcamera[0], vectorcamera[1], vectorcamera[2]]) , matriceFinale)
//         //     console.log(vectorcameraprim)
//         //     console.log(math.subset(vectorcameraprim, math.index(0)))

//             // var normeVectorCameraPrim = norme(vectorcameraprim)
//             // var vectorD = [0, 0, 1]
//             // var vectorE1bis = math.cross(vectorD, normeVectorCameraPrim)
//             // var vectorE2bis = normeVectorCameraPrim
//             // var vectorE3bis = vectorD
//             // let scalaire3 = math.dot(vectorD,vectorE2bis)
//             // let sin2 = Math.asin(scalaire3);
//             // let scalaire4 = math.dot(vectorD, vectorE3bis )
//             // let angle2 = Math.acos(scalaire2);
//             // if (sin2 < 0){
//             //     angle2*= -1
//             // }
            
//             // window.SDK3DVerse.engineAPI.cameraAPI.travel(camera[0], [math.subset(vectorcameraprim, math.index(0)), math.subset(vectorcameraprim, math.index(1)),math.subset(vectorcameraprim, math.index(2))]
//             // ,[camera[0].getTransform().orientation[0],camera[0].getTransform().orientation[1],camera[0].getTransform().orientation[2],camera[0].getTransform().orientation[3]]
//             // , 1)
//         // }
//     })
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
        console.log("test")
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
            speed: 1.2,
            sensitivity: 0.2,
            damping: 0.65,
            angularDamping: 0.65
        }
        window.SDK3DVerse.updateControllerSetting(settings);
        return speedcamera = settings["speed"]
    }

    else if (positionmax >= 1) {
        const settings = {
            speed: 1.1,
            sensitivity: 0.15,
            damping: 0.65,
            angularDamping: 0.65
        }
        window.SDK3DVerse.updateControllerSetting(settings);
        return speedcamera = settings["speed"]
    }

    else {
        const settings = {
            speed: 1,
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

export async function Click(callback) {
    const handleMouseUp = async (e) => {
        const canvas = document.getElementById('display-canvas');
        const keepOldSelection = e.ctrlKey;

        const x = e.clientX + (canvas.width - canvas.clientWidth) / 2;
        const y = e.clientY + (canvas.height - canvas.clientHeight) / 2;
        const { entity, pickedPosition, pickedNormal } = await window.SDK3DVerse.engineAPI.castScreenSpaceRay(x, y, keepOldSelection);

        if (entity) {
            const position = [pickedPosition[0], pickedPosition[1], pickedPosition[2]];

            if (entity.getName() === "continents" || entity.getName() === "seas") {
                // newElement.apply(null, position);
                console.log("new ping")
            }

            // Notify that the function has been used
            callback(position);
        }

        // Remove the event listener after use
        canvas.removeEventListener('mouseup', handleMouseUp, false);
    };

    // Attach the event listener
    const canvas = document.getElementById('display-canvas');
    canvas.addEventListener('mouseup', handleMouseUp, false);
}
//     // const twoDPos = [0, 0];
//     // const position = [0, 0, 0];

//     const canvas = document.getElementById('display-canvas')
//     canvas.addEventListener('mouseup', async (e) => {

//         const keepOldSelection = e.ctrlKey;

//         const x = e.clientX + (canvas.width - canvas.clientWidth) / 2;
//         const y = e.clientY + (canvas.height - canvas.clientHeight) / 2;
//         const { entity, pickedPosition, pickedNormal } = await window.SDK3DVerse.engineAPI.castScreenSpaceRay(x, y, keepOldSelection);

//         if (entity) {

//             position[0] = pickedPosition[0];
//             position[1] = pickedPosition[1];
//             position[2] = pickedPosition[2];
//             if (entity.getName() === "continents" || entity.getName() === "seas") {
//                 // newElement.apply(null, position);
//             }
//         }
//                 // isVisible = false;
//             // } else if (entity.getName() === "SM_Cube") {
//             //     isVisible = true;
//         //     } else {
//         //         console.log('No entity selected');
//         //         isVisible = false
//         //     }
//         //     twoDPos[0] = e.clientX
//         //     twoDPos[1] = e.clientY
//         // } else {
//         //     console.log('No entity selected');
//         //     isVisible = false;
//         // }
//         // twoDPos[0] = e.clientX;
//         // twoDPos[1] = e.clientY;
//     }, false);
// }

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

// export function updateLabel(entity, event) {
//     var labelComponent          = entity.getComponent('label');

//     var containerElement        = document.createElement('div');
//     containerElement.className  = 'label-container';

//     var labelElement            = document.createElement('div');
//     labelElement.className      = 'label';
//     labelElement.innerText      = '';

//     containerElement.appendChild(labelElement);

//     var newImg = document.createElement('img');
//     newImg.src = event.Logo;
//     newImg.alt = 'Description of the image';
//     newImg.classList.add('collect');

//     containerElement.appendChild(newImg);

//     var newParagraph = document.createElement('p');
//     newParagraph.textContent = event.NbUsers;
//     newParagraph.classList.add('attendees');

//     containerElement.appendChild(newParagraph);

//     var newParagraphAtt = document.createElement('p');
//     newParagraphAtt.textContent = 'participants';
//     newParagraphAtt.classList.add('attendees-txt');

//     containerElement.appendChild(newParagraphAtt);

//     var titleElement            = document.createElement('div');
//     titleElement.className      = 'label-title';
//     titleElement.innerText      = labelComponent.title;
    
//     containerElement.appendChild(titleElement);
    
//     containerElement.onmousedown    = (e, viewport) => this.onLabelClicked(entity, viewport);

//     const domElement                = this.domRenderer.createDomElement(containerElement);
//     domElement.renderedTitle        = labelComponent.title;

//     return domElement;
// }


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