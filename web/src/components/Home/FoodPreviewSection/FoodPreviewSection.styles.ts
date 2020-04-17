import styled from 'styled-components'
import { MyBaseButton } from '../../../utils/styles/MyBaseButton'

export const FoodPreviewWrapper = styled.section`
  background: #f4f8fb;
  padding: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
`
export const FoodPreviewContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  position: relative;
`
export const FoodSlider = styled.div`
  width: 100%;
  max-width: 1400px;
  overflow: hidden;
  position: relative;
  font-size: 0;
`
export const SlidingSystem = styled.div`
  white-space: nowrap;
  transform: translate3d(-0%, 0, 0);
  transition: all 0.3s ease-in-out;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
`

export const Slide = styled.figure`
  width: 100%;
  position: relative;
  height: 350px;
  display: inline-block;
  white-space: normal;
`
export const Content = styled.div`
  position: absolute;
  z-index: 2;
  padding: 20px;
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`
export const FoodContainer = styled.div`
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`
export const FoodTitle = styled.div`
  color: ${({ theme }) => theme.main.secondary};
  font-size: 2rem;
  font-weight: 900;
  margin-bottom: 2rem;
  font-family: 'Montserrat';
`
export const FoodDescription = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 1.8;
  color: #7a8d99;
  font-family: 'Cardo';
`
export const FoodButton = styled(MyBaseButton)`
  margin-top: 1rem;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
`
export const FoodImageWrapper = styled.div``
