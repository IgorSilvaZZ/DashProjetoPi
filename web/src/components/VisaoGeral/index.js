import React, { useState } from 'react';
import Helmet from 'react-helmet';

import Modal from '../Modal';

import {
    ContainerVisaoGeral,
    HeaderContainer,
    ItemContainer,
    ItemInfo,
    ItemHeader,
    FooterHeader,
    TextFooterHeader
} from './style'

import checkedImg from '../../assets/check-mark.svg';
import errorImg from '../../assets/cancel.svg';

const VisaoGeral = () => {

    const [ open, setOpen ] = useState(false);

    return(
        <>
            <ContainerVisaoGeral>
                {/* <Helmet title="Visão Geral" /> */}
                <HeaderContainer>
                    <h2>Visão Geral</h2>
                </HeaderContainer>
                <ItemContainer>
                    <ItemInfo>
                        <ItemHeader>
                            <img src={checkedImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#00b894">50%</TextFooterHeader>
                            <TextFooterHeader color="#00b894">12H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemHeader>
                            <img src={errorImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031">90%</TextFooterHeader>
                            <TextFooterHeader color="#d63031">9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemHeader>
                            <img src={checkedImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#00b894">50%</TextFooterHeader>
                            <TextFooterHeader color="#00b894">12H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemHeader>
                            <img src={checkedImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#00b894">50%</TextFooterHeader>
                            <TextFooterHeader color="#00b894">12H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemHeader>
                            <img src={checkedImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#00b894">50%</TextFooterHeader>
                            <TextFooterHeader color="#00b894">12H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                    <ItemInfo>
                        <ItemHeader>
                            <img src={errorImg} onClick={() => setOpen(true)} />
                        </ItemHeader>
                        <FooterHeader>
                            <TextFooterHeader color="#d63031">90%</TextFooterHeader>
                            <TextFooterHeader color="#d63031">9H</TextFooterHeader>
                        </FooterHeader>
                    </ItemInfo>
                </ItemContainer>
            </ContainerVisaoGeral>
            <Modal isOpen={open} onClickClose={() => setOpen(false)}></Modal>
        </>
    )
}

export default VisaoGeral;