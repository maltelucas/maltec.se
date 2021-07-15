import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AboutMe from './views/AboutMe'
import GridItem from './components/GridItem'
import Masonry from 'react-masonry-css'
import { RANDOM_IMAGE_HEIGHT, RANDOM_IMAGE_WIDTH } from './config/constants'
import { PAGES } from './config/pages'
export default function App() {
  return (
    <div className="app bg-black w-full h-screen max-h-screen flex flex-row justify-end">
      <Navbar />
      <div className="content w-4/5 h-full">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Masonry
                breakpointCols={2}
                className="w-auto flex "
                columnClassName="bg-clip-border"
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
              <p className="text-white">hejhopp HALLÅ</p>
            </Route>
            <Route path="/portfolio">
              <p className="text-white">hejhopp HALLÅ</p>
            </Route>
            <Route path="/about-me">
              <p className="text-white">hejhopp HALLÅ</p>
            </Route>
            <Route path="/artwork">
              <p className="text-white">hejhopp HALLÅ</p>
            </Route>
            <Route path="/inspiration">
              <p className="text-white">hejhopp HALLÅ</p>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}
