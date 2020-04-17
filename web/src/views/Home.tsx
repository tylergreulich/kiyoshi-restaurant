import React from 'react'
import { AboutSection } from '../components/Home/AboutSection/AboutSection'
import { FoodPreviewSection } from '../components/Home/FoodPreviewSection/FoodPreviewSection'
import { Hero } from '../components/Home/Hero/Hero'

export const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <FoodPreviewSection />
    </>
  )
}
