import React from 'react'
import styled from 'styled-components'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';





interface PageHeaderProps {
  icon: string,
  subtitle?: string,
  title?: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {

  return (
      <StyledPageHeader>
        <StyledIcon>
          <StyledImage src={icon} />
        </StyledIcon>
        <StyledTitlesContainer>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledTitlesContainer>
      </StyledPageHeader>

  )
}



const StyledPageHeader = styled.div`
  display: flex;
  align-items: center;
  
  margin-top: 3rem;

`

const StyledIcon = styled.div`
  height: 20rem;
  width: 20rem;
  margin-right: 2.5rem;
`

const StyledImage = styled.img`
max-width: 100%;
max-height: 100%;
`
const StyledTitlesContainer = styled.div`
height: 20rem;
width: 20rem;

display: flex;
justify-content: center;
flex-direction: column;
`

const StyledTitle = styled.h1`
  font-family: 'Gmarket Sans Medium', sans-serif;
  font-size: 30px;
  font-weight: 700;
`

const StyledSubtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
`

export default PageHeader
