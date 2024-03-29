import { useCallback, useEffect, useState } from 'react';
import { useScript } from '@uidotdev/usehooks';


export const CommunityScene = (props) => {
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

        await window.SDK3DVerse.joinOrStartSession({
            userToken: 'public_0rtYmFmJfCyVxB7-',
            sceneUUID: '34462644-db76-4ed3-9420-8605b7fdb553',
            canvas: document.getElementById('community-scene'),
            showLoadingOverlay : false,
            viewportProperties: {
                defaultControllerType: window.SDK3DVerse.controller_type.none,
            },
        });
        window.SDK3DVerse.engineAPI.playAnimationSequence('ca66572e-9533-491d-b346-fd7fc91c7019');
        await window.SDK3DVerse.installExtension(window.SDK3DVerse_ViewportDomOverlay_Ext);
        await window.SDK3DVerse.installExtension(window.SDK3DVerse_LabelDisplay_Ext);



        if (props.onChange) {
            props.onChange(true);
        }
    }, []);

    useEffect(() => {

        if (status === 'ready') {

            initApp();

        }

    }, [status]);

    return <>
        <canvas
            id='community-scene'
            style={{

                width: '100%',
                verticalAlign: 'middle',
            }}

        ></canvas>
    </>
};