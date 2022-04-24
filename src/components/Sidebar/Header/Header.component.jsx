import { memo } from 'react'
import { useDispatch } from 'react-redux'
import { useReducers } from 'hooks'
import { toggleSearchbar } from 'store/actions/creators'

import { Button } from 'components/Button'
import { search, close } from 'icons'
import * as S from './Header.styles'

function Header() {
  const dispatch = useDispatch()
  const { isSearchbarOpen } = useReducers('searchbar')

  const handleToggle = () => {
    dispatch(toggleSearchbar())
  }

  return <S.Header>
    {!isSearchbarOpen && <Button
      onClick={handleToggle}
      children='Search for places'
      icon={search}
      alt='search'
    />}
    {isSearchbarOpen && <Button
      onClick={handleToggle}
      icon={close}
      alt='close'
      rounded
    />}
  </S.Header>
}

export default memo(Header)