import React from 'react';
import styeld from 'styled-components';

import useAccount from '../../../hooks/useAccount';
import useBalance from '../../../hooks/useBalance';


import TextField from '@material-ui/core/TextField';
import useWallet from '../../../hooks/useWallet';





const AccountInfo: React.FC = () => {
    const {address, balance} = useWallet();


    return (
        <StyledAccountInfo>
            <div>
                {address}
            </div>

           <div>
               {balance?.toString()}
           </div>



        </StyledAccountInfo>
        
    );
}

const StyledAccountInfo = styeld.div`

`

export default AccountInfo;