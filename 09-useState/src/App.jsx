import React from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10)

  // function changeNum(){
  //   setnum(30)
  // }

  const changeNum = () => {
  setnum(30);
};

  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter+1)
  }

  const decrement = () => {
    setCounter(counter-1)
  }

  return (
    <div>
      <h1>Value of num is {num}</h1>
      <button onClick={changeNum}>Click to Change</button>
      <div className='box'>{counter }</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default App
