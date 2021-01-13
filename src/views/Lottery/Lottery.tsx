import React from 'react';

import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';

import mainLogo from '../../assets/image/mainLogo.png';

import useWeb3 from '../../hooks/useWeb3';

import Game from './components/Game';

const Lottery: React.FC = () => {


    return (
        <Page>
            <PageHeader 
                icon={mainLogo}
                title="Lottery"
                subtitle="be rich only with a 0.0015 eth"
            />

            <Game />

        </Page>
    )
}

export default Lottery;