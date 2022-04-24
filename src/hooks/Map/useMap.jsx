import { useState, useEffect, useCallback } from 'react'
import { useReducers } from 'hooks'

const defaults = {
  zoom: 15,
  scrollwheel: true,
  disableDefaultUI: true,
  disableDoubleClickZoom: true,
  clickableIcons: false,
  gestureHandling: 'greedy',
}

export default function useMap(mapRef, buttonRef, searchBoxRef) {
  const { Map, Marker, ControlPosition, places: { SearchBox }} = window.google.maps
  const { lat, lon: lng } = useReducers('geolocation')
  const [map, setMap] = useState(null)
  const [marker, setMarker] = useState(null)
  const [searchBox, setSearchBox] = useState(null)
  
  const handleMapMounted = useCallback(() => {
    const center = { lat, lng }
    const options = { center, ...defaults }
    const googleMap = new Map(mapRef.current, options)
    const mapMarker = new Marker({ position: center, map: googleMap })
    const mapSearchBox = new SearchBox(searchBoxRef.current)
    googleMap.controls[ControlPosition.TOP_CENTER].push(searchBoxRef.current)
    googleMap.controls[ControlPosition.RIGHT_BOTTOM].push(buttonRef.current)
    setMap(googleMap)
    setMarker(mapMarker)
    setSearchBox(mapSearchBox)
  }, [mapRef, buttonRef, searchBoxRef, lat, lng, Map, Marker, SearchBox, ControlPosition])

  useEffect(handleMapMounted, [handleMapMounted])
  return { map, marker, searchBox }
}