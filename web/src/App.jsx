import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutMe from './views/AboutMe'
import GridItem from './components/GridItem'
import Masonry from 'react-masonry-css'
import {
  RANDOM_IMAGE_HEIGHT,
  RANDOM_IMAGE_WIDTH,
  SPOTIFY_USER_ID,
} from './config/constants'
import { PAGES } from './config/pages'
import Playlists from './views/Playlists'
import Portfolio from './views/Portfolio'
import Inspiration from './views/Inspiration'
import Artwork from './views/Artwork'
import useSpotify from './hooks/useSpotify'

export default function App() {
  return (
    <div className="app bg-white w-full h-screen md:max-h-screen flex flex-col md:flex-row md:justify-end overflow-x-hidden">
      <Navbar />
      <div className="content w-full p-2 md:px-16 md:w-4/5 h-full">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Masonry
                breakpointCols={{ 768: 1, default: 2 }}
                className="w-auto h-full flex space-x-2"
                columnClassName="bg-clip-border space-y-2"
              >
                {PAGES.map((page) => (
                  <GridItem
                    title={page.title}
                    imageUrl={page.imageUrl}
                    onClick={() => window.location.assign(page.path)}
                  />
                ))}
              </Masonry>
            </Route>
            <Route path="/playlists">
              <Playlists></Playlists>
            </Route>
            {/* <Route path="/portfolio">
              <Portfolio></Portfolio>
            </Route> */}
            <Route path="/about-me">
              <AboutMe></AboutMe>
            </Route>
            <Route path="/artwork">
              <Artwork></Artwork>
            </Route>
            {/* <Route path="/inspiration">
              <Inspiration></Inspiration>
            </Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  )
}
