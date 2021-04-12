import React from 'react';

import {
    ContainerSettings,
    ContainerTitle,
    TitleSettings,
    SubtitleSettings,
} from './style'

const Settings = () => {

    return(
        <>
            <ContainerSettings>
                <ContainerTitle>
                    <TitleSettings>Configurações</TitleSettings>
                    <SubtitleSettings>Informações do usuário:</SubtitleSettings>
                </ContainerTitle>
            </ContainerSettings>
        </>
    )
}

export default Settings;