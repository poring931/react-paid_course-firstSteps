import React, { useEffect, useRef, useState } from 'react'

const Clicker = () => {

    const inputEl  = useRef(null)
    console.log(inputEl)

    const numRef = useRef(0)
    
    const [countClick, setCount] =useState(0);
    
    const decrement = () =>{
        setCount(countClick - 1)
    }
    const increment = () =>{
        setCount(countClick + 1)
    }

    const handleClick =() => {
        numRef.current = 1;
    }

    useEffect(() => {
        console.log(`%c asdasdsad ${countClick}`, 'background: #222; color: #bada55')
        console.log(`%c${inputEl}`, 'color: #bada55')
        return () => console.log('%c clicker was closed', 'background: #222; color: #bada55')
    }, [countClick])


    return (
        <>
        <input placeholder='name' type="text" ref={inputEl}/> <br />

            <button onClick={decrement}>Minus</button>
            <button onClick={handleClick}>{numRef.current}</button>
            <button onClick={increment}>Plus</button>
        </>
    )
}

export default Clicker
