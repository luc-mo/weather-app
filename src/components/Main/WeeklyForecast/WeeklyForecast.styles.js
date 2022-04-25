import styled from 'styled-components'

export const WeeklyForecast = styled.section`
  display: grid;
  width: 100%;
  margin-bottom: 4rem;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
`