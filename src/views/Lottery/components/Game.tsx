import React from 'react';
import styled from 'styled-components';
import useWallet from '../../../hooks/useWallet';


const Game : React.FC = () => {
    const {address, balance} = useWallet();
    
    return(
        <StyledGame>
            <StyledGameElements>
                <li>Game Status</li>
                <li></li>
                <li>Block time : </li>
                <li>Gathered Wei : </li>
                <li>Gathered Wei for Dev: </li>
            </StyledGameElements>
            <StyledGameElements>
                <li></li>
                <li>draw</li>
                <li>withdrawDevWei</li>
                  
            </StyledGameElements>

        </StyledGame>
    )

}

const StyledGame = styled.div`
`

const StyledGameElements = styled.ul`
`




export default Game;