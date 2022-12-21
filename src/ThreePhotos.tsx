import React from 'react'

type ImageType = string;

const oldPlane: ImageType = require('./photos/old-plane.jpg')

const ThreePhotos = () => {
  return (
    <div>
      <img
      src={oldPlane}
      alt="Uncomfortably old plane"
      className='object-scale-down'
      />
    </div>
  )
}

export default ThreePhotos