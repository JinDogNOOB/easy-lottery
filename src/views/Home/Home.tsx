import React from 'react';

import Page from '../../components/Page';
import PageHeader from '../../components/PageHeader';

import mainLogo from '../../assets/image/mainLogo.png';
import PageContent from '../../components/PageContent';
import useTest from '../../hooks/useTest';


const Home : React.FC = () => {
    const {test, change} = useTest();
    return (
        <Page>
            <PageHeader 
                icon={mainLogo}
                title="easy lottery"
                subtitle="easy lottery makes lottery more fair"
            />
            {test}
            <button onClick={()=>{change();}}>Tttt</button>
            <PageContent>
                <p>easy lottery generate winning number with a past BlockHash of the Ethereum network</p>
            </PageContent>
        </Page>


    )
}

export default Home;