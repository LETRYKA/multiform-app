import React, { useState, useEffect } from 'react';

const Success = (props) => {
    const { } = props;

    const [isGifEnded, setIsGifEnded] = useState(false);

    useEffect(() => {
        const gifDuration = 2400;

        const timer = setTimeout(() => {
            setIsGifEnded(true);
        }, gifDuration);
    }, []);

    return (
        <div className="flex justify-center items-center flex-col">
            <img src="/imgs/congratz.gif" alt="congratz" width={350} style={{ display: isGifEnded ? 'none' : 'block' }} />
            <img src="/imgs/congratz.png" alt="congratz" width={350} style={{ display: isGifEnded ? 'block' : 'none' }} />
            <p className="text-[grey] font-regular text-base -mt-[100px]">We've received your submission. Thank you! ✨</p>
        </div>
    )
}



export default Success;