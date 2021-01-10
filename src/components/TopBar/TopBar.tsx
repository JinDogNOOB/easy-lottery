import React from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

import Logo from './components/Logo';
import Nav from './components/Nav'
import WalletSelector from '../WalletSelector';

const TopBar: React.FC = () => {
    const history = useHistory();
    return (
        <TopBarContainer>
            <Logo title="Easy Lottery" onClick={()=>{history.push('/')}}/>
            <Nav />
            <WalletSelector />
        </TopBarContainer>
    );
}

const TopBarContainer = styled.div`
display: flex;
justify-content: space-between;

margin: 0 auto;
max-width: 1200px;
width : 100%;
`




export default TopBar;