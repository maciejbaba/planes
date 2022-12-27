import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component"

type ImagePathType = string;

const oldPlaneImgPath: ImagePathType = require('./photos/old-plane.jpg')
const crashedPlaneImgPath: ImagePathType = require('./photos/crashed-plane.jpg')
const burningPlaneImgPath: ImagePathType = require('./photos/burning-plane.jpg')

const photoStyles = 'object-cover w-full h-[15rem] rounded-xl'
const photoDivStyles = 'w-full'
const photoTextStyles = 'm-3 text-center bold text-xl'

const containerStyles = 'flex m-7 flex-col md:flex-row md:space-x-7'

const ThreePhotos = () => {
  return (
    <div className={`${containerStyles}`}>
      <figure className={`${photoDivStyles}`}>
        <LazyLoadImage
          src={oldPlaneImgPath}
          loading="lazy"
          alt="Uncomfortably old plane"
          className={`${photoStyles}`}
        />
        <figcaption className={`${photoTextStyles}`}>
          Our planes are incredibly old because we are incredibly cheap
        </figcaption>
      </figure>

      <figure className={`${photoDivStyles}`}>
        <LazyLoadImage
          src={crashedPlaneImgPath}
          loading="lazy"
          alt="Uncomfortably old plane"
          className={`${photoStyles}`}
        />

        <figcaption className={`${photoTextStyles}`}>
          Almost every of our planes has crashed at least once, insurance companies don't like us
        </figcaption>
      </figure>

      <figure className={`${photoDivStyles}`}>
        <LazyLoadImage
          src={burningPlaneImgPath}
          loading="lazy"
          alt="Uncomfortably old plane"
          className={`${photoStyles}`}
        />
        <figcaption className={`${photoTextStyles}`}>Very often our planes catch on fire because we don't care about your safety</figcaption>
      </figure>
    </div>
  )
}

export default ThreePhotos