import {AnimationShip, Camera, Click } from './utils/3DVerse';
import { useCallback, useEffect, useState } from 'react';
import { useScript } from '@uidotdev/usehooks';


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
    const label = useScript(
        `https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse_LabelDisplay_Ext.js`,

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
    const splineDisplay = useScript(
        `https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse_SplineDisplay_Ext.js`,

        {
            removeOnUnmount: false,
        }
    );
    const matrix = useScript(
        `https://cdnjs.cloudflare.com/ajax/libs/gl-matrix/3.4.1/gl-matrix-min.js`,

        {
            removeOnUnmount: false,
        }
    )

    const initApp = useCallback(async () => {

        await SDK3DVerse.joinOrStartSession({
            userToken: 'public_0rtYmFmJfCyVxB7-',
            sceneUUID: '33ed765f-9a1c-4f8c-933c-077eeb5503e0',
            canvas: document.getElementById('display-canvas'),
            viewportProperties: {
                defaultControllerType: SDK3DVerse.controller_type.orbit,
            },
        });
        await window.SDK3DVerse.installExtension(SDK3DVerse_ViewportDomOverlay_Ext);
        await window.SDK3DVerse.installExtension(SDK3DVerse_LabelDisplay_Ext);
        await window.SDK3DVerse.installExtension(SDK3DVerse_ThreeJS_Ext);
        await window.SDK3DVerse.installExtension(SDK3DVerse_SplineDisplay_Ext);

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

    }, [status, label, dom,splineDisplay, three,matrix]);

    return <>
        <canvas
            id='display-canvas'
            style={{

                width: '100%',


            }}

        ></canvas>
    </>
};