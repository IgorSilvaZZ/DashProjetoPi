import React from 'react';

import { 
    BodyContainer,
    ContainerDash,
} from '../../global';

import Menu from '../../components/Menu';
import InfoUser from '../../components/InfoUser';
import Historics from '../../components/Historics';

const Historic = () => {
    return (
        <BodyContainer>
            <ContainerDash>
                <Menu />
                    <Historics/>
                <InfoUser />
            </ContainerDash>
        </BodyContainer>
    )
}

export default Historic;