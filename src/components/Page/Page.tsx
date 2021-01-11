import React from 'react';
import styled from 'styled-components';


const Page: React.FC = ({children}) => {
    return (
        <StyledPage>
            <StyledMain>
                {children}
            </StyledMain>

        </StyledPage>
    );
}


const StyledPage = styled.div``

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: auto;
`

export default Page;