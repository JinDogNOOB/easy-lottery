import { useContext, useState, useEffect } from 'react';
import { Context } from '../contexts/Web3Provider';
import BigNumber from 'bignumber.js';

import Web3 from 'web3';
import useIsMetamaskAble from './useIsMetamaskAble';
import useWeb3 from './useWeb3';

/**
 * @deprecated
 * use useWallet instead
 */
const useAccount = () => {

    const [address, setAddress] = useState<string>();
    const isAble = useIsMetamaskAble();
    const web3 = useWeb3();


    useEffect(() => {
        if (isAble) {
            // @ts-ignore: Unreachable code error
            window.ethereum.on('accountsChanged', function (accounts) {
                setAddress(accounts[0]);
                console.log("account changed");
            });
            fetchAccount();
        }

        // @ts-ignore: Unreachable code error
        /*         window.ethereum.on('networkChanged', function (networkId) {
                    // fetchAccount();
                    console.log("network changed" + networkId);
                }); */

    }, [isAble])

    const fetchAccount = async () => {
        try {
            let getAccountResult = await web3?.eth.getAccounts();
            if (getAccountResult != undefined) {
                setAddress(getAccountResult[0]);
            }
        } catch (e) {
            console.log("getAccounts failure");
            console.log(e);
        }
        console.log("test" + (await web3?.eth.getAccounts()));
    }



    /*     useEffect(() => {
            async function fetchAccount(){
                try{
                    let getAccountResult = await web3?.eth.getAccounts();
                    if(getAccountResult != undefined){
                        setAddress(getAccountResult[0]);
                    }
                }catch(e){
                    console.log("getAccounts failure");
                    console.log(e);
                }
    
                console.log("test" + (await web3?.eth.getAccounts()));
            }
            fetchAccount();
            
            
        }, [web3?.currentProvider]); */

    return address;
}

export default useAccount;