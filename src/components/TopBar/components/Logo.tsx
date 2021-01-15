import React from 'react';
import styled from 'styled-components';

interface LogoProps{
    title? : string,
    onClick? : ()=>void,
}

const Logo: React.FC<LogoProps> = ({title, onClick}) => {
    return (
        <LogoContainer onClick={onClick}>
            <Img src={process.env.PUBLIC_URL + '/logo192.png'} />
            <Title>
                {title}
            </Title>

        </LogoContainer>
    )
}

const LogoContainer = styled.div`
display:flex;
align-itmes: center;

cursor: pointer;

`


const Img = styled.img`
width: 3rem;
height: 3rem;
`

const Title = styled.div`
font-size: 2rem;
font-weight: bolder;
text-align: center;
vertical-align: middle;
margin-left: 0.7rem;

`

export default Logo;
