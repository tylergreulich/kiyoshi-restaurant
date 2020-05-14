import React from 'react'
import { useDispatch } from 'react-redux'
import Fade from 'react-reveal'
import { AboutSection } from '../../components/Home/AboutSection/AboutSection'
import { FoodPreviewSection } from '../../components/Home/FoodPreviewSection/FoodPreviewSection'
import { Hero } from '../../components/Home/Hero/Hero'
import { getFoodCategories } from '../../store/foodCategories/foodCategories.actions'
import { ComponentDivider } from './Home.styles'

export const Home = () => {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getFoodCategories())
  })

  return (
    <>
      <Hero />
      <ComponentDivider>
        <div>
          <Fade>
            <p>COVID 19 | We are still here to serve you during these times!</p>
            <br />
            <span>
              We continue to practice the highest level of cleanliness and
              sanitation in all our restaurants to ensure the safety of our
              guests when picking up with us.
            </span>
          </Fade>
        </div>
      </ComponentDivider>
      <AboutSection />
      <ComponentDivider>
        <Fade>
          <p>We have everything you need to kill your hunger</p>
        </Fade>
      </ComponentDivider>
      <FoodPreviewSection />
    </>
  )
}
