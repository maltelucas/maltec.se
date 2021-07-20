import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

export default function Navbar() {
  return (
    <div className="navigation h-auto w-full md:fixed md:left-0 md:top-0 md:bottom-0 md:w-1/5 md:h-full md:w-auto bg-gray-100 flex flex-col justify-center">
      <h2
        onClick={() => window.location.assign('/')}
        className="text-4xl p-4 md:p-0 lg-text-8xl md:text-8xl tracking-widest font-bold font-logo w-full text-center text-green-accent md:-rotate-90 md:transform cursor-pointer"
      >
        MALTEC
      </h2>

      {/* <div className="navbar flex flex-col">
        <div className="flex flex-col space-y-4 text-white font-bold italic text-3xl">
          <div className="hover:underline cursor-pointer">PLAYLISTS</div>
          <div className="hover:underline cursor-pointer">STREAM</div>
          <div className="hover:underline cursor-pointer">ABOUT</div>
        </div>
      </div> */}
    </div>
  )
}
