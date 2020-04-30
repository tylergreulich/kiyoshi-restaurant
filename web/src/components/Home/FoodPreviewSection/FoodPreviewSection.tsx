import Axios from 'axios'
import React from 'react'
import Fade from 'react-reveal'
import { Link } from 'react-router-dom'
import { FoodCategory } from '../../../utils/interfaces/FoodCategory.interface'
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
  const [foodCategories, setFoodCategories] = React.useState<
    FoodCategory[] | null
  >(null)

  React.useEffect(() => {
    Axios.get<FoodCategory[]>('/api/food-categories/all')
      .then(({ data }) => setFoodCategories(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <FoodPreviewWrapper>
      <FoodPreviewContainer>
        <FoodSlider>
          <SlidingSystem>
            {foodCategories &&
              foodCategories.map(({ id, title, description, image_url }) => (
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
              ))}
          </SlidingSystem>
        </FoodSlider>
      </FoodPreviewContainer>
    </FoodPreviewWrapper>
  )
}
