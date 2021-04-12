import React, { useState } from 'react';

import Modal from '../Modal';

import {
    ContainerVisaoGeral,
    TitleContainer,
    TitleOverview,
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
                        <ItemHeader>
                            <img src={checkedImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px"}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemHeader>
                            <img src={errorImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px"}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemHeader>
                            <img src={checkedImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px"}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemHeader>
                            <img src={checkedImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px"}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemHeader>
                            <img src={checkedImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031" fontSize={"20px"}>9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
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