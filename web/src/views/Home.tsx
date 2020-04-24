import React from 'react'
import styled from 'styled-components'
import { AboutSection } from '../components/Home/AboutSection/AboutSection'
import { FoodPreviewSection } from '../components/Home/FoodPreviewSection/FoodPreviewSection'
import { Hero } from '../components/Home/Hero/Hero'

const ComponentDivider = styled.div`
  padding: 5rem 0;
  text-align: center;

  p {
    font-size: 2rem;
    text-transform: uppercase;
  }

  span {
    font-family: 'Cardo';
    font-size: 1rem;
  }

  h2 {
    text-transform: uppercase;
  }
`

export const Home = () => {
  return (
    <>
      <Hero />
      <ComponentDivider>
        <div>
          <p>COVID 19 | We are still here to serve you during these times!</p>
          <br />
          <span>
            We continue to practice the highest level of cleanliness and
            sanitation in all our restaurants to ensure the safety of our guests
            when picking up with us.
          </span>
        </div>
      </ComponentDivider>
      <AboutSection />
      <ComponentDivider>
        <h2>We have everything you need to kill your hunger</h2>
      </ComponentDivider>
      <FoodPreviewSection />
    </>
  )
}
