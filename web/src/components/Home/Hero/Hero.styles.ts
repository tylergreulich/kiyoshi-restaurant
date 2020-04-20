import styled from 'styled-components'
import RestaurantInterior from '../../../assets/img/restaurant-interior.jpg'

export const WelcomeJumbo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  /* background-image: url(${RestaurantInterior});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat; */

  div {
    strong {
      font-size: 5rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.main.primary};
    }
  }

  span {
    font-size: 2.5rem;
  }
`

export const KiyoshiLogo = styled.img`
  height: 100%;
  width: auto;
  position: absolute;
  z-index: -1;
  opacity: 0.2;
`

export const JumboOverlay = styled.div`
  width: 100%;
  height: 100%;
  /* background: blue; */
  opacity: 0.6;
  position: absolute;
`

export const Arrow = styled.section`
  cursor: pointer;
  a {
    padding-top: 80px;
  }
  a span {
    position: absolute;
    top: 80%;
    left: 50%;
    width: 30px;
    height: 50px;
    margin-left: -15px;
    border: 2px solid black;
    border-radius: 50px;
    box-sizing: border-box;
  }
  a span::before {
    position: absolute;
    top: 10px;
    left: 50%;
    content: '';
    width: 6px;
    height: 6px;
    margin-left: -3px;
    background-color: black;
    border-radius: 100%;
    box-sizing: border-box;
  }
  a span::after {
    position: absolute;
    bottom: -18px;
    left: 50%;
    width: 18px;
    height: 18px;
    content: '';
    margin-left: -9px;
    border-left: 1px solid black;
    border-bottom: 1px solid black;
    transform: rotate(-45deg);
    box-sizing: border-box;
  }
`
