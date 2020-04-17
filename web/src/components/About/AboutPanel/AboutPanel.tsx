import React from 'react'
import { AboutPanelProps } from './AboutPanel.interface'
import {
  AboutWrapper,
  ContentBox,
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
  <AboutWrapper>
    <div>
      <ContentBox>
        <ContentTextContainer>
          <ContentTitle>{title}</ContentTitle>
          <ContentParagraph>{paragraph}</ContentParagraph>
        </ContentTextContainer>
        <ContentImageContainer>
          <img src={image_url} />
        </ContentImageContainer>
      </ContentBox>
    </div>
  </AboutWrapper>
)
