import React, {createContext, useEffect, useState} from 'react';
import { parseConfigFileTextToJson } from 'typescript';
import Web3 from 'web3';

export interface Web3Context{
    web3?: Web3,
    onSetWeb3?: () => void,
}

export const Context = createContext<Web3Context>({
    web3 : undefined,
    onSetWeb3 : undefined,
})


const Web3Provider: React.FC = ({children}) => {
    const [web3, setWeb3] = useState<Web3>();

    const onSetWeb3 = () => {
        // @ts-ignore: Unreachable code error
        if(window.ethereum){
            // @ts-ignore: Unreachable code error
            const temp3: Web3 = new Web3(window.ethereum);
            setWeb3(temp3);
            console.log("web3 is created");
        }else{
            console.log("w.ethereum does not exist");
        }
    }

    
    return <Context.Provider value={{
        web3: web3,
        onSetWeb3 : onSetWeb3
        }}>
            {children}
            </Context.Provider>
    
}

export default Web3Provider;