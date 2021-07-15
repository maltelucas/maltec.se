import React, { useEffect, useState } from 'react'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

export default function GridItem({ imageUrl, title, onClick }) {
  const [height, setHeight] = useState()
  const [hasFocus, setHasFocus] = useState(false)

  useEffect(function () {
    const heightInt = Math.floor(Math.random() * 3) + 4
    console.log(heightInt)
    setHeight('h-' + heightInt * 20)
  }, [])

  return (
    <div
      onMouseEnter={() => setHasFocus(true)}
      onMouseLeave={() => setHasFocus(false)}
      onClick={onClick}
      className={`w-full ${height} inline-block relative -mb-1.5`}
    >
      <div className="inset-0 absolute overflow-hidden">
        <img
          className={`w-full h-140 object-cover transform transition-all duration-300 ${
            hasFocus ? 'scale-110' : ''
          }`}
          src={imageUrl}
        ></img>
      </div>
      <div
        className={`bg-black inset-0 bg-opacity-${
          hasFocus ? '80' : '60'
        } absolute flex justify-end items-end`}
      >
        <h2 className="text-6xl text-yellow-400 opacity-60 p-10  font-bold">
          {title?.toUpperCase()}
        </h2>
      </div>
    </div>
  )
}
