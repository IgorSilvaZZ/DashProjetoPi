import React from 'react';

import { 
    BodyContainer,
    ContainerDash,
} from '../../global';

import Menu from '../../components/Menu';
import InfoUser from '../../components/InfoUser';
import Setting from '../../components/Settings'

const Configuracoes = () => {
    return (
        <BodyContainer>
            <ContainerDash>
                <Menu />
                    <Setting/>
                <InfoUser />
            </ContainerDash>
        </BodyContainer>
    )
}

export default Configuracoes;