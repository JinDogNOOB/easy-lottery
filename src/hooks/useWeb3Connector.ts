import {useContext} from 'react';
import {Context} from '../contexts/Web3Provider';


const useWeb3Connector = () => {
    const {onSetWeb3} = useContext(Context);
    return onSetWeb3;
}

export default useWeb3Connector;