import React from 'react'
import styles from './TimerLocalStorage.module.css'

export default class Times extends React.Component {
    state = {
        count: localStorage.getItem('countTimer') ? +localStorage.getItem('countTimer') : 0,
        isCounting: false,
    };

    componentDidMount() {}

    componentDidUpdate() {}

    componentWillUnmount() {
         this.setState({isCounting: false});
        clearInterval(this.timerId)
    }

    handleStart = () => {
        this.setState({isCounting: true});
        this.timerId = setInterval(() => {
            this.setState({count: this.state.count+1})
            localStorage.setItem('countTimer', JSON.stringify(this.state.count));
        }, 1000)
    }
    handleStop = () => {
        this.setState({isCounting: false});
        clearInterval(this.timerId)
    }
    handleReset = () => {
        this.setState({count: 0})
    }

    render() {
        return (
            <div className={styles.timer}>
                 <h1>React Timer from localstorage</h1>
                <h3 className={styles.time__count}>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
