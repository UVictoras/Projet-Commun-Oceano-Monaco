import { AnimationShip, Camera, Click, OpenModal, Modalll, BougePutinDeBateauDeMerde, moveShip, DisabledInput, Mouvcamera, desactiveKey, showVisibleLabelsOnly } from './utils/3DVerse';
import { useCallback, useEffect, useState } from 'react';
import { useScript } from '@uidotdev/usehooks';
import SDK3DVerse_LabelDisplay_Ext from './sdk_extension/LabelDisplay'
import { useFrameLoop, frameLoop } from "./utils/FrameLoop.js";

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
    const three = useScript(
        `https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse_ThreeJS_Ext.js`,

        {
            removeOnUnmount: false,
        }
    );
    // const splineDisplay = useScript(
    //     `https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse_SplineDisplay_Ext.js`,

    //     {
    //         removeOnUnmount: false,
    //     }
    // );
    // const label = useScript(
    //     `https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse_LabelDisplay_Ext.js`,

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
                defaultControllerType: window.SDK3DVerse.controller_type.orbit,
            },
        });
        await SDK3DVerse.installExtension(window.SDK3DVerse_ViewportDomOverlay_Ext);
        const labelExt = await SDK3DVerse.installExtension(SDK3DVerse_LabelDisplay_Ext);
        await window.SDK3DVerse.installExtension(window.SDK3DVerse_ThreeJS_Ext);
        window.SDK3DVerse.engineAPI.playAnimationSequence('e0b8e825-1f98-41f8-95ba-edd6c3e1a5e9',{playbackSpeed : 0.3});
    
        // await window.SDK3DVerse.installExtension(window.SDK3DVerse_SplineDisplay_Ext);

        if (props.onChange) {
            //moveShip();
            props.onChange(true);
        }

        setSessionReady(true);
    });

    useEffect(() => {
        if (status === 'ready') {
            initApp();
            Camera();
            Click();
            desactiveKey()
           
        }
    }, [status]);

    frameLoop((time, deltaTime) => {

        if (!sessionReady) {
            return;
        }
        showVisibleLabelsOnly();
        // Check if the element is found before attempting to modify its style
        //Mouvcamera();


        setTime(time);
        setDeltaTime(deltaTime);
    });

    return (
        <>
            <canvas
                id='display-canvas'
                style={{

                    width: '100%',


                }}
            ></canvas>
        </>
    );
}