import { Click } from './3DVerse';
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
            userToken: 'public_RMKn_AQskeSYIngV',
            sceneUUID: '25174276-7390-4710-a75e-a0a0950bcfc3',
            canvas: document.getElementById('display-canvas'),
            viewportProperties: {
                defaultControllerType: SDK3DVerse.controller_type.orbit,
            },
        });
    }, []);

    useEffect(() => {
        if (status === 'ready') {
            
            initApp();
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