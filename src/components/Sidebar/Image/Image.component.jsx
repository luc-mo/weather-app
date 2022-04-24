import { Fragment } from 'react'
import { useReducers } from 'hooks'
import { WeatherIcons } from 'components/WeatherIcons'

function Image() {
  const { current } = useReducers('weather')

  return <Fragment>
    <WeatherIcons
      main={current?.weather?.main}
      icon={current?.weather?.icon}
    />
  </Fragment>
}

export default Image