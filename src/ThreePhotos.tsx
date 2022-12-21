import React from 'react'

type ImageType = string;

const oldPlanePath: ImageType = require('./photos/old-plane.jpg')
const crashedPlanePath: ImageType = require('./photos/crashed-plane.jpg')
const burningPlanePath: ImageType = require('./photos/burning-plane.jpg')

const photoStyles = 'object-cover w-1/3 h-[15rem]'

const ThreePhotos = () => {
  return (
    <div className='flex m-7 space-x-7'>
      <img
        src={oldPlanePath}
        alt="Uncomfortably old plane"
        className={`${photoStyles}`}
      />

      <img
        src={crashedPlanePath}
        alt="Uncomfortably old plane"
        className={`${photoStyles}`}
      />

      <img
        src={burningPlanePath}
        alt="Uncomfortably old plane"
        className={`${photoStyles}`}
      />
    </div>
  )
}

export default ThreePhotos