import React from 'react';
import styled from 'styled-components'

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
            
            {web3?(
                <AccountInfo />
            ):(
                <Center>
                    <p>connect with your Metamask wallet</p>
                    <WalletSelector />
                </Center>
            )}
                
            </PageContent>
            
        </Page>
    )
}

const Center = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`



export default Wallet;