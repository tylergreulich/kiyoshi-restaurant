import React from 'react'
import AboutSectionImage from '../../../assets/img/people-in-a-restaurant.jpg'
import {
  AboutButton,
  AboutLink,
  AboutSectionWrapper,
  Information,
  Paragraphs,
  RestaurantImage
} from './AboutSection.styles'

export const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <RestaurantImage>
        <img src={AboutSectionImage} alt="About Image" />
      </RestaurantImage>
      <Information>
        <h2>Our Story</h2>
        <Paragraphs>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid dolore, error minus ad officia fugit iusto repellat,
            explicabo reiciendis inventore mollitia non, libero perspiciatis
            dicta eius consequatur et similique!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloremque aliquid dolore, error minus
            ad officia fugit iusto repellat, explicabo reiciendis inventore
            mollitia non, libero perspiciatis dicta eius consequatur et
            similique!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            aliquid dolore, error minus ad officia fugit iusto repellat,
            explicabo reiciendis inventore mollitia non, libero perspiciatis
            dicta eius consequatur et similique!Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloremque aliquid dolore, error minus
            ad officia fugit iusto repellat, explicabo reiciendis inventore
            mollitia non, libero perspiciatis dicta eius consequatur et
            similique!
          </p>
        </Paragraphs>
        <AboutLink to="/about">
          <AboutButton>Learn More</AboutButton>
        </AboutLink>
      </Information>
    </AboutSectionWrapper>
  )
}
