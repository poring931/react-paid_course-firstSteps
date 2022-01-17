import React, { useState } from 'react'
import Times from './fcn_components/Timer'
import Clicker from './fcn_components/Clicker'
import State from './fcn_components/HooksComp/State'
import Books from './fcn_components/HooksComp/BooksList/Books'
import Context from './fcn_components/HooksComp/Context'
import App_classComponent from './App_classComponent'
import { UseCallBack } from './fcn_components/UseCallBack'
import LayOutEffect from './fcn_components/LayOutEffect'

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
      <h2>Hooks: useMemo</h2>
      <span>в компоненте вызывается 2 кнопки с увеличением счетчика. При клике на одну из них - рендер происходит 1 раз</span> <br /> 
      <UseCallBack/>
      <h2>Hooks: useLayoutEffect</h2>
      <LayOutEffect/>






      <hr  style={{marginTop:'100px'}}/>
      <h1>Классовые компоненты</h1>
      <App_classComponent/>
    </div>
  )
}

export default App
