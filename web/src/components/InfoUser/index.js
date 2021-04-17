import React from 'react';

import {
    ContainerInfoUser,
    ContainerImageUser,
    GeneralButton,
    SubtitleSettings,
    ImgInfoUser,
    ContainerInfosUser,
    TitleInfoUser,
} from './style';

import studentIcon from '../../assets/student.svg';

const InfoUser = () => {

    return (
        <ContainerInfoUser>
            <TitleInfoUser>
                <p>Olá, User</p>
            </TitleInfoUser>
            <ContainerInfosUser>
                <ContainerImageUser>
                    <ImgInfoUser src={studentIcon} />
                </ContainerImageUser>
                    <SubtitleSettings>Crypo Inc User</SubtitleSettings>
                    <SubtitleSettings>email@crypo.com.br</SubtitleSettings>
                    <SubtitleSettings>000.000.000.000</SubtitleSettings>
                        <GeneralButton
                            radius="10px"
                            border="none"
                            color="white"
                            background="#daa520"
                            hoverBackground="#CF8616"
                            hoverBorder="none"
                        >
                            Ver perfil
                        </GeneralButton>
            </ContainerInfosUser>
        </ContainerInfoUser>
    )

}

export default InfoUser;