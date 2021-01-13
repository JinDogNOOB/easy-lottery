import React, {createContext, useEffect, useState} from 'react';
import BigNumber from 'bignumber.js';
import useWeb3 from '../../hooks/useWeb3';

export interface WalletContext{
    address: string,
    balance: BigNumber,
}

export const Context = createContext<WalletContext>({
    address: "",
    balance: new BigNumber(0),
})

const WalletProvider: React.FC = ({children}) => {
    const [address, setAddress] = useState<string>("");
    const [balance, setBalance] = useState<BigNumber>(new BigNumber(0));

    const web3 = useWeb3();

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

    const fetchBalance = async () => {
        try {
            if (address == undefined) {return;}
            if (web3 == undefined) {return;}
            let getBalanceResult = await web3.eth.getBalance(address);
            if (getBalanceResult != undefined){
                setBalance(new BigNumber(getBalanceResult));
            }

        } catch (e) {
            console.log("getBalance failure");
            console.log(e);
        }
    }


    useEffect(() => {
        if (web3) {
            // @ts-ignore: Unreachable code error
            window.ethereum.on('accountsChanged', function (accounts) {
                setAddress(accounts[0]);      
                console.log("account changed");
            });      
            fetchAccount();
        }
    }, [web3])

    useEffect(()=>{
        fetchBalance();
    }, [address]);



    return(
        <Context.Provider value={{
            address: address,
            balance: balance,
        }}>
            {children}
        </Context.Provider>
    )

}


export default WalletProvider;