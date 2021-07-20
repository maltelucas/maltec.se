import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Button from './Button'

export default function GridItem({ imageUrl, title, onClick }) {
  const [randomHeight, setRandomHeight] = useState()
  const [hasFocus, setHasFocus] = useState(false)

  useEffect(() => {
    const heightInt = 6 //Math.floor(Math.random() * 3) + 6
    console.log(heightInt)
    setRandomHeight('h-' + heightInt * 20)
  }, [])

  return (
    <div
      onMouseEnter={() => setHasFocus(true)}
      onMouseLeave={() => setHasFocus(false)}
      onClick={onClick}
      className={`w-full ${randomHeight} inline-block relative -mb-1.5 cursor-pointer`}
    >
      <div className="inset-0 absolute overflow-hidden">
        <img
          className={`w-full h-200 object-cover transform transition-all duration-500 ${
            hasFocus ? 'scale-105' : ''
          }`}
          src={imageUrl}
        ></img>
      </div>
      <div
        className={`bg-gray-100 left-0 p-6 pt-10 bottom-0 right-0 absolute h-42 flex flex-col justify-center`}
      >
        <h2 className="text-gray-900 font-bold">{title}</h2>
        <Button icon={faArrowRight} />
      </div>
    </div>
  )
}
