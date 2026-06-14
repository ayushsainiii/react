import React, { useState } from 'react'

const App = () => {

  // const [num, setNum] = useState({user:'Ayush', age:22})

  // const btnClicked = () => {
  //       const newNum = {...num};
  //       newNum.user = 'Chiku'
  //       newNum.age = '23'
  //       setNum(newNum)
  // }

  const [num, setNum] = useState([10,20,30])

  const btnClicked = () => {
        const newNum = [...num];
        newNum.push(99)
        setNum(newNum)
  }

  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
