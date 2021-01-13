import {useState, useEffect} from 'react';
import EasyLotteryContract from '../easy-lottery'
import useWallet from './useWallet';
import useWeb3 from './useWeb3';




const useEasyLotteryContract = () => {
    const [contract, setContract] = useState<EasyLotteryContract>();
    const {address} = useWallet();
    const web3 = useWeb3();

    useEffect(()=>{
        if(web3 == undefined){}
        else{
            setContract(new EasyLotteryContract(web3, address));
        }
    }, [address]);
    
    return contract;
}

export default useEasyLotteryContract;