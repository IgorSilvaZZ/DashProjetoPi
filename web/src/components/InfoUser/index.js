import React from 'react';

import {
    ContainerInfoUser,
    ContainerImageUser,
    ImgInfoUser,
    ContainerInfosUser,
    TitleInfoUser
} from './style';

import studentIcon from '../../assets/student.svg';

const InfoUser = () => {

    return (
        <ContainerInfoUser>
            <TitleInfoUser>
                <p>Hi, Tata</p>
            </TitleInfoUser>
            <ContainerInfosUser>
                <ContainerImageUser>
                    <ImgInfoUser src={studentIcon} />
                </ContainerImageUser>
            </ContainerInfosUser>
        </ContainerInfoUser>
    )

}

export default InfoUser;