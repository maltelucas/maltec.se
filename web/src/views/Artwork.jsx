import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ImageGallery from 'react-image-gallery'
import React from 'react'
import PageHeader from '../components/PageHeader'

export default function Artwork() {
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
      <div className="bg-gray-300 h-full flex flex-col"></div>
      <ImageGallery items={images} />
    </div>
  )
}
const images = [
  {
    original: 'anime.png',
    thumbnail: 'anime.png',
  },
  {
    original: 'anime2.png',
    thumbnail: 'anime2.png',
  },
  {
    original: 'stream-ending.jpg',
    thumbnail: 'stream-ending.jpg',
  },
]
