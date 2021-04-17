import React from 'react';
import Switch from "react-switch";

import {
    ContainerSettings,
    GeneralButton,
    ContainerHeader,
    ContainerTitle,
    ContainerTheme,
    TitleSettings,
    SubtitleSettings,
    ContainerMain,
    ContainerInfoUser,
    InfoUser,
    InputUser,
    ContainerSettingsUser,
    SettingsUser,
    ImgSettingsUser,
    Img,
    ContainerSubMain,
    ContainerAlerts,
    ContainerSelect,
    ContainerHeaderAlerts,
    ContainerTitleAlerts,
    ContainerCheckBox,
    CheckBox,
    CheckMark,
} from './style';

import studentIcon from '../../assets/student.svg';

const Settings = () => {

    return(
        <>
            <ContainerSettings>
                <ContainerHeader>
                    <ContainerTitle>
                        <TitleSettings>Configurações</TitleSettings>
                        <SubtitleSettings>Informações do usuário</SubtitleSettings>
                    </ContainerTitle>
                    <ContainerTheme>
                        <SubtitleSettings>Tema Escuro</SubtitleSettings>
                        <Switch/>
                    </ContainerTheme>
                </ContainerHeader>
                <ContainerMain>
                    <ContainerInfoUser>
                        <InfoUser>
                            <InputUser height={"45%"} width={"45%"} placeholder="Nome de usuário"/>
                            <InputUser height={"45%"} width={"45%"} placeholder="Senha"/>
                        </InfoUser>
                        <InfoUser>
                            <InputUser height={"45%"} width={"100%"} placeholder="Nome Completo"/>
                        </InfoUser>
                        <InfoUser>
                            <InputUser height={"45%"} width={"45%"} placeholder="000.000.000-00"/>
                            <InputUser height={"45%"} width={"45%"} placeholder="(00) 00000-0000"/>
                        </InfoUser>
                        <InfoUser>
                            <InputUser height={"45%"} width={"100%"} placeholder="email@crypo.com.br"/>
                        </InfoUser>
                    </ContainerInfoUser>
                    <ContainerSettingsUser>
                        <SettingsUser>
                            <ImgSettingsUser>
                                <Img src={studentIcon} />
                            </ImgSettingsUser>
                            <GeneralButton
                                radius="10px"
                                border="none"
                                color="white"
                                background="#daa520"
                                hoverBackground="#CF8616"
                                hoverBorder="none"
                            >
                            Editar
                            </GeneralButton>      
                        </SettingsUser>
                    </ContainerSettingsUser>
                </ContainerMain>
                <ContainerSubMain>
                    <ContainerAlerts>
                        <ContainerHeaderAlerts>
                            <ContainerTitleAlerts>
                                <TitleSettings>Alertas:</TitleSettings>
                            </ContainerTitleAlerts>
                        </ContainerHeaderAlerts>
                        <ContainerSelect>
                                <select>
                                    <option>Selecione a máquina:</option>
                                    <option>Máquina 01</option>
                                    <option>Máquina 02</option>
                                    <option>Máquina 03</option>
                                    <option>Máquina 04</option>
                                    <option>Máquina 05</option>
                                </select>
                            <GeneralButton
                                    radius="10px"
                                    border="none"
                                    color="white"
                                    background="#daa520"
                                    hoverBackground="#CF8616"
                                    hoverBorder="none"
                            >
                                    Personalizar alertas
                            </GeneralButton>   
                        </ContainerSelect>
                    </ContainerAlerts>
                    <ContainerCheckBox>
                        <CheckBox>
                            <CheckMark>
                            </CheckMark>
                        </CheckBox>
                    </ContainerCheckBox>
                </ContainerSubMain>
            </ContainerSettings>
        </>
    )
}

export default Settings;