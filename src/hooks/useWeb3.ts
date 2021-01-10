import {useContext} from 'react';
import {Context} from '../contexts/Web3Provider';


const useWeb3 = () => {
    const {web3} = useContext(Context);
    
    return web3;
}

export default useWeb3;