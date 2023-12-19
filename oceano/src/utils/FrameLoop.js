import React, { useRef, useEffect } from "react";

export const useFrameLoop = (callback) => {
    
    const requestID = useRef();
    const previousTime = useRef();

    const loop = async time => {
        
        if(previousTime.current !== undefined){
            const deltaTime = time - previousTime.current;
            await callback(time, deltaTime);
        }

        previousTime.current = time;
        requestID.current = requestAnimationFrame(loop);
    }

    useEffect(()=>{
        requestID.current = requestAnimationFrame(loop);

        return ()=> cancelAnimationFrame(requestID.current);
    }, [])
}

export const frameLoop = (callback) => {
    
    let requestID;
    let previousTime;

    const loop = async time => {
        
        if(previousTime !== undefined){
            const deltaTime = time - previousTime;
            await callback(time, deltaTime);
        }

        previousTime = time;
        requestID = requestAnimationFrame(loop);
    }

    requestID = requestAnimationFrame(loop);
}