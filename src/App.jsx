import React, { useState } from 'react'
import Times from './fcn_components/Timer'
import Clicker from './fcn_components/Clicker'
import State from './fcn_components/HooksComp/State'
import Books from './fcn_components/HooksComp/BooksList/Books'
import Context from './fcn_components/HooksComp/Context'
import App_classComponent from './App_classComponent'

const App = () => {

  const [isClicker, setClicker] =useState(false)
  const [isTimer, setTimer] =useState(false)

  

  return (
    <div className="app">
      <h1>Фукнциональные компоненты</h1>

      <button onClick={() => setClicker(!isClicker)}>Toggle clicker</button>
      <br />
      { isClicker && <Clicker/>}
      <hr/>

        <button onClick={() => setTimer(!isTimer)}>Toggle timer </button>
      <br />
      { isTimer && <Times/>}
      
      <hr  style={{marginTop:'100px'}}/>
      <h2>Hooks: useState</h2>
      <span>useStateObject like class component setState( ...state, count: state.count + 1 )</span>
      <State/>
      

      <h2>Hooks: createContext</h2>
      <Context>
        <Books />
      </Context>






      <hr  style={{marginTop:'100px'}}/>
      <h1>Классовые компоненты</h1>
      <App_classComponent/>
    </div>
  )
}

export default App
