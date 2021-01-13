import BigNumber from 'bignumber.js';
import {useState, useEffect} from 'react';
import useBlockNumber from './useBlockNumber';
import useEasyLotteryContract from './useEasyLotteryContract';


export interface ELvarType{
    gameNumber: BigNumber,
    gatheredWei: BigNumber,
    startBlockNumber: BigNumber,
    purchasePeriod: BigNumber,
    weiForDev: BigNumber,
}

const initVal = {
    gameNumber: new BigNumber(-1),
    gatheredWei: new BigNumber(-1),
    startBlockNumber: new BigNumber(-1),
    purchasePeriod: new BigNumber(-1),
    weiForDev: new BigNumber(-1),
}

 const useEasyLotteryVarialbes = () => {
    const [ELvar, setELvar] = useState<ELvarType>(initVal);
    const blockNumber = useBlockNumber();
    const contract = useEasyLotteryContract();


    const fetchElvar = async() => {
        let temp = ELvar;
        if(contract != undefined){
             temp = {
                gameNumber: await contract.getGameNumber(),
                gatheredWei: await contract.getGatheredWei(),
                startBlockNumber: await contract.getStartBlockNumber(),
                purchasePeriod : await contract.getPurchasePeriod(),
                weiForDev : await contract.getDevWei()
            }
            setELvar(temp);
        }
    }

    useEffect(()=> {
        fetchElvar();
    }, [blockNumber])


    return ELvar;
}


export default useEasyLotteryVarialbes;

