import React, {useEffect} from 'react';
import useWeb3 from '../../hooks/useWeb3';
import useWeb3Connector from '../../hooks/useWeb3Connector';

import Button from '../Button';

const WalletSelector: React.FC = () => {
    const web3 = useWeb3();
    const onConnectWeb3 = useWeb3Connector();
    
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