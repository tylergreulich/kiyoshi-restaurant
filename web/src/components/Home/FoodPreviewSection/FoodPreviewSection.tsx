import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { FoodCategory } from '../../../common/interfaces/FoodCategory.interface'
import {
  Content,
  FoodButton,
  FoodContainer,
  FoodDescription,
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
    axios
      .get<FoodCategory[]>('/api/food-categories/all')
      .then(({ data }) => setFoodCategories(data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <FoodPreviewWrapper>
      <h2>We have everything you need to kill your hunger</h2>
      <FoodPreviewContainer>
        <FoodSlider>
          <SlidingSystem>
            {foodCategories &&
              foodCategories.map(({ id, title, description, image_url }) => (
                <Slide key={id}>
                  <Content>
                    <FoodContainer>
                      <FoodTitle>{title}</FoodTitle>
                      <FoodDescription>{description}</FoodDescription>
                      <Link to={`/menu/${id}`}>
                        <FoodButton>View More</FoodButton>
                      </Link>
                    </FoodContainer>
                    <div>
                      <img
                        src={`${image_url}`}
                        style={{
                          width: '95%',
                          maxWidth: '250px'
                        }}
                      />
                    </div>
                  </Content>
                </Slide>
              ))}
          </SlidingSystem>
        </FoodSlider>
      </FoodPreviewContainer>
    </FoodPreviewWrapper>
  )
}
