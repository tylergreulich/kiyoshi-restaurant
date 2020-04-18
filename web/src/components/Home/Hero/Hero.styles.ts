import styled from 'styled-components'
import RestaurantInterior from '../../../assets/img/restaurant-interior.jpg'

export const WelcomeJumbo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-image: url(${RestaurantInterior});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const JumboOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: blue;
  opacity: 0.6;
  position: absolute;
`
