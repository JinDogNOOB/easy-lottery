import {useContext} from 'react';
import {Context} from '../contexts/Web3Provider';


const useOnSetWeb3 = () => {
    const {onSetWeb3} = useContext(Context);
    return onSetWeb3;
}

export default useOnSetWeb3;