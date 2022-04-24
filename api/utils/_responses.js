import { capitalize } from './_capitalize'

export function basicResponse(response) {
  const {
    dt: date,
    pressure,
    humidity,
    visibility,
    wind_speed: windSpeed,
    wind_deg: windDeg,
    weather: [{ main, icon, description: desc }]
  } = response
  const description = capitalize(desc)
  
  return {
    date,
    pressure,
    humidity,
    visibility,
    windSpeed,
    windDeg,
    weather: {
      main,
      icon,
      description
    }
  }
}

export function currentResponse(currentWeather) {
  const { temp, feels_like: feelsLike } = currentWeather
  const basic = basicResponse(currentWeather)
  return { ...basic, temp, feelsLike }
}

export function dailyResponse(dailyWeather) {
  return dailyWeather.slice(1).map(weather => {
    const basic = basicResponse(weather)
    const { temp: { min, max }} = weather
    return { ...basic, temp: { min, max }}
  })
}

export function hourlyResponse(hourlyWeather) {
  return hourlyWeather.map(currentResponse)
}