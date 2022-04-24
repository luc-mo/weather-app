import * as icons from '../icons'

const degrees = {
  north:     (deg) => deg > 337.5 || deg < 22.50,
  northEast: (deg) => deg > 22.50 && deg < 67.50,
  east:      (deg) => deg > 67.50 && deg < 112.5,
  southEast: (deg) => deg > 112.5 && deg < 157.5,
  south:     (deg) => deg > 157.5 && deg < 202.5,
  southWest: (deg) => deg > 202.5 && deg < 247.5,
  west:      (deg) => deg > 247.5 && deg < 292.5,
  northWest: (deg) => deg > 292.5 && deg < 337.5,
}

const directions = {
  north:     { dir: 'N',  name: 'North',     arrow: icons.north,     size: '28' },
  northEast: { dir: 'NE', name: 'NorthEast', arrow: icons.northEast, size: '38' },
  east:      { dir: 'E',  name: 'East',      arrow: icons.east,      size: '26' },
  southEast: { dir: 'SE', name: 'SouthEast', arrow: icons.southEast, size: '38' },
  south:     { dir: 'S',  name: 'South',     arrow: icons.south,     size: '26' },
  southWest: { dir: 'SW', name: 'SouthWest', arrow: icons.southWest, size: '38' },
  west:      { dir: 'W',  name: 'West',      arrow: icons.west,      size: '26' },
  northWest: { dir: 'NW', name: 'NorthWest', arrow: icons.northWest, size: '38' }
}

export function handleDirection(deg) {
  if(degrees.north(deg))          return directions.north
  else if(degrees.northEast(deg)) return directions.northEast
  else if(degrees.east(deg))      return directions.east
  else if(degrees.southEast(deg)) return directions.southEast
  else if(degrees.south(deg))     return directions.south
  else if(degrees.southWest(deg)) return directions.southWest
  else if(degrees.west(deg))      return directions.west
  else if(degrees.northWest(deg)) return directions.northWest
  else return null
}