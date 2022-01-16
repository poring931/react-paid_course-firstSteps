import React, { useEffect, useState } from 'react'

    const State = () => {

    const [state, setState] = useState({
        count: 0,
        isCounting: false
    })

    const handleCount = () => {
        setState({ //склеиваем объекты. Приближение к сет стейту классового компонента
            ...state,
            count: state.count + 1
        })
    }
    const handleStatus = () => {
        setState({//склеиваем объекты. Приближение к сет стейту классового компонента
            ...state,
             isCounting: !state.isCounting
        })
    }

    useEffect(() => {
        console.log(state)
    },[state])

    return (
        <div>
            <button onClick={handleCount}>Click {state.count}</button>
            <button onClick={handleStatus}>StatusSwitcher: {state.isCounting ? 'true': 'false' }</button>
        </div>
    )
}

export default State
