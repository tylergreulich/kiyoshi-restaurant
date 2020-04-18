import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { MyBaseButton } from './../../../utils/styles/MyBaseButton'

export const AboutSectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100vh;
`

export const RestaurantImage = styled.div`
  overflow: hidden;
  height: 100%;
  img {
    width: 100%;
  }
`

export const Information = styled.div`
  padding: 100px 50px 140px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    text-transform: uppercase;
    font-weight: 500;
  }
`

export const Paragraphs = styled.div`
  display: grid;
  font-family: 'Cardo';
  grid-template-columns: 50% 50%;
  grid-gap: 20px;
  line-height: 1.7;
  color: #525e66;
  font-size: 1.1rem;
  margin: 4rem 0 4.5rem;
`

export const AboutLink = styled(Link)`
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: black;
  margin-top: 1rem;
  font-weight: 700;
`

export const AboutButton = styled(MyBaseButton)`
  padding: 0.75rem 1.5rem;
`
