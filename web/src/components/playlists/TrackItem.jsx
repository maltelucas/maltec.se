import React, { useState, useEffect } from 'react'

export default function TrackItem({ track }) {
  const [hasFocus, setHasFocus] = useState(false)

  return (
    <div
      className={`text-white flex flex-row justify-between bg-gray-100 cursor-pointer transform transition-all duration-200 ${
        hasFocus ? 'scale-105' : ''
      }`}
      onClick={() => window.open(track.external_urls.spotify)}
      onMouseEnter={() => setHasFocus(true)}
      onMouseLeave={() => setHasFocus(false)}
    >
      <div className="h-full flex flex-row">
        <img className="h-16 w-16" src={track.album.images[0].url} />
        <div className="h-full flex flex-col justify-center ml-6 ">
          <p className="text-gray-900">{track.name}</p>
          <p className="text-gray-500">
            {track.artists.map((artist) => artist.name).join(', ')}
          </p>
        </div>
      </div>
      <p className="text-gray-500 flex flex-col h-full justify-center mr-8">
        {millisToMinutesAndSeconds(track.duration_ms)}
      </p>
    </div>
  )
}

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000)
  var seconds = ((millis % 60000) / 1000).toFixed(0)
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
}
