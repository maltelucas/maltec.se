import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button'

export default function Navbar() {
  return (
    <div className="navigation fixed left-0 top-0 bottom-0 w-1/5 h-full bg-black flex flex-col">
      <h2 className="text-6xl font-bold font-logo w-full text-center text-yellow-200 py-20">
        MALTEC
      </h2>

      <div className="navbar flex flex-col">
        <div className="flex flex-col space-y-4 text-white font-bold italic text-3xl">
          <div className="hover:underline cursor-pointer">PLAYLISTS</div>
          <div className="hover:underline cursor-pointer">STREAM</div>
          <div className="hover:underline cursor-pointer">ABOUT</div>
        </div>
      </div>
    </div>
  )
}
