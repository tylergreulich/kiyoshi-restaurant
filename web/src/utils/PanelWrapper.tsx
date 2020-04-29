import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.figure`
  padding: 200px 100px;

  ${({ theme }) => theme.xl`
    padding: 100px;
  `}

  ${({ theme }) => theme.lg`
    padding: 100px 50px;
  `}

  ${({ theme }) => theme.md`
    padding: 100px 10px;
  `}

  ${({ theme }) => theme.sm`
    padding: 100px 0;
  `}
`

const ContentBox = styled.div`
  display: flex;
  padding: 100px;
  margin-bottom: 3rem;

  ${({ theme }) => theme.xl`
    flex-direction: column-reverse;
  `}
`

export const PanelWrapper: React.FC = ({ children }) => (
  <Wrapper>
    <div>
      <ContentBox>{children}</ContentBox>
    </div>
  </Wrapper>
)
