import { Button } from 'components/Button'
import { settings } from 'icons'
import * as S from './Header.styles'

function Header() {
  return <S.Header>
    <Button icon={settings} alt='settings' rounded/>
  </S.Header>
}

export default Header