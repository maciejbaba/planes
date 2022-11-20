import React from 'react'
import { SlPlane } from 'react-icons/sl'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Nav = () => {
  return (
    <div className='flex items-center mx-auto justify-beetwen max-w-[800px] text-white font-bold'>
      <h2 className='h-10 w-full flex gap-3 uppercase m-2 text-xl text-green-600 items-center'>
        Planes <SlPlane />
      </h2>
      <div className='flex hidden gap-5 items-center p-4'>
        <p className='hover:scale-110'>Home</p>
        <p className='hover:scale-110'>Safety</p>
        <p className='hover:scale-110'>Book</p>
        <p className='hover:scale-110'>About</p>
      </div>
      <div>
        <AiOutlineMenu size={30} />
      </div>
      <div>
        <ul className='fixed uppercase p-4 top-0 left-0 w-[30%] bg-black border-green-700 border-r h-full'>
          <li>
            <h2 className='h-10 w-full flex gap-3 uppercase text-xl text-green-600 items-center'>
              Planes <SlPlane />
            </h2>
          </li>
          <li className='hover:scale-110 border-b '>Home</li>
          <li className='hover:scale-110 border-b '>Safety</li>
          <li className='hover:scale-110 border-b '>Book</li>
          <li className='hover:scale-110'>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav