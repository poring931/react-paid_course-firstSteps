import React, { useEffect, useRef, useState } from 'react'
import styles from '../cls_components/Timer/TimerLocalStorage.module.css'


function setDefaultValue() {
    const userCount = localStorage.getItem('countTimerFcnComp');
    return userCount ? +userCount : 0;
}

const Timer = () => {



    const [count, setCount] = useState(setDefaultValue());
    const [isCounting, setIsCount] = useState(false);
    const timerIdRef = useRef(null);

    const handleReset = () => {
        setCount(0);
        setIsCount(false);
    };

    const handleStart = () => {
        setIsCount(true);
    };

    const handleStop = () => {
        setIsCount(false);
    };

    useEffect(() => {
        localStorage.setItem('countTimerFcnComp', count);
    }, [count]);

    useEffect(() => {
        if (isCounting) {
            timerIdRef.current = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }

        return () => {
            timerIdRef.current && clearInterval(timerIdRef.current);
            timerIdRef.current = null;
        };
    }, [isCounting]);

        return (
            <div className={styles.timer}>
                 <h1>React Timer from localstorage</h1>
                <h3 className={styles.time__count}>{count}</h3>
                {!isCounting ? (
                    <button onClick={handleStart}>Start</button>
                ) : (
                    <button onClick={handleStop}>Stop</button>
                )}
                <button onClick={handleReset}>Reset</button>
            </div>
        )
}

export default Timer
