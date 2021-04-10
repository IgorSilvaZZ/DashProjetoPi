import React from 'react';

import { 
    BodyContainer,
    ContainerDash,
} from '../../global';

import Menu from '../../components/Menu';
import InfoUser from '../../components/InfoUser';

const Historic = () => {
    return (
        <BodyContainer>
            <ContainerDash>
                <Menu />
                <InfoUser />
            </ContainerDash>
        </BodyContainer>
    )
}

export default Historic;