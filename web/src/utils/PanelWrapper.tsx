import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.figure`
  padding: 200px 100px;
`

const ContentBox = styled.div`
  display: flex;
  padding: 100px;
  margin-bottom: 3rem;
`

export const PanelWrapper: React.FC = ({ children }) => (
  <Wrapper>
    <div>
      <ContentBox>{children}</ContentBox>
    </div>
  </Wrapper>
)
