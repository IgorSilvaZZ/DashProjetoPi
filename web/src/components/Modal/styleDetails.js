import styled from 'styled-components';

export const ItemDetails = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    height: 10%;
    margin-bottom: 25px;

    p{
        color: white;
        font-weight: 700;
    }

`;

export const DetailsContainer = styled.div`
    flex-direction: column;
    height: 80%;
    width: 90%;
`;

export const ImageCpu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40%;
    width: 50%;

    img{
        width: 50%;
    }

`;

export const ContainerMain = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 300px;
`;