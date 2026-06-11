import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between uppercase py-8 px-18'>
      <h4 className='bg-black  text-white px-5 py-3 rounded-full'>Target Audience</h4>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 uppercase rounded-full text-sm'>
        Digital Banking Platform
      </button>
    </div>
  )
}

export default Navbar
