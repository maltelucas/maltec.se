import { useState, useEffect } from 'react'

export default function useJokes() {
  const [joke, setJoke] = useState()

  useEffect(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then((res) => res.json())
      .then((result) => {
        setJoke(result)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    console.log({ joke })
  }, [joke])

  return { joke, jokeLoading: !joke }
}
