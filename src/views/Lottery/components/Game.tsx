import React, { useState } from 'react';
import styled from 'styled-components';
import useBlockNumber from '../../../hooks/useBlockNumber';
import useEasyLotteryContract from '../../../hooks/useEasyLotteryContract';
import useEasyLotteryVarialbes from '../../../hooks/useEasyLotteryVariables';
import useGameStatus, { GameStatusCode } from '../../../hooks/useGameStatus';
import useWallet from '../../../hooks/useWallet';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Game: React.FC = () => {
    const [drawNumber, setDrawNumber] = useState<number>(1);
    const blockNumber = useBlockNumber();
    const ELvariables = useEasyLotteryVarialbes();
    const gameStatus = useGameStatus();
    const contract = useEasyLotteryContract();

    const classes = useStyles();

    const onSetDrawNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        let temp = Number(e.target.value);
        if (temp < 1) {
            setDrawNumber(1);
        } else {
            if(temp == 101) setDrawNumber(1);
            else setDrawNumber(temp % 101);
        }
    }

    const onEnterDraw = async (number: number) => {
        let result = await contract?.passNumberNPay(number);
        if (result == true) alert(number + "번 응모 성공");
        else alert("응모 실패")
    }
    const onDraw = async () => {
        let result = await contract?.draw();
        if (result == true) alert("추첨 성공");
        else alert("추첨 실패");
    }
    const onWithdrawDevWei = async () => {
        let result = await contract?.withdrawDevWei();
        if (result == true) alert("개발비출금성공");
        else alert("출금 실패");
    }

    // game status 에 따라 game 조작 버튼 다르게 만들기 위해 
    let gameFunctionComponent = {};
    switch (gameStatus) {
        case GameStatusCode.ACTIVE: {
            gameFunctionComponent = (
                <TableRow>
                    <TableCell component="th" scope="row">
                        <input type="number" value={drawNumber} onChange={onSetDrawNumber} />
                    </TableCell>
                    <TableCell align="right">
                        <Button variant="contained" onClick={() => onEnterDraw(drawNumber)}>Pay</Button>
                    </TableCell>
                </TableRow>
            )
            break;
        }
        case GameStatusCode.WATING: {
            gameFunctionComponent = (
                <TableRow>
                    <TableCell component="th" scope="row">
                        {"wating 50block..."}
                    </TableCell>
                </TableRow>
            )
            break;
        }
        case GameStatusCode.TTDRAW: {
            gameFunctionComponent = (
                <TableRow>
                    <TableCell component="th" scope="row">
                        <Button variant="contained" onClick={() => onDraw()}>Draw</Button>
                    </TableCell>
                </TableRow>
            )
            break;
        }
        case GameStatusCode.EXPIRED: {
            gameFunctionComponent = (
                <TableRow>
                    <TableCell component="th" scope="row">
                        <Button variant="contained" onClick={() => onDraw()}>Draw</Button>
                    </TableCell>
                </TableRow>
            )
            break;
        }
        default: {
            gameFunctionComponent = (<p>unknown</p>)
        }
    }

    return (
        <StyledGame>
            <StyledGameElements>

                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableBody>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {"GameStatus"}
                                </TableCell>
                                <TableCell align="right">{gameStatus}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {"CurrentBlock"}
                                </TableCell>
                                <TableCell align="right">{blockNumber.toString()}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {"Gathered Wei"}
                                </TableCell>
                                <TableCell align="right">{ELvariables.gatheredWei.toString()}</TableCell>
                            </TableRow>

                            <TableRow>
                                <TableCell component="th" scope="row">
                                    {"Gathered Wei for Dev"}
                                </TableCell>
                                <TableCell align="right">{ELvariables.weiForDev.toString()}</TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </TableContainer>
            </StyledGameElements>

            <StyledGameElements>
                <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableBody>

                            {gameFunctionComponent}


                            <TableRow>
                                <TableCell component="th" scope="row">
                                    <input type="button" value="withdrawDevWei" onClick={() => onWithdrawDevWei()} />
                                </TableCell>
                            </TableRow>
    

                        </TableBody>
                    </Table>
                </TableContainer>
            </StyledGameElements>

        </StyledGame>
    )

}

const StyledGame = styled.div`
`

const StyledGameElements = styled.ul`
`



export default Game;