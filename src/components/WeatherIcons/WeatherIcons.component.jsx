import { memo } from 'react'
import * as I from './components'

function WeatherIcons({ main, icon, size = '100%' }) {
  switch(main) {
    case 'Clear':
      if(icon === '01d') return <I.ClearDay size={size}/>
      else  return <I.ClearNight size={size}/>
    case 'Clouds':
      if(icon === '02d') return <I.CloudyDay size={size}/>
      else if(icon === '02n') return <I.CloudyNight size={size}/>
      else return <I.Cloudy size={size}/>
    case 'Rain':
    case 'Drizzle':
      return <I.Rainy size={size}/>
    case 'Snow':
      return <I.Snowy size={size}/>
    case 'Thunderstorm':
      return <I.Thunderstorm size={size}/>
    case 'Fog':
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Sand':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      return <I.Fog size={size}/>
    default:
      return null
  }
}

export default memo(WeatherIcons)