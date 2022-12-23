import React from 'react'

type ImagePathType = string;

const oldPlaneImgPath: ImagePathType = require('./photos/old-plane.jpg')
const crashedPlaneImgPath: ImagePathType = require('./photos/crashed-plane.jpg')
const burningPlaneImgPath: ImagePathType = require('./photos/burning-plane.jpg')

const photoStyles = 'object-cover w-1/3 h-[15rem]'

const ThreePhotos = () => {
  return (
    <div className='flex m-7 space-x-7'>
      <img
        src={oldPlaneImgPath}
        alt="Uncomfortably old plane"
        className={`${photoStyles}`}
      />

      <img
        src={crashedPlaneImgPath}
        alt="Uncomfortably old plane"
        className={`${photoStyles}`}
      />

      <img
        src={burningPlaneImgPath}
        alt="Uncomfortably old plane"
        className={`${photoStyles}`}
      />
    </div>
  )
}

export default ThreePhotos