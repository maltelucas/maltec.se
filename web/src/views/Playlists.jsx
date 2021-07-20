import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import useSpotify from '../hooks/useSpotify'
import {
  SPOTIFY_FAVORITE_PLAYLIST_ID,
  SPOTIFY_USER_ID,
} from '../config/constants'
import TrackItem from '../components/playlists/TrackItem'
import PageHeader from '../components/PageHeader'

export default function Playlists() {
  const { loading, playlists, favoritePlaylist } = useSpotify(
    SPOTIFY_USER_ID,
    SPOTIFY_FAVORITE_PLAYLIST_ID
  )

  useEffect(() => {
    console.log({ favoritePlaylist })
  }, [favoritePlaylist])
  return (
    <div className="playlists w-full h-full flex flex-col space-y-1">
      {/* {playlists?.items &&
        playlists.items.map((playlist) => (
          <div className="text-white">{playlist.name}</div>
        ))} */}
      {favoritePlaylist && (
        <PageHeader
          imageUrl={favoritePlaylist.images[0].url}
          title={
            <h2
              className="lg:text-4xl text-3x font-bold cursor-pointer hover:underline "
              onClick={() =>
                window.open(favoritePlaylist.external_urls.spotify)
              }
            >
              {favoritePlaylist.name}
            </h2>
          }
          description={
            <p
              className="cursor-pointer hover:underline text-green-accent"
              onClick={() =>
                window.open(favoritePlaylist.owner.external_urls.spotify)
              }
            >
              {favoritePlaylist.owner.display_name}
            </p>
          }
        />
      )}
      {favoritePlaylist?.tracks?.items &&
        favoritePlaylist.tracks.items.map(({ track }) => (
          <TrackItem track={track} />
        ))}
    </div>
  )
}

const exampleTrack = {
  album: {
    album_type: 'single',
    artists: [
      {
        external_urls: {
          spotify: 'https://open.spotify.com/artist/53kxfycKPtWuSFpIuEHlGi',
        },
        href: 'https://api.spotify.com/v1/artists/53kxfycKPtWuSFpIuEHlGi',
        id: '53kxfycKPtWuSFpIuEHlGi',
        name: 'BrxkenBxy',
        type: 'artist',
        uri: 'spotify:artist:53kxfycKPtWuSFpIuEHlGi',
      },
    ],
    available_markets: ['AD', 'AE', 'AG', 'AL', 'AM'],
    external_urls: {
      spotify: 'https://open.spotify.com/album/24KCscF02uAUhzMK4QL2hq',
    },
    href: 'https://api.spotify.com/v1/albums/24KCscF02uAUhzMK4QL2hq',
    id: '24KCscF02uAUhzMK4QL2hq',
    images: [
      {
        height: 640,
        url: 'https://i.scdn.co/image/ab67616d0000b27367d7d0fdcb0c895e08d49e31',
        width: 640,
      },
      {
        height: 300,
        url: 'https://i.scdn.co/image/ab67616d00001e0267d7d0fdcb0c895e08d49e31',
        width: 300,
      },
      {
        height: 64,
        url: 'https://i.scdn.co/image/ab67616d0000485167d7d0fdcb0c895e08d49e31',
        width: 64,
      },
    ],
    name: 'Confirmed',
    release_date: '2021-07-02',
    release_date_precision: 'day',
    total_tracks: 1,
    type: 'album',
    uri: 'spotify:album:24KCscF02uAUhzMK4QL2hq',
  },
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/53kxfycKPtWuSFpIuEHlGi',
      },
      href: 'https://api.spotify.com/v1/artists/53kxfycKPtWuSFpIuEHlGi',
      id: '53kxfycKPtWuSFpIuEHlGi',
      name: 'BrxkenBxy',
      type: 'artist',
      uri: 'spotify:artist:53kxfycKPtWuSFpIuEHlGi',
    },
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/138UAIyJocdHT5PpR0iTJE',
      },
      href: 'https://api.spotify.com/v1/artists/138UAIyJocdHT5PpR0iTJE',
      id: '138UAIyJocdHT5PpR0iTJE',
      name: 'Thekidszn',
      type: 'artist',
      uri: 'spotify:artist:138UAIyJocdHT5PpR0iTJE',
    },
  ],
  available_markets: ['AD', 'AE'],
  disc_number: 1,
  duration_ms: 173149,
  episode: false,
  explicit: true,
  external_ids: { isrc: 'QZHNA2184001' },
  external_urls: {
    spotify: 'https://open.spotify.com/track/09etR5MFQRDP8Pjm9rwufX',
  },
  href: 'https://api.spotify.com/v1/tracks/09etR5MFQRDP8Pjm9rwufX',
  id: '09etR5MFQRDP8Pjm9rwufX',
  is_local: false,
  name: 'Confirmed',
  popularity: 41,
  preview_url:
    'https://p.scdn.co/mp3-preview/dacb84b44da0f8d8a37edc01ac6cd76f41ad1cf4?cid=09019c0d99074570a0212791b9348f0e',
  track: true,
  track_number: 1,
  type: 'track',
  uri: 'spotify:track:09etR5MFQRDP8Pjm9rwufX',
}
