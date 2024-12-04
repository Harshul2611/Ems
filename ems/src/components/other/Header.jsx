import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-end'>
        <h1 className='text-white text-2xl font-medium'>Hello <br/> <span className='text-3xl font-semibold'>Harshul 👋🏻</span></h1>
        <button className='text-white bg-red-600 text-lg font-medium rounded-full py-2 px-5'>Log out</button>
    </div>
  )
}

export default Header;