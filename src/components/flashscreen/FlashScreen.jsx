import React, {useEffect, useState} from 'react';
import './FlashScreen.css';

export default function FlashScreen() {
    const [blast, setBlast] = useState(false);
    const [assembled, setAssembled] = useState(false);

    useEffect(() => {
        const blastTimer = setTimeout(() => {
            setBlast(true);
        }, 2000);

        const assembleTimer = setTimeout(() => {
            setAssembled(true);
        }, 2500);

        return () => {
            clearTimeout(blastTimer);
            clearTimeout(assembleTimer);
        };
    }, []);

    return (
        <div className="flash-screen">
            <div className="dumbbell-container">
                {!blast && !assembled && <div className={`dumbbell-half dumbbell-left-half`}></div>}
                {!blast && !assembled && <div className={`dumbbell-half dumbbell-right-half`}></div>}
                {blast && !assembled && <div className="blast-effect">💥</div>}
                {assembled && <div className="dumbbell-full"></div>}
            </div>
            {assembled && (
                <div className="app-name-container">
                    <h1 className="app-name">Muscle Fit</h1>
                </div>
            )}
        </div>
    );
}