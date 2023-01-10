import React, { useState } from 'react'
import { SlPlane } from 'react-icons/sl'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const menuHidden = 'fixed left-[-100%] uppercase p-4 top-0 w-[40%] bg-black border-green-700 border-r h-full ease-in-out duration-300'
const menuShown = 'md:hidden fixed uppercase p-4 top-0 left-0 w-1/2 bg-black border-green-700 border-r h-full ease-in-out duration-300'

const headerLinkStyles = 'hover:scale-110 cursor-pointer'
const menuLinkStyles = 'hover:scale-110 border-b border-green-700'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(true)

  const handleNav = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className='flex items-center mx-auto justify-beetwen max-w-[800px] text-white font-bold'>
      <h2 className='h-10 w-full flex gap-3 uppercase m-2 text-xl items-center'>
        Planes <SlPlane className='text-green-700'/>
      </h2>
      <div className='hidden md:flex gap-5 items-center p-4'>
        <p className={headerLinkStyles}>Home</p>
        <p className={headerLinkStyles}>Safety</p>
        <p className={headerLinkStyles}>Book</p>
        <p className={headerLinkStyles}>About</p>
      </div>
      <div onClick={handleNav} className='block md:hidden m-2'>
        {showMenu ? < AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </div>
      <div className={showMenu ? `${menuHidden}` : `${menuShown}`}>
        <ul className='flex flex-col gap-3 text-lg'>
          <li>
            <h2 className='h-10 w-full flex gap-3 uppercase text-xl text-white items-center'>
              Planes <SlPlane className='text-green-700'/>
            </h2>
          </li>
          <li className={menuLinkStyles}>Home</li>
          <li className={menuLinkStyles}>Safety</li>
          <li className={menuLinkStyles}>Book</li>
          <li className={menuLinkStyles}>About</li>
        </ul>
      </div>
    </div>
  )
}

export default Nav