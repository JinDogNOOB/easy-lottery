import {useContext} from 'react';
import {Context} from '../contexts/WalletProvider';

const useWallet = () => {
    const {address, balance} = useContext(Context);

    return {address, balance};
}

export default useWallet;