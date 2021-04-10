import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { 
    NavbarContainer,
    TitleContainerNavBar,
    ContainerNavBar,
    ItemNavBar,
    ImgContainerNav,
    TitleContainerNav,
    ImgLogoNavBar,
    ItemLogoutNavBar,
    ImgLogoutNavbar
} from './style';

import logoImg from '../../assets/logo.png';
import dashboardIcon from '../../assets/dashboard.svg';
import logoutIcon from '../../assets/logout.svg';

const Menu = () => {

    return (
        <>
            <NavbarContainer>
                <TitleContainerNavBar>
                    <ImgLogoNavBar src={logoImg} />
                </TitleContainerNavBar>
                <ContainerNavBar>
                    <ItemNavBar>
                        <ImgContainerNav>
                            <img src={dashboardIcon}/>
                        </ImgContainerNav>
                        <TitleContainerNav>
                            <Link to="/">Visão Geral</Link>
                        </TitleContainerNav>
                    </ItemNavBar>
                    <ItemNavBar>
                        <ImgContainerNav>
                            <img src={dashboardIcon}/>
                        </ImgContainerNav>
                        <TitleContainerNav>
                            <Link to="/Specification">Especificações</Link>
                        </TitleContainerNav>
                    </ItemNavBar>
                    <ItemNavBar>
                        <ImgContainerNav>
                            <img src={dashboardIcon}/>
                        </ImgContainerNav>
                        <TitleContainerNav>
                            <Link to="/Historic">Historico</Link>
                        </TitleContainerNav>
                    </ItemNavBar>
                    <ItemNavBar>
                        <ImgContainerNav>
                            <img src={dashboardIcon}/>
                        </ImgContainerNav>
                        <TitleContainerNav>
                            <Link to="/setting">Configurações</Link>
                        </TitleContainerNav>
                    </ItemNavBar>
                    <ItemLogoutNavBar>
                        <ImgLogoutNavbar src={logoutIcon} />
                        <p>Logout</p>
                    </ItemLogoutNavBar>
                </ContainerNavBar>
            </NavbarContainer>
        </>

    )

}

export default Menu;