import { AnimationShip, Camera, Click } from './utils/3DVerse';
import { useCallback, useEffect, useState } from 'react';
import { useScript } from '@uidotdev/usehooks';
import SDK3DVerse_LabelDisplay_Ext from './sdk_extension/LabelDisplay'


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

    const initApp = useCallback(async () => {
        const SDK3DVerse = window.SDK3DVerse;
        await SDK3DVerse.joinOrStartSession({
            userToken: 'public_0rtYmFmJfCyVxB7-',
            sceneUUID: 'dc9b301a-c560-42d5-b702-565e386d5f8e',
            canvas: document.getElementById('display-canvas'),
            viewportProperties: {
                defaultControllerType: SDK3DVerse.controller_type.orbit,
            },
        });
        await SDK3DVerse.installExtension(window.SDK3DVerse_ViewportDomOverlay_Ext);
        await SDK3DVerse.installExtension(SDK3DVerse_LabelDisplay_Ext);
        // await window.SDK3DVerse.installExtension(SDK3DVerse_ThreeJS_Ext);
        // await window.SDK3DVerse.installExtension(SDK3DVerse_SplineDisplay_Ext);

        if (props.onChange) {
            props.onChange(true);
        }
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