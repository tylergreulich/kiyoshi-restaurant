import styled, { keyframes } from 'styled-components'
import PersonInKitchen from '../../../assets/img/person-in-kitchen.jpg'

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
  background-image: url(${PersonInKitchen});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  div {
    z-index: 10;

    strong {
      font-size: 6rem;
      text-transform: uppercase;
      color: ${({ theme }) => theme.main.primary};
    }

    span {
      margin-right: 1rem;
      z-index: 10;
      font-size: 2.75rem;
      color: ${({ theme }) => theme.main.white};
    }
  }

  span {
    z-index: 10;
  }

  #welcome {
    animation: ${fadeIn} 0.35s ease-in 0.1s;
    animation-fill-mode: backwards;
  }

  #to {
    animation: ${fadeIn} 0.35s ease-in 0.36s;
    animation-fill-mode: backwards;
  }

  #kiyoshi {
    animation: ${fadeIn} 0.35s ease-in 0.61s;
    animation-fill-mode: backwards;
  }

  #teriyaki {
    animation: ${fadeIn} 0.35s ease-in 0.86s;
    animation-fill-mode: backwards;
  }

  #and {
    animation: ${fadeIn} 0.35s ease-in 1.11s;
    animation-fill-mode: backwards;
  }

  #sushi {
    animation: ${fadeIn} 0.35s ease-in 1.36s;
    animation-fill-mode: backwards;
  }

  #arrow {
    animation: ${fadeIn} 0.35s ease-in 1.61s;
    animation-fill-mode: backwards;
  }
`

export const JumboOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.main.black};
  opacity: 0.75;
  position: absolute;
`

export const Arrow = styled.section`
  position: relative;
  span {
    position: absolute;
    padding-top: 300px;
    top: 80%;
    left: 50%;
    width: 30px;
    height: 50px;
    margin-left: -15px;
    border-radius: 50px;
    box-sizing: border-box;
  }
  span::before {
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
  span::after {
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
