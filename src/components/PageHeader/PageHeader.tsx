import React from 'react'
import styled from 'styled-components'

import Container from '@material-ui/core/Container';


interface PageHeaderProps {
  icon: string,
  subtitle?: string,
  title?: string,
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <Container maxWidth="md">
      <StyledPageHeader>
        <StyledIcon>
            <StyledImage src={icon}/>
        </StyledIcon>
        <StyledTitlesContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledTitlesContainer>
      </StyledPageHeader>
    </Container>
  )
}

const StyledPageHeader = styled.div`
  display: flex;
  align-items: center;

  margin-top: 10%;

`

const StyledIcon = styled.div`
  height: 30%;
`

const StyledImage = styled.img`
max-width: 100%;
max-height: 100%;
`
const StyledTitlesContainer = styled.div`
display: flex;
align-itmes: center;
flex-direction: column;
`

const StyledTitle = styled.h1`
  font-family: 'Gmarket Sans Medium', sans-serif;
  font-size: 30px;
  font-weight: 700;
  margin: 0;
  padding: 0;
`

const StyledSubtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;
`

export default PageHeader
