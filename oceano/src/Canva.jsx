import { AnimationShip, Camera, Click, OpenModal, Modalll, BougePutinDeBateauDeMerde, moveShip } from './utils/3DVerse';
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

    async function initApp() {
        await window.SDK3DVerse.joinOrStartSession({
            userToken: 'public_0rtYmFmJfCyVxB7-',
            sceneUUID: '33ed765f-9a1c-4f8c-933c-077eeb5503e0',
            canvas: document.getElementById('display-canvas'),
            viewportProperties: {
                defaultControllerType: window.SDK3DVerse.controller_type.orbit,
            },
        });
        await window.SDK3DVerse.installExtension(window.SDK3DVerse_ViewportDomOverlay_Ext);
        await window.SDK3DVerse.installExtension(window.SDK3DVerse_LabelDisplay_Ext);
        await window.SDK3DVerse.installExtension(window.SDK3DVerse_ThreeJS_Ext);
        await window.SDK3DVerse.installExtension(window.SDK3DVerse_SplineDisplay_Ext);


        if (props.onChange) {
            Camera();
            Modalll();
            Click();
            moveShip();
            props.onChange(true);

        }
    }

    useEffect(() => {

        if (status === 'ready') {

            initApp();

            //AnimationShip();

        }

    }, [status]);

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