import styled from 'styled-components';

export const ContainerVisaoGeral = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: #1B2225;
    height: 100%;
    width: 64%;
    border-radius: 20px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    height: 12%;
    width: 100%;
    color: #718093;

    h2{
        margin-left: 20px;
    }

`;

export const ItemContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex: 1;
    width: 100%;
    height: 88%;
    overflow-y: scroll;
    overflow-y: auto;
`;

export const ItemInfo = styled.div`
    display: flex; 
    flex-direction: column;
    width: 30%;
    height: 40%;
    background: #1e272e;
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
    font-size: 20px;
    color: ${props => props.color};
`;