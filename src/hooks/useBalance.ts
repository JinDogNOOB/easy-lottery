import {useContext, useState, useEffect} from 'react';
import {Context} from '../contexts/Web3Provider';
import BigNumber from 'bignumber.js';
import useAccount from './useAccount';

import Web3 from 'web3';

const useBalance = () => {
    const {web3} = useContext(Context);
    const [amount, setAmount] = useState<BigNumber>();

    const address = useAccount();

    /* 
    this.web3.eth.getBalance(this.account, (err, balance) => {
  this.balance = this.web3.fromWei(balance, "ether") + " ETH"
});
    */
    useEffect(() => {
        async() => {
            try{
                if(address == undefined) return;
                let getBalanceResult = await web3?.eth.getBalance(address);
                if(getBalanceResult != undefined) 
                    setAmount(new BigNumber(getBalanceResult));
                
            }catch(e){
                console.log("getBalance failure");
                console.log(e);
            }  
        }  
    }, [web3?.currentProvider]);
    
    return amount;
}

export default useBalance;