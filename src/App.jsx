import React, { useState } from 'react'
import App_classComponent from './App_classComponent'

const App = () => {


  const [countClick, setCount] =useState(0);
  
  const decrement = () =>{
    setCount(countClick - 1)
  }
  const increment = () =>{
    setCount(countClick + 1)
  }


  return (
    <div>
      <button onClick={decrement}>Minus</button>
      <button onClick={() => setCount(countClick + 1)}>{countClick}</button>
      <button onClick={increment}>Plus</button>








      <hr  style={{marginTop:'100px'}}/>
      <h1>Классовые компоненты</h1>
      <App_classComponent/>
    </div>
  )
}

export default App
