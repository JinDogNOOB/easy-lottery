import React, {useEffect} from 'react';
import useWeb3 from '../../hooks/useWeb3';
import useWeb3Setter from '../../hooks/useWeb3Setter';

import Button from '../Button';

const WalletSelector: React.FC = () => {
    const web3 = useWeb3();
    const onSetWeb3 = useWeb3Setter();
    
    return (
        <div>
            {web3?(
                <Button buttonText="Connected" />
            ):(
                <Button buttonText="Connect Wallet" onClick={onSetWeb3} />
            )}
        </div>
        
    )
    
}

export default WalletSelector;