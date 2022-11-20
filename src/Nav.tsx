import React, { useState } from 'react'
import { SlPlane } from 'react-icons/sl'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Nav = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='flex items-center mx-auto justify-beetwen max-w-[800px] text-white font-bold'>
      <h2 className='h-10 w-full flex gap-3 uppercase m-2 text-xl items-center'>
        Planes <SlPlane className='text-green-600'/>
      </h2>
      <div className='flex hidden gap-5 items-center p-4'>
        <p className='hover:scale-110'>Home</p>
        <p className='hover:scale-110'>Safety</p>
        <p className='hover:scale-110'>Book</p>
        <p className='hover:scale-110'>About</p>
      </div>
      <div onClick={handleNav}>
        {nav ? < AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>
      <div className={nav ? 'fixed left-[-100%]' : 'fixed uppercase p-4 top-0 left-0 w-[40%] bg-black border-green-600 border-r h-full'}>
        <ul>
          <li>
            <h2 className='h-10 w-full flex gap-3 uppercase text-xl text-white items-center'>
              Planes <SlPlane className='text-green-600'/>
            </h2>
          </li>
          <li className='hover:scale-110 border-b border-green-600'>Home</li>
          <li className='hover:scale-110 border-b border-green-600'>Safety</li>
          <li className='hover:scale-110 border-b border-green-600'>Book</li>
          <li className='hover:scale-110'>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav