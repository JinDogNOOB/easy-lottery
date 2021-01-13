import {useState, useEffect} from 'react';
import useBlockNumber from './useBlockNumber';
import useEasyLotteryVarialbes from './useEasyLotteryVariables';





const useGameStatus = () => {
    const [gameStatus, setGameStatus] = useState<string>("undefined");
    const ELvariables = useEasyLotteryVarialbes();
    const blockNumber = useBlockNumber();

    const fetchGameStatus = () => {
        let status = "undefined";
        
        let start = ELvariables.startBlockNumber;
        let end = start.plus(ELvariables.purchasePeriod);
        let watingTime = end.plus(50);
        let drawEnd = watingTime.plus(175); // 이월한계
        if(start < blockNumber && blockNumber < end){
            // 활발상태 응모 가능 
            status = "active";
        }else if(blockNumber >= end && blockNumber < watingTime){
            // 랜덤한 블록해쉬를 확실히 하기위해 기다리는 중
            status = "wating";
        }else if(blockNumber >= watingTime && blockNumber < drawEnd){
            status = "it's time to choose winners";
        }else{
            status = "이월각";
        }
        setGameStatus(status)
    }


    useEffect(()=>{
        fetchGameStatus();
    }, [ELvariables])


    return gameStatus;
}

export default useGameStatus;