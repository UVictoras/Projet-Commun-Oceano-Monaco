import { Anim, Camera, Click, DisabledInput } from './utils/3DVerse';
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
        if (props.onChange) {
            props.onChange(true);
        }
    }, []);

    useEffect(() => {

        if (status === 'ready' && dom === 'ready' && label === 'ready') {

            initApp();
            Click();
            Camera();
        }

    }, [status, dom, label]);

    return <>
        <canvas
            id='display-canvas'
            style={{
                height: '100vh',
                width: '100vw',
                verticalAlign: 'middle',
            
            }}
            
        ></canvas>
    </>
};