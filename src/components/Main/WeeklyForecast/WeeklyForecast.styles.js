import styled from 'styled-components'

export const WeeklyForecast = styled.section`
  display: grid;
  width: 100%;
  margin-bottom: 4rem;
  gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
`