import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export default function Inspiration() {
  return (
    <div className="inspiration bg-black">
      <div className="pt-40 h-80 text-white ">
        <h1 className="text-left font-bold text-5xl underline  ">
          My inspirations{' '}
        </h1>
        <h1 className="text-center font-semibold text-2xl bg-purple-700">
          {' '}
          One of my biggest inspirations is <u>Elon Musk</u>, <p /> from where
          he started and to where he is today, is a massivly inspiring story...
          So what did he do?
          <p /> Elon Musk founded SpaceX, co-founded PayPal and Tesla, and is
          the chairman of SolarCity. He’s revolutionizing space travel,
          automobiles, and how we consume energy
          <p />
          I’m inspired by Elon’s thrilling leadership in a wild range of
          companies. Space, solar energy, automobiles and online payments.
          <p /> While Elon is a leader, he also showing that you can still be a
          human, he shows that he <p />
          has alot of humor, if you take a look at his twitter, there is tonnes
          of jokes.
          <img src="elon.jpg" />
          <p className="bg-black pt-48"></p>
        </h1>
        <h1 className="text-left font-bold text-5xl underline">
          Another huge inspiration for me
        </h1>
      </div>
    </div>
  )
}
