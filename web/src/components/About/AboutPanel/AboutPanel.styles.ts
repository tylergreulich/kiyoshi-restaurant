import styled from 'styled-components'

export const ContentTextContainer = styled.div`
  width: 50%;
  padding-right: 7rem;

  ${({ theme }) => theme.xl`
    width: 100%;
    padding: 0 7%;
  `}
`

export const ContentTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.main.secondary};
  margin-bottom: 2.5rem;

  ${({ theme }) => theme.xl`
    text-align: center;
    margin-top: 2.5rem;
  `}
`

export const ContentParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  font-weight: 500;
  font-family: 'Cardo';

  ${({ theme }) => theme.xl`
    font-size: 1.4rem;
  `}

  ${({ theme }) => theme.lg`
    font-size: 1.2rem;
  `}
`

export const ContentImageContainer = styled.div`
  width: 50%;
  align-self: center;

  ${({ theme }) => theme.xl`
    width: 100%;
  `}

  img {
    width: 100%;
  }
`
