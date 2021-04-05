import React from 'react';

import { 
    BodyContainer,
    ContainerDash,
} from '../../style';

import Menu from '../../components/Menu';
import VisaoGeral from '../../components/VisaoGeral'
import InfoUser from '../../components/InfoUser';

const Home = () => {
    return (
        <BodyContainer>
            <ContainerDash>
                <Menu />
                <VisaoGeral />
                <InfoUser />
            </ContainerDash>
        </BodyContainer>
    )
}

export default Home;