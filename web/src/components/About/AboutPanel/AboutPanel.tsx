import React from 'react'
import { PanelWrapper } from '../../../utils/PanelWrapper'
import { AboutPanelProps } from './AboutPanel.interface'
import {
  ContentImageContainer,
  ContentParagraph,
  ContentTextContainer,
  ContentTitle
} from './AboutPanel.styles'

export const AboutPanel: React.FC<AboutPanelProps> = ({
  title,
  paragraph,
  image_url
}) => (
  <PanelWrapper>
    <ContentTextContainer>
      <ContentTitle>{title}</ContentTitle>
      <ContentParagraph>{paragraph}</ContentParagraph>
    </ContentTextContainer>
    <ContentImageContainer>
      <img src={image_url} alt={`${image_url}`} />
    </ContentImageContainer>
  </PanelWrapper>
)
