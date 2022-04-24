import { useState, useEffect, useCallback } from 'react'
import { useReducers } from 'hooks'

export default function useMarker({ map, marker }) {
  const { event } = window.google.maps
  const { lat, lon: lng } = useReducers('geolocation')
  const [location, setLocation] = useState({ lat, lng })

  const handleDoubleClick = useCallback(({ latLng }) => {
    const lat = latLng.lat()
    const lng = latLng.lng()
    const position = { lat, lng }
    setLocation(position)
  }, [setLocation])

  const handleListener = useCallback(() => {
    let listener;
    if(map)
      listener = map.addListener('dblclick', handleDoubleClick)
    return () => {
      if(listener) event.removeListener(listener)
    }
  }, [map, event, handleDoubleClick])

  const handleLocation = useCallback(() => {
    if(marker) marker.setPosition(location)
  }, [location, marker])

  useEffect(handleListener, [handleListener])
  useEffect(handleLocation, [handleLocation])

  return [location, setLocation]
}