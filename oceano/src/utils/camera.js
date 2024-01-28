function slerpInterpolation(cartesian1, cartesian2, t, radius) {
    // Convertir les coordonnées cartésiennes en coordonnées polaires
    const polar1 = cartesianToPolar(cartesian1);
    const polar2 = cartesianToPolar(cartesian2);

    // Interpolation sphérique (slerp) des coordonnées polaires
    const resultPolar = slerp(polar1, polar2, t);

    // Convertir les coordonnées polaires interpolées en coordonnées cartésiennes
    const resultCartesian = polarToCartesian(resultPolar, radius);

    return resultCartesian;
}

// Fonction pour convertir les coordonnées cartésiennes en coordonnées polaires
function cartesianToPolar(cartesian) {
    const radius = Math.sqrt(cartesian.x * cartesian.x + cartesian.y * cartesian.y + cartesian.z * cartesian.z);
    const inclination = Math.acos(cartesian.y / radius);
    const azimuth = Math.atan2(cartesian.z, cartesian.x);
    return { radius, inclination, azimuth };
}

// Fonction pour convertir les coordonnées polaires en coordonnées cartésiennes
function polarToCartesian(polar, radius) {
    const x = radius * Math.sin(polar.inclination) * Math.cos(polar.azimuth);
    const y = radius * Math.cos(polar.inclination);
    const z = radius * Math.sin(polar.inclination) * Math.sin(polar.azimuth);
    return { x, y, z };
}

// Fonction d'interpolation sphérique (slerp) entre deux coordonnées polaires
function slerp(polar1, polar2, t) {
    const radius = polar1.radius + t * (polar2.radius - polar1.radius);
    const inclination = polar1.inclination + t * (polar2.inclination - polar1.inclination);
    const azimuth = polar1.azimuth + t * (polar2.azimuth - polar1.azimuth);

    return { radius, inclination, azimuth };
}

// Exemple d'utilisation
// const cartesianPoint1 = { x: 1, y: 0, z: 0 };
// const cartesianPoint2 = { x: 0, y: 1, z: 0 };
// const radius = 1;
// const t = 0.5;

// const interpolatedPoint = slerpInterpolation(cartesianPoint1, cartesianPoint2, t, radius);


travel(destinationPosition, destinationOrientation, speed, startPosition, startOrientation)
    {
        this.engineAPI.cameraAPI.streamer.inputRelay.suspendInputs();

        const intervalFrequency = 30;

        const currentCameraTransform =
        {
            position    : vec3.fromValues(...(startPosition || this.getTransform().position)),
            orientation : quat.fromValues(...(startOrientation || this.getTransform().orientation))
        };

        const destinationTransform =
        {
            position    : vec3.fromValues(...destinationPosition),
            orientation : quat.fromValues(...destinationOrientation)
        };

        const distance          = vec3.distance(currentCameraTransform.position, destinationTransform.position);
        const travelingDuration = distance > 0.001 ? (distance / speed) : 0.5;
        const stepCount         = travelingDuration * intervalFrequency;
        const stepInterval      = 1 / stepCount;

        let step                = 0.0;
        let currentPosition     = vec3.create();
        let currentOrientation  = quat.create();

        if(this.interval)
        {
            clearInterval(this.interval);
        }

        return new Promise(resolve =>
        {
            this.interval = setInterval(
                () =>
                {
                    step        += stepInterval;
                    const alpha = Math.min(this.smoothStep(step), 1.0);

                    // vec3.lerp(currentPosition, currentCameraTransform.position, destinationTransform.position, alpha);
                    // quat.slerp(currentOrientation, currentCameraTransform.orientation, destinationTransform.orientation, alpha);
                    currentOrientation = slerpInterpolation(currentCameraTransform.position, destinationTransform.position, alpha, );

                    this.setGlobalTransform(
                    {
                        position    : Array.from(currentPosition),
                        orientation : Array.from(currentOrientation)
                    });

                    if(alpha >= 1.0)
                    {
                        this.stopTravel();
                        resolve();

                        // Dirty fix to reset the orbit controller distance with the look at point.
                        const controllerType = this.getControllerType();
                        if(controllerType !== controller_type.orbit)
                        {
                            return;
                        }

                        setTimeout(() =>
                        {
                            this.setControllerType(controllerType);
                        }, 100);
                    }
                },
                1000 / intervalFrequency
            );
        });
    }