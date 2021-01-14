import React, {useState} from 'react';
import styled from 'styled-components';
import useBlockNumber from '../../../hooks/useBlockNumber';
import useEasyLotteryContract from '../../../hooks/useEasyLotteryContract';
import useEasyLotteryVarialbes from '../../../hooks/useEasyLotteryVariables';
import useGameStatus from '../../../hooks/useGameStatus';
import useWallet from '../../../hooks/useWallet';


const Game : React.FC = () => {
    const [drawNumber, setDrawNumber] = useState<number>(1);
    const blockNumber = useBlockNumber();
    const ELvariables = useEasyLotteryVarialbes();
    const gameStatus = useGameStatus();
    const contract = useEasyLotteryContract();

    const onSetDrawNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        let temp = Number(e.target.value);
        if (Number.isNaN(temp)){
            alert("1~100 숫자만 입력하세요");
        }else{
            setDrawNumber(Number(e.target.value)%100);
        }
    }
    
    const onEnterDraw = async(number: number) => {
        let result = await contract?.passNumberNPay(number);
        if(result == true) alert(number + "번 응모 성공");
        else alert("응모 실패")
    }
    const onDraw = async() => {
        let result = await contract?.draw();
        if(result == true) alert("추첨 성공");
        else alert("추첨 실패");
    }
    const onWithdrawDevWei = async() => {
        let result = await contract?.withdrawDevWei();
        if (result == true) alert("개발비출금성공");
        else alert("출금 실패");
    }
    
    return(
        <StyledGame>
            <StyledGameElements>
                <li>Game Status : {gameStatus}</li>
                <li>Block time : {blockNumber.toString()}</li>
                <li>Gathered Wei : {ELvariables.gatheredWei.toString()}</li>
                <li>Gathered Wei for Dev: {ELvariables.weiForDev.toString()}</li>
            </StyledGameElements>
            <StyledGameElements>
                <li><input type="number" value={drawNumber} onChange={onSetDrawNumber}/></li>
                <li><input type="button" value="pay" onClick={() => onEnterDraw(drawNumber)}/></li>
                <li><input type="button" value="draw" onClick={() => onDraw()}/></li>
                <li><input type="button" value="withdrawDevWei" onClick={() => onWithdrawDevWei()}/></li>
                  
            </StyledGameElements>

        </StyledGame>
    )

}

const StyledGame = styled.div`
`

const StyledGameElements = styled.ul`
`




export default Game;