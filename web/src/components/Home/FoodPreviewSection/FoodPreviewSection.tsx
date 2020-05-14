import React from 'react'
import { useSelector } from 'react-redux'
import Fade from 'react-reveal'
import { Link } from 'react-router-dom'
import { RootState } from '../../../store/rootReducer'
import {
  Content,
  FoodButton,
  FoodContainer,
  FoodDescription,
  FoodImageWrapper,
  FoodPreviewContainer,
  FoodPreviewWrapper,
  FoodSlider,
  FoodTitle,
  Slide,
  SlidingSystem
} from './FoodPreviewSection.styles'

export const FoodPreviewSection = () => {
  const { foodCategoryItems } = useSelector(
    (state: RootState) => state.foodCategories
  )

  return (
    <FoodPreviewWrapper>
      <FoodPreviewContainer>
        <FoodSlider>
          <SlidingSystem>
            {foodCategoryItems &&
              foodCategoryItems.map(
                ({ id, title, description, image_url }: any) => (
                  <Slide key={id}>
                    <Content>
                      <Fade>
                        <FoodContainer>
                          <FoodTitle>{title}</FoodTitle>
                          <FoodDescription>{description}</FoodDescription>
                          <Link to={`/menu`}>
                            <FoodButton>View More</FoodButton>
                          </Link>
                        </FoodContainer>
                        <FoodImageWrapper>
                          <img
                            src={`${image_url}`}
                            style={{
                              width: '95%',
                              maxWidth: '250px'
                            }}
                            alt={`${image_url}`}
                          />
                        </FoodImageWrapper>
                      </Fade>
                    </Content>
                  </Slide>
                )
              )}
          </SlidingSystem>
        </FoodSlider>
      </FoodPreviewContainer>
    </FoodPreviewWrapper>
  )
}
