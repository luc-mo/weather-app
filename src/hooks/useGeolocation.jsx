import { useState, useEffect, useCallback } from 'react'

const defaultOptions = {
  enableHighAccuracy: true,
  maximumAge: 1000
}

function getGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      currentPosition => resolve(currentPosition.coords),
      error => reject(error),
      defaultOptions
    )
  })
}

export default function useGeolocation() {
  const [location, setLocation] = useState({})
  const [error, setError] = useState(null)
  const [loaded, setLoaded] = useState(false)

  const handleLocation = useCallback(async() => {
    try {
      const { latitude: lat, longitude: lon } = await getGeolocation()
      setLocation({ lat, lon })
      setLoaded(true)
    } catch(error) {
      setError(error)
      setLoaded(true)
    }
  }, [])

  useEffect(() => {
    (async() => handleLocation())()
  }, [handleLocation])

  return [location, error, loaded]
}