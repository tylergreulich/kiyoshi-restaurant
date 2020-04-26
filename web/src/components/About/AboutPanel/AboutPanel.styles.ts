import styled from 'styled-components'

export const ContentTextContainer = styled.div`
  width: 50%;
  padding-right: 7rem;
`

export const ContentTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.main.secondary};
  margin-bottom: 2.5rem;
`

export const ContentParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  font-weight: 500;
  font-family: 'Cardo';
`

export const ContentImageContainer = styled.div`
  width: 50%;
  align-self: center;

  img {
    width: 100%;
  }
`
