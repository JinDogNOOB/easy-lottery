import React from 'react';

import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';

import mainLogo from '../../assets/image/mainLogo.png';

const Law : React.FC = () => {
    return (
        <Page>
            <PageHeader 
                icon={mainLogo}
                title="law"
                subtitle="we are NOT responsible for the consequences of your actions"
            />
        </Page>
    )
}

export default Law;