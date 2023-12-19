//--------------------------------------------------------------------------------------------------
import utils from './util.js';
import { vec3, mat4, quat } from 'gl-matrix';
// const { vec3, quat, mat4 } = glMatrix;

//--------------------------------------------------------------------------------------------------
// Globals loaded from public/index.html
// const SDK3DVerse                        = window.SDK3DVerse;
// const SDK3DVerse_ThreeJS_Ext            = window.SDK3DVerse_ThreeJS_Ext;
// const SDK3DVerse_ViewportDomOverlay_Ext = window.SDK3DVerse_ViewportDomOverlay_Ext;
// const SDK3DVerse_SplineDisplay_Ext      = window.SDK3DVerse_SplineDisplay_Ext;

//--------------------------------------------------------------------------------------------------
export default class TravelAnimation
{
    //----------------------------------------------------------------------------------------------
    constructor()
    {

        this.splineDisplayExt   = null;
        this.splines            = [];

        this.travels            = {};    }

    //----------------------------------------------------------------------------------------------
    async init()
    {
        // await window.SDK3DVerse.installExtension(SDK3DVerse_ThreeJS_Ext);
        // await window.SDK3DVerse.installExtension(SDK3DVerse_ViewportDomOverlay_Ext);
        // await SDK3DVerse.installExtension(SDK3DVerse_SplineDisplay_Ext);

        this.splineDisplayExt = window.SDK3DVerse.extensions.SplinesDisplay;
        this.splines          = this.splineDisplayExt.splines;

        // TODO: if the spline entities are hidden then the extension creates an empty
        //       ThreeJS curve so we cannot use it while the spline is hidden.
        //       So we keep a ref on the curve before hidding splines, but that means
        //       if the spline is updated then we'll not catch it...
        await this.showSplines();

        for(const spline of this.splines)
        {
            spline.curvePersistence = spline.curve;
        }

        await this.hideSplines();
    }

    //----------------------------------------------------------------------------------------------
    async hideSplines()
    {
        for(const spline of this.splines)
        {
            const { parentEntity } = spline;

            await window.SDK3DVerse.engineAPI.setEntityVisibility(parentEntity, true);
        }
    }

    //----------------------------------------------------------------------------------------------
    async showSplines()
    {
        for(const spline of this.splines)
        {
            const { parentEntity } = spline;

            await window.SDK3DVerse.engineAPI.setEntityVisibility(parentEntity, true);
        }
    }

    //--------------------------------------------------------------------------
    travel = (entity, destinationPosition, destinationOrientation, speed = 20) =>
    {
        const transform             = window.SDK3DVerse.utils.clone(entity.getGlobalTransform());
        const startPosition         = transform.position;
        const startOrientation      = transform.orientation;

        const startPositionVec3 = vec3.fromValues(...startPosition);
        const endPositionVec3   = vec3.fromValues(...destinationPosition);

        const startOrientationQuat = quat.fromValues(...startOrientation);
        const endOrientationQuat   = quat.fromValues(...destinationOrientation);

        const distance          = vec3.distance(startPositionVec3, endPositionVec3);
        const travelingDuration = distance > 0.001 ? (distance / speed) : 0.5;

        const intervalFrequency = 30;
        const stepCount         = travelingDuration * intervalFrequency;
        const stepInterval      = 1 / stepCount;


        let step                = 0.0;
        let currentPosition     = vec3.create();
        let currentOrientation  = quat.create();

        const smoothStep = function(a)
        {
            return ((a) * (a) * (a) * ((a) * ((a) * 6 - 15) + 10));
        }

        const entityRTID = entity.getID();

        this.stopTravel(entity);

        return new Promise((resolve, reject) =>
        {
            const interval = setInterval(() =>
                {
                    step        += stepInterval;
                    const alpha  = Math.min(smoothStep(step), 1.0);

                    vec3.lerp(currentPosition, startPositionVec3, endPositionVec3, alpha);
                    quat.slerp(currentOrientation, startOrientationQuat, endOrientationQuat, alpha);

                    entity.setGlobalTransform({
                        position    : Array.from(currentPosition),
                        orientation : Array.from(currentOrientation)
                    });

                    window.SDK3DVerse.engineAPI.propagateChanges();

                    if(alpha >= 1.0)
                    {
                        clearInterval(interval);
                        resolve();
                    }
                },
                1000 / intervalFrequency
            );

            this.travels[entityRTID] = { resolve, reject, interval };
        });
    };

    //--------------------------------------------------------------------------
    gotoSplineAndTravel = async (entity, spline, speed = 20, waitBeforeStart = 4 ) =>
    {
        this.isStopped          = false;

        const distance          = spline.curvePersistence.getLength();
        const travelingDuration = distance > 0.001 ? (distance / speed) : 0.5;
        const intervalFrequency = 30;
        const stepCount         = travelingDuration * intervalFrequency;
        const stepInterval      = 1 / stepCount;

        const { x: x0, y: y0, z: z0 } = spline.curvePersistence.getPointAt(0);
        const { x: x1, y: y1, z: z1 } = spline.curvePersistence.getPointAt(stepInterval);

        const direction = vec3.sub(vec3.create(), vec3.fromValues(x1, y1, z1), vec3.fromValues(x0, y0, z0));

        const firstSplineEntity      = spline.children[0];
        const destinationPosition    = firstSplineEntity.getGlobalTransform().position;
        const destinationOrientation = this.lookAtUpLocked(entity, destinationPosition, direction);

        const entityRTID         = entity.getID();
        const travel             = { isAsyncTask: true, iStopped: false };
        this.travels[entityRTID] = travel;

        await utils.sleep(waitBeforeStart * 1000);

        if(!travel.iStopped)
        {
            await this.travel(entity, destinationPosition, destinationOrientation, speed);
        }

        if(!travel.iStopped)
        {
            await this.travelOnSpline(entity, spline, speed);
        }

        delete this.travels[entityRTID];
    };

