import styled from 'styled-components'

export const ComponentDivider = styled.div`
  padding: 5rem 0;
  text-align: center;

  p {
    font-size: 2rem;
    text-transform: uppercase;
  }

  span {
    font-family: 'Cardo';
    font-size: 1rem;
  }

  h2 {
    text-transform: uppercase;
  }

  ${({ theme }) => theme.lg`
    p {

      font-size: 1.5rem;
    }

    span {
      font-size: 0.9rem;
    }
  `}

  ${({ theme }) => theme.md`
    p {

      font-size: 1.15rem;
    }

  `}

  ${({ theme }) => theme.sm`
    p {
      font-size: 0.9rem;
    }

    span {
      font-size: 0.7rem;
    }

  `}
`
