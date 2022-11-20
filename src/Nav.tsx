import React from 'react'
import { SlPlane } from 'react-icons/sl'

const Nav = () => {
  return (
    <div className='flex items-center mx-auto justify-beetwen max-w-[800px] text-white font-bold'>
      <h2 className='h-10 w-full flex p-4 uppercase m-2 text-xl text-green-600 items-center'>
        Planes <SlPlane />
      </h2>
      <div className='flex gap-5 items-center p-4'> 
        <button className='hover:scale-110'>Home</button>
        <button className='hover:scale-110'>Safety</button>
        <button className='hover:scale-110'>Book</button>
        <button className='hover:scale-110'>About</button>
      </div>
    </div>
  )
}

export default Nav