    //--------------------------------------------------------------------------
    travelOnSpline = (entity, spline, speed = 20) =>
    {
        const distance          = spline.curvePersistence.getLength();
        const travelingDuration = distance > 0.001 ? (distance / speed) : 0.5;

        const intervalFrequency = 30;
        const stepCount         = travelingDuration * intervalFrequency;
        const stepInterval      = 1 / stepCount;

        let step                = 0.0;
        let currentPosition     = vec3.create();

        const smoothStep = function(a)
        {
            return ((a) * (a) * (a) * ((a) * ((a) * 6 - 15) + 10));
        }

        const entityRTID = entity.getID();

        this.stopTravel(entity);

        return new Promise((resolve, reject) =>
        {
            const interval = setInterval(() =>
                {
                    step        += stepInterval;
                    const alpha = Math.min(smoothStep(step), 1.0);

                    const { x, y, z } = spline.curvePersistence.getPointAt(alpha);
                    currentPosition   = vec3.fromValues(x, y, z);

                    if(alpha !== 1)
                    {
                        // do not set last orientation on itself: avoid rotation glitch
                        //this.lookAtOld(entity, [x, y, z]);
                        const orientation = this.lookAtUpLocked(entity, [x, y, z]);
                        entity.setOrientation(Array.from(orientation));
                    }

                    entity.setGlobalTransform({
                        position: Array.from(currentPosition)
                    });

                    window.SDK3DVerse.engineAPI.propagateChanges();

                    if(alpha >= 1.0)
                    {
                        clearInterval(interval);
                        resolve();
                    }
                },
                1000 / intervalFrequency
            );

            this.travels[entityRTID] = { resolve, reject, interval };
        });
    };

    //--------------------------------------------------------------------------
    stopTravel(entity)
    {
        const entityRTID    = entity.getID();
        const travel        = this.travels[entityRTID];
        if(travel)
        {
            if(travel.interval)
            {
                clearInterval(travel.interval);
            }
            if(travel.resolve)
            {
                travel.resolve();
            }

            if(travel.isAsyncTask)
            {
                travel.isStopped = true;
            }
            else
            {
                delete this.travels[entityRTID];
            }
        }
    }

    //--------------------------------------------------------------------------
    lookAtOld(entity, target)
    {
        const targetPosition    = vec3.fromValues(...target);
        const globalPosition    = entity.getGlobalTransform().position;

        let direction   = vec3.create();
        vec3.sub(direction, targetPosition, globalPosition);
        vec3.normalize(direction, direction);

        const transformMatrix = entity.getGlobalMatrix();
        const forward         = vec3.fromValues(transformMatrix[8], transformMatrix[9], transformMatrix[10]);
        vec3.normalize(forward, forward);

        // Does not work
        /*
        const globalOrientation = entity.getGlobalTransform().orientation;
        let outQuat = quat.create();
        quat.rotationTo(outQuat, forward, direction);
        const finalOrientation = quat.multiply(quat.create(), globalOrientation, outQuat);
        return finalOrientation;
        */

        // roller coaster
        let outQuat     = quat.create();
        quat.rotationTo(outQuat, this.window.SDK3DVerse.utils.neutralDirection, direction);
        return  outQuat;
    }

    //--------------------------------------------------------------------------
    // lookAtUpLocked(entity, target, spline, alpha)
    lookAtUpLocked(entity, target, direction)
    {
        // using the tangent or the delta direction vector is more or less the same
        const targetPosition    = vec3.fromValues(...target);
        const globalPosition    = entity.getGlobalTransform().position;

        if(!direction)
        {
            direction = vec3.create();
            vec3.sub(direction, targetPosition, globalPosition);
        }

        vec3.normalize(direction, direction);

        /*
        const { x, y, z } = spline.curvePersistence.getTangentAt(alpha);
        let direction   = vec3.fromValues( x, y, z);
        vec3.normalize(direction, direction);
        */

        let outQuat     = quat.create();
        quat.rotationTo(outQuat, window.SDK3DVerse.utils.neutralDirection, direction);
        const rotationMatrix = mat4.fromQuat(mat4.create(), outQuat);

        const up         = vec3.fromValues(0, 1, 0);
        let   forward    = vec3.fromValues(rotationMatrix[8], rotationMatrix[9], rotationMatrix[10]);
        const right      = vec3.cross(vec3.create(), up, forward);
        vec3.normalize(right, right);

        forward = vec3.cross(vec3.create(), right, up);

        rotationMatrix[0]  = right[0];
        rotationMatrix[1]  = right[1];
        rotationMatrix[2]  = right[2];
        rotationMatrix[4]  = up[0];
        rotationMatrix[5]  = up[1];
        rotationMatrix[6]  = up[2];
        rotationMatrix[8]  = forward[0];
        rotationMatrix[9]  = forward[1];
        rotationMatrix[10] = forward[2];

        const finalOrientation = mat4.getRotation(quat.create(), rotationMatrix);
        quat.normalize(finalOrientation, finalOrientation);

        return finalOrientation;
        // roller coaster
        //return outQuat;
    }   
}
const travelAnimationInstance = new TravelAnimation();
window.travelAnimationInstance = travelAnimationInstance;