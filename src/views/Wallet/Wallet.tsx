import React from 'react';

import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';


import mainLogo from '../../assets/image/mainLogo.png';

import WalletSelector from '../../components/WalletSelector';
import useWeb3 from '../../hooks/useWeb3';
import AccountInfo from './components/AccountInfo';
import PageContent from '../../components/PageContent';

const Wallet : React.FC = () => {
    const web3 = useWeb3();

    return (
        <Page>
            <PageHeader 
                icon={mainLogo}
                title="your Wallet"
                subtitle="do what you want with your Metamask Wallet"
            />
            <PageContent>
            <WalletSelector />
            {web3?(
                <AccountInfo />
            ):(
                <p>connect with your Metamask wallet</p>
            )}
                
            </PageContent>
            
            
            

        </Page>
    )
}

export default Wallet;