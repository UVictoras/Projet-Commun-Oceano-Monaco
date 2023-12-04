import { Anim, Camera, Click } from './utils/3DVerse';
import { useCallback, useEffect } from 'react';

import { useScript } from '@uidotdev/usehooks';


export const Canvas = () => {
    const status = useScript(
        `https://cdn.3dverse.com/legacy/sdk/latest/SDK3DVerse.js`,
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
    }, []);

    useEffect(() => {
        if (status === 'ready') {
            
            initApp();
            Anim();
            Click();
            
        }
    }, [status]);

    return (
        <>
            <canvas
                id='display-canvas'
                style={{
                    height: '100vh',
                    width: '100vw',
                    verticalAlign: 'middle',
                    
                }}
            ></canvas>
        </>
    );
};