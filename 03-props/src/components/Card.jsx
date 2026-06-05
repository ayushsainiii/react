import React from 'react'

const Card = (props) => {

    console.log(props);
  return (
    <div className="card">
        <img src="https://images.unsplash.com/photo-1780578621909-ab42529a8139?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <h1>{props.user}</h1>
        <p>{props.age} years old</p>
        <button>View Profile</button>
        
      </div>
  )
}

export default Card
