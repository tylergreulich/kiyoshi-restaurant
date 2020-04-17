import styled from 'styled-components'

export const WelcomeJumbo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background: ${({ theme }) => theme.main.primary};
`
