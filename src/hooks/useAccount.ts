import {useContext, useState, useEffect} from 'react';
import {Context} from '../contexts/Web3Provider';
import BigNumber from 'bignumber.js';

import Web3 from 'web3';

const useAccount = () => {
    const {web3} = useContext(Context);

    const [address, setAddress] = useState<string>();
    

    useEffect(() => {
        async() => {
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
        
        
    }, [web3?.currentProvider]);
    
    return address;
}

export default useAccount;