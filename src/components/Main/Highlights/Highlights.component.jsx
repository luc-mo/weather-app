import { Fragment } from 'react'
import { WindStatus } from './WindStatus'
import { Humidity } from './Humidity'
import { Visibility } from './Visibility'
import { Pressure } from './Pressure'

import * as S from './Highlights.styles'

function Highlights() {
  return <Fragment>
    <S.H2>Today's Highlights</S.H2>
    <S.Highlights>
      <WindStatus/>
      <Humidity/>
      <Visibility/>
      <Pressure/>
    </S.Highlights>
  </Fragment>
}

export default Highlights