import { useEffect, useCallback } from 'react'

export default function useSearchBox(map, searchBox, setPosition) {
  const { event } = window.google.maps

  const handleListener = useCallback(() => {
    let listener;
    if(searchBox)
      listener = searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces()
        if(places.length) {
          const { lat: placeLat, lng: placeLng } = places[0].geometry.location
          const position = { lat: placeLat(), lng: placeLng() }
          setPosition(position)
          map.setCenter(position)
        }
      })
    return () => {
      if(listener)
        event.removeListener(listener)
    }
  }, [map, searchBox, setPosition, event])

  useEffect(handleListener, [handleListener])
}