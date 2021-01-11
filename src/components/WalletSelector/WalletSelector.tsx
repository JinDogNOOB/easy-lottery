import React, {useEffect} from 'react';
import useWeb3 from '../../hooks/useWeb3';
import useOnSetWeb3 from '../../hooks/useOnSetWeb3';

import Button from '../Button';

const WalletSelector: React.FC = () => {
    const web3 = useWeb3();
    const onConnectWeb3 = useOnSetWeb3();
    
    return (
        <div>
            {web3?(
                <Button buttonText="Connected" />
            ):(
                <Button buttonText="Connect Wallet" onClick={onConnectWeb3} />
            )}
        </div>
        
    )
    
}

export default WalletSelector;