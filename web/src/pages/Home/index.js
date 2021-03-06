import React from 'react';

import { 
    BodyContainer,
    ContainerDash,
} from '../../global';

import Menu from '../../components/Menu';
import Overview from '../../components/Overview'
import InfoUser from '../../components/InfoUser';

const Home = () => {
    return (
        <BodyContainer>
            <ContainerDash>
                <Menu />
                <Overview />
                <InfoUser />
            </ContainerDash>
        </BodyContainer>
    )
}

export default Home;