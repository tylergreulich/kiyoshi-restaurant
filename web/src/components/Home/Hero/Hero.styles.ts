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

  ${({ theme }) => theme.lg`
    div {
      strong {
        font-size: 4rem;
      }

      span {
        font-size: 2.25rem
      }
    }
  `}

  ${({ theme }) => theme.sm`
    div {
      strong {
        font-size: 3rem;
      }

      span {
        font-size: 2rem;
      }
    }
  `}

  span {
    z-index: 10;
  }

  #welcome {
    animation: ${fadeIn} 0.3s ease-in 0.1s;
    animation-fill-mode: backwards;
  }

  #to {
    animation: ${fadeIn} 0.3s ease-in 0.4s;
    animation-fill-mode: backwards;
  }

  #kiyoshi {
    animation: ${fadeIn} 0.3s ease-in 0.7s;
    animation-fill-mode: backwards;
  }

  #teriyaki {
    animation: ${fadeIn} 0.3s ease-in 1s;
    animation-fill-mode: backwards;
  }

  #and {
    animation: ${fadeIn} 0.3s ease-in 1.3s;
    animation-fill-mode: backwards;
  }

  #sushi {
    animation: ${fadeIn} 0.3s ease-in 1.6s;
    animation-fill-mode: backwards;
  }

  #arrow {
    animation: ${fadeIn} 0.3s ease-in 1.9s;
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
    transform: translateY(300%);
    top: 80%;
    left: 50%;
    width: 30px;
    height: 50px;
    margin-left: -15px;
    border-radius: 50px;
    box-sizing: border-box;

    ${({ theme }) => theme.xl`
      transform: translateY(200%);
    `}

    ${({ theme }) => theme.lg`
      transform: translateY(175%);
    `}

    ${({ theme }) => theme.md`
      transform: translateY(150%);
    `}
    ${({ theme }) => theme.sm`
      transform: translateY(75%);
    `}
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

    ${({ theme }) => theme.lg`
      width: 25px;
      height: 25px;
    `}

    ${({ theme }) => theme.md`
      width: 20px;
      height: 20px;
    `}
  }
`
