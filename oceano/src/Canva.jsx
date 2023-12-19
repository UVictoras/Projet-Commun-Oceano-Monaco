import { AnimationShip, Camera, Click } from './utils/3DVerse';
import { useCallback, useEffect, useState } from 'react';
import { useScript } from '@uidotdev/usehooks';
import SDK3DVerse_LabelDisplay_Ext from './sdk_extension/LabelDisplay'
import { useFrameLoop, frameLoop } from "./utils/FrameLoop.js";
import { showVisibleLabelsOnly } from "./utils/3DVerse.js";

export const Canvas = (props) => {
    const status = useScript(
        `https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse.js`,

        {
            removeOnUnmount: false,
        }
    );
    const dom = useScript(
        `https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse_ViewportDomOverlay_Ext.js`,

        {
            removeOnUnmount: false,
        }
    );
    // const label = useScript(
    //     `https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse_LabelDisplay_Ext.js`,

    //     {
    //         removeOnUnmount: false,
    //     }
    // );
    // const three = useScript(
    //     `https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse_ThreeJS_Ext.js`,

    //     {
    //         removeOnUnmount: false,
    //     }
    // );
    // const splineDisplay = useScript(
    //     `https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse_SplineDisplay_Ext.js`,

    //     {
    //         removeOnUnmount: false,
    //     }
    // );

    const [sessionReady, setSessionReady] = useState(false);
    const [time, setTime] = useState(0);
    const [deltaTime, setDeltaTime] = useState(0);

    const initApp = useCallback(async () => {
        const SDK3DVerse = window.SDK3DVerse;
        await SDK3DVerse.joinOrStartSession({
            userToken: 'public_0rtYmFmJfCyVxB7-',
            sceneUUID: '33ed765f-9a1c-4f8c-933c-077eeb5503e0',
            canvas: document.getElementById('display-canvas'),
            viewportProperties: {
                defaultControllerType: SDK3DVerse.controller_type.orbit,
            },
        });
        console.log("************* Session joined");
        await SDK3DVerse.installExtension(window.SDK3DVerse_ViewportDomOverlay_Ext);
        const labelExt = await SDK3DVerse.installExtension(SDK3DVerse_LabelDisplay_Ext);
        // await window.SDK3DVerse.installExtension(SDK3DVerse_ThreeJS_Ext);
        // await window.SDK3DVerse.installExtension(SDK3DVerse_SplineDisplay_Ext);     

        if (props.onChange) {
            props.onChange(true);
        }

        console.log("************* Session ready, nb labels:", labelExt.labelEntities.length);
        setSessionReady(true);
    }, []);

    useEffect(() => {

        if (status === 'ready') {

            initApp();
            Click();
            Camera();
            //AnimationShip();
            
        }

    }, [status]);
    // ,splineDisplay, three

    frameLoop((time, deltaTime) => {
        
        if(!sessionReady) {
            return;
        }
        var labelElements = document.getElementsByClassName('label');

        // Check if the element is found before attempting to modify its style

        if (labelElements[0])
        {
            for (var i = 0; i < labelElements.length; i++) 
            {
                labelElements[i].innerHTML = '';
            }
        }

        showVisibleLabelsOnly();

        setTime(time);
        setDeltaTime(deltaTime);
    });

    return <>
        <canvas
            id='display-canvas'
            style={{

                width: '100%',
                verticalAlign: 'middle',
            }}

        ></canvas>
    </>
};