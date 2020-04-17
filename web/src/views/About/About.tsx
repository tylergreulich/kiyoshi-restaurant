import React from 'react'
import { AboutPanel } from '../../components/About/AboutPanel/AboutPanel'
import { aboutPanelData } from './aboutPanelData'

export const About = () => (
  <>
    {aboutPanelData.map(({ title, paragraph, image_url }) => (
      <AboutPanel title={title} paragraph={paragraph} image_url={image_url} />
    ))}
  </>
)
