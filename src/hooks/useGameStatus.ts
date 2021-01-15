import {useState, useEffect} from 'react';
import useBlockNumber from './useBlockNumber';
import useEasyLotteryVarialbes from './useEasyLotteryVariables';

export enum GameStatusCode{
    ACTIVE = 'active',
    WATING = 'wating',
    TTDRAW = 'time to draw',
    EXPIRED = 'expired',
    UNKNOWN = 'unknown',
}


const useGameStatus = () => {
    const [gameStatus, setGameStatus] = useState<GameStatusCode>(GameStatusCode.UNKNOWN);
    const ELvariables = useEasyLotteryVarialbes();
    const blockNumber = useBlockNumber();

    const fetchGameStatus = () => {
        let status = GameStatusCode.UNKNOWN;
        
        let start = ELvariables.startBlockNumber;
        let end = start.plus(ELvariables.purchasePeriod);
        let watingTime = end.plus(50);
        let drawEnd = watingTime.plus(175); // 이월한계
        if(start < blockNumber && blockNumber < end){
            // 활발상태 응모 가능 
            status = GameStatusCode.ACTIVE;
        }else if(blockNumber >= end && blockNumber < watingTime){
            // 랜덤한 블록해쉬를 확실히 하기위해 기다리는 중
            status = GameStatusCode.WATING;
        }else if(blockNumber >= watingTime && blockNumber < drawEnd){
            status = GameStatusCode.TTDRAW;
        }else{
            status = GameStatusCode.EXPIRED;
        }
        setGameStatus(status)
    }


    useEffect(()=>{
        fetchGameStatus();
    }, [ELvariables])


    return gameStatus;
}

export default useGameStatus;