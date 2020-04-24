import styled, { keyframes } from 'styled-components'
import RestaurantInterior from '../../../assets/img/restaurant-interior.jpg'

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

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

  div {
    z-index: 10;

    strong {
      font-size: 6rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.main.primary};
      animation: ${fadeIn} 0.5s ease-in 0.75s;
      animation-fill-mode: backwards;
    }
  }

  span {
    z-index: 10;
    font-size: 3.5rem;
    color: ${({ theme }) => theme.main.white};
    animation: ${fadeIn} 0.3s ease-in 0.2s;
    animation-fill-mode: backwards;
  }
`

export const JumboOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.main.black};
  opacity: 0.6;
  position: absolute;
`

export const Arrow = styled.section`
  animation: ${fadeIn} 0.25s ease-in 0.5s;
  animation-fill-mode: backwards;
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
    border-radius: 100%;
    box-sizing: border-box;
  }
  a span::after {
    position: absolute;
    bottom: -18px;
    left: 50%;
    width: 30px;
    height: 30px;
    content: '';
    margin-left: -9px;
    border-left: 5px solid ${({ theme }) => theme.main.white};
    border-bottom: 5px solid ${({ theme }) => theme.main.white};
    transform: rotate(-45deg);
    box-sizing: border-box;
  }
`
