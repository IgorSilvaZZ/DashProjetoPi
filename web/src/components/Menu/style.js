import styled from 'styled-components';

const DivDefaultFlex = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;  
`;

export const NavbarContainer = styled(DivDefaultFlex)`
    height: 100%;
    width: 18%;
    border-radius: 15px 0 0 15px;
`;

export const TitleContainerNavBar = styled(DivDefaultFlex)`
    flex-direction: row;
    width: 60%;
    height: 12%;
    background: transparent;
    border-radius: 25px;
    margin-top: 30px;
    text-align: center;
`;

export const TitleNavbar = styled.h2`
    color: #DAA520; 
    font-weight: 700;
`;

export const ContainerNavBar = styled(DivDefaultFlex)`
    justify-content: space-evenly;
    width: 90%;
    height: 90%;
`;

export const ItemNavBar = styled(DivDefaultFlex)`
    flex-direction: row;
    justify-content: space-evenly;
    width: 80%;
    height: 10%;
`;

export const ImgContainerNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    height: 90%;

    img{ 
        width: 70%;
    }
`;

export const TitleContainerNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    height: 90%;

    a{
        color: #DAA520; 
        font-weight: 800;
        transition: all 0.3s;
        cursor: pointer;
        font-size: 13px;
        text-decoration: none;
    }

    a:hover{
        color: #ecf0f1;
    }
`;

export const ImgLogoNavBar = styled.img`
    width: 100%;
`

export const ItemLogoutNavBar = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 60%;
    height: 15%;
    color: #DAA520; 
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s;
    &:hover{
        color: #ecf0f1;
    }
`;

export const ImgNavBar = styled.img`
    width: 12%;
    margin-right: 10px;
`;

export const ImgLogoutNavbar = styled.img`
    width: 15%;
    margin-right: 10px;
`;