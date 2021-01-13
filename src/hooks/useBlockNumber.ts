import BigNumber from 'bignumber.js';
import {useState} from 'react';
import useWeb3 from './useWeb3';
import useInterval from './useInterval';


const useBlockNumber = () => {
    const [blockNumber, setBlockNumber] = useState<BigNumber>(new BigNumber(-1));
    const web3 = useWeb3();

    useInterval(async()=>{
        if(web3 != undefined){
            setBlockNumber(new BigNumber(await web3.eth.getBlockNumber()));
            console.log("tick");
        }
    }, 5000)

    return blockNumber;
}

export default useBlockNumber;