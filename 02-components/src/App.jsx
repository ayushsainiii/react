import Card from './components/Card'
import Navbar from './components/Navbar'

import React from 'react'

const App = () => {
  return (
    <div>
      <Navbar />
      {Card()}
      <Card />
    </div>
  )
}

export default App
