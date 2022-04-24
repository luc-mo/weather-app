import { memo } from 'react'
import * as S from './Button.styles'

function Button({
  children,
  icon = null,
  innerRef = null,
  alt = '',
  ...rest
}) {
  return <S.Button ref={innerRef} {...rest}>
    {children}
    {icon && <S.ButtonImage
      rounded={rest.rounded}
      src={icon}
      alt={alt}
    />}
  </S.Button>
}

export default memo(Button)