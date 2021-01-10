import {useContext} from 'react';
import {Context} from '../contexts/Web3Provider';


const useWeb3Setter = () => {
    const {onSetWeb3} = useContext(Context);
    return onSetWeb3;
}

export default useWeb3Setter;