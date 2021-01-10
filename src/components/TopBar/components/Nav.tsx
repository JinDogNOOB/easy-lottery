import React from 'react';
import styled from 'styled-components';
import {NavLink, useHistory} from 'react-router-dom';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';



const Nav: React.FC = () => {
    const history = useHistory();

    return (
        <ButtonGroup size="large">
            <Button onClick={() => {history.push('/')}}>Home</Button>
            <Button onClick={() => {history.push('/lottery')}}>Lottery</Button>
            <Button onClick={() => {history.push('/wallet')}}>Wallet</Button>
            <Button onClick={() => {history.push('/law')}}>Law</Button>
        </ButtonGroup>
    )
}


export default Nav;
