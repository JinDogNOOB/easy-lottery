import React from 'react';

import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';

import mainLogo from '../../assets/image/mainLogo.png';


const Home : React.FC = () => {
    
    return (
        <Page>
            <PageHeader 
                icon={mainLogo}
                title="easy lottery"
                subtitle="easy lottery makes lottery more fair"
            />

        </Page>
    )
}

export default Home;