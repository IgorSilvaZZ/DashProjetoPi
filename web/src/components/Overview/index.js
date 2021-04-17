import React, { useState } from 'react';

import Modal from '../Modal';

import {
    ContainerVisaoGeral,
    TitleContainer,
    SubTitleContainer,
    TitleOverview,
    SubTitleOverview,
    HeaderContainer,
    ItemContainer,
    ItemInfo,
    ItemHeader,
    FooterHeader,
    TextFooterHeader
} from './style'

import checkedImg from '../../assets/check-mark.svg';
import errorImg from '../../assets/cancel.svg';

const Overview = () => {

    const [ open, setOpen ] = useState(false);

    return (
        <>
            <ContainerVisaoGeral>
                <TitleContainer>
                    <TitleOverview>Visão Geral</TitleOverview>
                </TitleContainer>
                <ItemContainer>
                    <ItemInfo>
                        <SubTitleContainer>
                            <SubTitleOverview>Máquina 01</SubTitleOverview>
                        </SubTitleContainer>
                            <ItemHeader>
                                <img src={checkedImg} onClick={() => setOpen(true)} />
                            </ItemHeader>
                            <FooterHeader>
                                <TextFooterHeader color="#d63031" fontSize={"20px"}>9H</TextFooterHeader>
                            </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <SubTitleContainer>
                            <SubTitleOverview>Máquina 02</SubTitleOverview>
                        </SubTitleContainer>
                        <ItemHeader>
                            <img src={errorImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px"}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <SubTitleContainer>
                            <SubTitleOverview>Máquina 03</SubTitleOverview>
                        </SubTitleContainer>
                        <ItemHeader>
                            <img src={checkedImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px"}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <SubTitleContainer>
                            <SubTitleOverview>Máquina 04</SubTitleOverview>
                        </SubTitleContainer>
                        <ItemHeader>
                            <img src={checkedImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px"}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <SubTitleContainer>
                            <SubTitleOverview>Máquina 05</SubTitleOverview>
                        </SubTitleContainer>
                        <ItemHeader>
                            <img src={checkedImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px"}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <SubTitleContainer>
                            <SubTitleOverview>Máquina 06</SubTitleOverview>
                        </SubTitleContainer>
                        <ItemHeader>
                            <img src={errorImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px   "}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <SubTitleContainer>
                            <SubTitleOverview>Máquina 07</SubTitleOverview>
                        </SubTitleContainer>
                        <ItemHeader>
                            <img src={errorImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px   "}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <SubTitleContainer>
                            <SubTitleOverview>Máquina 08</SubTitleOverview>
                        </SubTitleContainer>
                        <ItemHeader>
                            <img src={errorImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px   "}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <SubTitleContainer>
                            <SubTitleOverview>Máquina 09</SubTitleOverview>
                        </SubTitleContainer>
                        <ItemHeader>
                            <img src={errorImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px   "}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                </ItemContainer>
            </ContainerVisaoGeral>
            <Modal isOpen={open} onClickClose={() => setOpen(false)}></Modal>
        </>
    )
}

export default Overview;