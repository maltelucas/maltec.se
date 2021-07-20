import React, { useEffect, useState } from 'react'

const SPOTIFY_AUTH_SCOPES = ''
export default function useSpotify(userId = '', favoritePlaylistId = '') {
  const [loading, setLoading] = useState()
  const [auth, setAuth] = useState()
  const [playlists, setPlaylists] = useState()
  const [favoritePlaylist, setFavoritePlaylist] = useState()

  useEffect(() => {
    fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        Authorization:
          'Basic ' +
          new Buffer(
            process.env.REACT_APP_SPOTIFY_CLIENT_ID +
              ':' +
              process.env.REACT_APP_SPOTIFY_CLIENT_SECRET
          ).toString('base64'),
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
      }),
    })
      .then((res) => res.json())
      .then((authResult) => setAuth(authResult))
      .catch((err) => console.error(err))
  }, [])

  useEffect(() => {
    console.log(auth)

    if (userId && auth && auth.expires_in && auth.expires_in > 10) {
      fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
        headers: {
          Authorization: auth.token_type + ' ' + auth.access_token,
        },
      })
        .then((res) => res.json())
        .then((playlistsResult) => {
          console.log(playlistsResult)
          setPlaylists(playlistsResult)
        })
    }
  }, [userId, auth])

  useEffect(() => {
    console.log(auth)

    if (favoritePlaylistId && auth && auth.expires_in && auth.expires_in > 10) {
      fetch(`https://api.spotify.com/v1/playlists/${favoritePlaylistId}`, {
        headers: {
          Authorization: auth.token_type + ' ' + auth.access_token,
        },
      })
        .then((res) => res.json())
        .then((favoritePlaylistResult) => {
          console.log(favoritePlaylistResult)
          setFavoritePlaylist(favoritePlaylistResult)
        })
    }
  }, [favoritePlaylistId, auth])

  return { loading, playlists, favoritePlaylist }
}
