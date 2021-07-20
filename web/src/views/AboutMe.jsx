import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
export default function AboutMe() {
  return (
    <div className="about-me">
      <PageHeader
        imageUrl={
          'https://media-exp1.licdn.com/dms/image/C4D03AQEFgoMkk9WpaA/profile-displayphoto-shrink_200_200/0/1555845801555?e=1632355200&v=beta&t=bjhinAu2692sGZ_Y2I-UNB-HxjWPbRu-NWRl3Ridc-A'
        }
        title={
          <h2 className="lg:text-4xl text-3xl font-bold ">Lucas Andersson</h2>
        }
        description={<p className="text-green-accent">Software developer</p>}
      />

      {
        <p className="text-black lg:text-2xl">
          {' '}
          23 year old Software Engineer, currently working in IT at the Swedish
          Police Authority. <p /> Passionate about technology, and always eager
          to learn about the latest tech gadgets.
          <p />
          Since the start of 2014 i have been using programming,
          <p />
          as i find it really cool, that you always learn when you are
          developing new things.
          <p />
          At the start, it kinda feels like you are in the matrix, (if you have
          seen the movie, understand my refrence).
          <p />
          Nothing makes sense at the start, but the more you try, the more you
          learn, in the end everything will start
          <p />
          to make sense. Just have to stick with it, enjoy every part of the
          journey.
          <p />
        </p>
      }
    </div>
  )
}
