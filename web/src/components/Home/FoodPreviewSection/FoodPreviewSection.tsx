import Axios from 'axios'
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
    Axios.get<FoodCategory[]>('/api/menu-preview')
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
