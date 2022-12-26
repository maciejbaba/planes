import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

const iconStyles = 'transition duration-700 ease-in-out hover:rotate-[360deg] hover:scale-125'

const Footer = () => {
  return (
    <div className='flex justify-center items-center h-10 font-bold bg-green-700'>
      <view className='flex gap-2 justify-center items-center'>
        <p>2022 © Maciej Bąba </p> 
        <a href='https://github.com/maciek367' target='_blank' rel="noreferrer">
          <AiFillGithub className={`${iconStyles}`}/>
        </a>
      </view>
    </div>
  )
}

export default Footer