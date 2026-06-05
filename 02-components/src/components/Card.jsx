const Card = () => {
  const name = 'Ayush Saini';
  const age = 22;
  return (
    <div>
      <div className='card'>
        <h1>Hello I am {name}</h1>
        <p>I am {age} years old.</p>
      </div>
      
    </div>
  )
}

export default Card