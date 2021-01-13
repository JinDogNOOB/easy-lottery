import { useContext, useState, useEffect } from 'react';
import { Context } from '../contexts/Web3Provider';
import BigNumber from 'bignumber.js';
import useAccount from './useAccount';

import Web3 from 'web3';
import useWeb3 from './useWeb3';

/**
 * @deprecated
 * use useWallet.ts instead
 */
const useBalance = () => {
    
    const [amount, setAmount] = useState<BigNumber>();

    const address = useAccount();
    const web3 = useWeb3();


    /* 
    this.web3.eth.getBalance(this.account, (err, balance) => {
  this.balance = this.web3.fromWei(balance, "ether") + " ETH"
});
    */

    const fetchBalance = async () => {
        try {
            if (address == undefined) return;
            if (web3 == undefined) return;
            let getBalanceResult = await web3.eth.getBalance(address);
            if (getBalanceResult != undefined)
                setAmount(new BigNumber(getBalanceResult));

        } catch (e) {
            console.log("getBalance failure");
            console.log(e);
        }
    }
    useEffect(() => {
        fetchBalance();
    }, [address]);

    /* useEffect(() => {
        // @ts-ignore: Unreachable code error
        window.ethereum.on('chainChanged', function (chainId) {
            fetchBalance();
            console.log("network changed" + chainId);
        });

    }, []) */

    return amount;
}

export default useBalance;