import React, { useEffect, useReducer, useRef, useState } from 'react'
import styles from '../cls_components/Timer/TimerLocalStorage.module.css'


function setDefaultValue() {
    const userCount = localStorage.getItem('countTimerFcnComp');
    return userCount ? +userCount : 0;
}

const countReducer = (state, {type}) => {
    if ( type == 'START') {
        return {
            ...state,
            isCounting: true,
        }
    }

    if ( type == 'STOP') {
        return {
            ...state,
            isCounting: false,
        }
    }

    if ( type == 'RESET') {
        return {
            count:0,
           isCounting: true,
        }
    }
    if ( type == 'TICK') {
        return {
            ...state,
            count: state.count + 1
        }
    }

}

const Timer = () => {


    const [{count, isCounting}, dispatch] = useReducer(countReducer, {count: setDefaultValue(), isCounting: false});

    // const [count, setCount] = useState(setDefaultValue());
    // const [isCounting, setIsCount] = useState(false);


    useEffect(() => {
        localStorage.setItem('countTimerFcnComp', count);
    }, [count]);

    useEffect(() => {
        let timerId = null;

        if (isCounting) {
            timerId = setInterval(() => {
                dispatch({type: 'TICK'})
            }, 1000);
        }

        return () => {
            timerId && clearInterval(timerId);
            timerId = null;
        };
    }, [isCounting]);

        return (
            <div className={styles.timer}>
                 <h1>React Timer REDUCER from localstorage</h1>
                <h3 className={styles.time__count}>{count}</h3>
                {!isCounting ? (
                    <button onClick={()=> dispatch({type: 'START'})}>Start</button>
                ) : (
                    <button onClick={()=> dispatch({type: 'STOP'})}>Stop</button>
                )}
                <button onClick={()=> dispatch({type: 'RESET'})}>Reset</button>
            </div>
        )
}

export default Timer
