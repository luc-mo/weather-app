# Weather App

Simple weather app based on [frontend challenge](https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv) by [devchallenges.io](https://devchallenges.io). The API used for getting the weather data is [OpenWeatherMap](https://openweathermap.org/api).

## Instalation
- Install dependencies: `yarn install`
- Run in development modd: `yarn start`
- Create production build: `yarn build`

## Requirements
Include the following varibles in the `.env` file:
```env
  NODE_PATH = ./src

  REACT_APP_API_URL = http://localhost:YOUR_SERVER_PORT

  REACT_APP_MAPS_API_KEY = YOUR_MAPS_API_KEY

  REACT_APP_API_ONECALL = https://api.openweathermap.org/data/2.5/onecall?appid=YOUR_OPENWEATHER_API_KEY&units=metric

  REACT_APP_API_REVERSE = https://api.openweathermap.org/geo/1.0/reverse?appid=YOUR_OPENWEATHER_API_KEY&limit=1
```

## Notes
- For development mode is necessary to run the API in a separate server.
- The Google Maps platform API key must have the `Maps Javascript` and `Places` APIs enabled.