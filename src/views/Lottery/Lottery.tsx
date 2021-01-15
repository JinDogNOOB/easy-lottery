import React from 'react';
import styled from 'styled-components'

import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';

import mainLogo from '../../assets/image/mainLogo.png';
import WalletSelector from '../../components/WalletSelector';

import useWeb3 from '../../hooks/useWeb3';

import Game from './components/Game';
import PageContent from '../../components/PageContent';

const Lottery: React.FC = () => {
    const web3 = useWeb3();

    return (
        <Page>
            <PageHeader 
                icon={mainLogo}
                title="Lottery"
                subtitle="be rich only with a 0.0015 eth"
            />
            <PageContent>
            {web3?(
                <Game />
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

export default Lottery;