import styled from 'styled-components';

export const DivInfo = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 95%;
    width: ${props => props.size};

    img{
        width: 70%;
    }

    p{
        color: #718093;
        font-size: 15px;
    }

    h2{
        color: #FFF;
        font-weight: 700;
    }


`

export const ItemInformation = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    height: 40%;
    width: 95%;
    overflow-y: ${props => props.scrollActive ? "scroll" : "unset"};
    overflow-y: ${props => props.scrollActive ? "auto" : "unset"};
    cursor: ${props => props.scrollActive ? "pointer" : "unset"};
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 10%;
    width: 95%;
    margin-bottom: 25px;

    h6{
        color: #FFF;
    }

    p{
        color: #718093;
        font-size: 11px;
        font-weight: 600; 
    }

`;

export const ItemMain = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: ${props => props.justify ? "space-evenly" : "flex-start"};
    height: 90%;
    width: 35%;
    border-right: ${props => props.border ? "2px solid #718093" : "0px"};
`;

export const ContainerMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 250px;
`;

export const ImageTitle = styled.img`
    width: 80%;
`;

export const ItemTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: ${props => props.size};
    height: 95%;
    color: #FFF;
    border-bottom: 1px solid #718093;

    p{
        font-size: 15px;
    }

`;

export const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    height: 100px;
`; 

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    height: 35px;
    border-bottom: 1px solid #718093;

    p {
        font-size: 20px;
        color: #718093;
        font-weight: 700; 
    }

`;

export const ImgClose = styled.img`
    height: 60%;
    cursor: pointer; 
`;

export const ModalStyled = styled.div`
    border-radius: 20px;
    max-width: ${props => props.size};
    margin: ${props => props.cpuDetails ? "20px auto 0 auto" : "80px auto 0 auto"};
    padding: 15px;
    background: #1e272e;
`;

export const ModalOverlay = styled.div`
    position: fixed;
    transition: all 0.3s;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5)
`;