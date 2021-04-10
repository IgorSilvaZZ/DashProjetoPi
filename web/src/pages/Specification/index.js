import React from 'react';

import { 
    BodyContainer,
    ContainerDash,
} from '../../global';

import Specifications from '../../components/Specifications';
import Menu from '../../components/Menu';
import InfoUser from '../../components/InfoUser';

const Specification = () => {
    return (
        <BodyContainer>
            <ContainerDash>
                <Menu />
                <Specifications />
                <InfoUser />
            </ContainerDash>
        </BodyContainer>
    )
}

export default Specification;