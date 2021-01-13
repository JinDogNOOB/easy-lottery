import React, {useState} from 'react';
import styled from 'styled-components';
import useBlockNumber from '../../../hooks/useBlockNumber';
import useEasyLotteryContract from '../../../hooks/useEasyLotteryContract';
import useEasyLotteryVarialbes from '../../../hooks/useEasyLotteryVariables';
import useGameStatus from '../../../hooks/useGameStatus';
import useWallet from '../../../hooks/useWallet';


const Game : React.FC = () => {
    const {address, balance} = useWallet();
    const blockNumber = useBlockNumber();
    const ELvariables = useEasyLotteryVarialbes();
    const gameStatus = useGameStatus();

    return(
        <StyledGame>
            <StyledGameElements>
                <li>Game Status : {gameStatus}</li>
                <li>Block time : {blockNumber.toString()}</li>
                <li>Gathered Wei : {ELvariables.gatheredWei.toString()}</li>
                <li>Gathered Wei for Dev: {ELvariables.weiForDev.toString()}</li>
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