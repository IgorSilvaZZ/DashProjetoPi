import React from 'react';

import { 
    BodyContainer,
    ContainerDash,
} from '../../style';

import TopMovers from '../../components/TopMovers';
import Menu from '../../components/Menu';
import InfoUser from '../../components/InfoUser';

const Geral = () => {
    return (
        <BodyContainer>
            <ContainerDash>
                <Menu />
                <TopMovers />
                <InfoUser />
            </ContainerDash>
        </BodyContainer>
    )
}

export default Geral;