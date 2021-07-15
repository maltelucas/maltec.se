import { useState, useEffect } from 'react'

export default function useTwitch() {
  const [twitch, setTwitch] = useState()

  useEffect(() => {
    fetch(
      'https://api.twitch.tv/kraken/users/44322889?client_id=' +
        process.env.REACT_APP_TWITCH_CLIENT_ID
    )
      .then((res) => res.json())
      .then((result) => {
        setTwitch(result)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    console.log({ twitch })
  }, [twitch])

  return { twitch, twitchLoading: !twitch }
}
