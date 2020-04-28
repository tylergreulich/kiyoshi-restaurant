import styled from 'styled-components'

export const MyBaseButton = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.main.primary};
  color: ${({ theme }) => theme.main.white};
  text-transform: uppercase;
  border-radius: 2.5rem;
  border: 3px solid transparent;
  font-size: 1.25rem;
  transition: all 0.2s ease-in-out;
  margin-top: 0.75rem;
  font-family: 'Montserrat';
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.main.white};
    border: 3px solid ${({ theme }) => theme.main.primary};
    color: ${({ theme }) => theme.main.primary};
  }
`
