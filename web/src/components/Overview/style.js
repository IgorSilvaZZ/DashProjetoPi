import styled from 'styled-components';

export const ContainerVisaoGeral = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #1c1c1c;
    height: 100%;
    width: 64%;
    border-radius: 20px;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 12%;
    width: 90%;
`;

export const TitleOverview = styled.h1`
    color: #f5f6fa;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    height: 12%;
    width: 100%;
    color: #f5f6fa;

    h2{
        margin-left: 20px;
    }

`;

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    overflow-y: auto;
`;

export const ItemInfo = styled.div`
    display: flex; 
    flex-direction: column;
    width: 28%;
    height: 35%;
    background: #333333;
    border-radius: 20px;
    margin-bottom: 20px;
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.33);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.33);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.33);
`;

export const ItemHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 70%;
    width: 100%;
    border-radius: 20px 20px 0px 0px;

    img{
        width: 30%;
        cursor: pointer;
    }

`;

export const FooterHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 30%;
    width: 100%;
    border-radius: 0px 0px 20px 20px;
`;

export const TextFooterHeader = styled.p`
    color: #718093;
    font-weight: 600;
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
`;