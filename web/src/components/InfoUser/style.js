import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;    
    height: 100%;
    width: 18%;
    border-radius: 15px 0 0 15px;
`;

export const ContainerInfoUser = styled(Container)`
    justify-content: space-evenly;
`;

export const TitleInfoUser = styled(Container)`
    height: 12%;
    width: 80%;
    justify-content: flex-start;

    p{
        color: #718093;
        font-size: 20px;
        font-weight: 600;
    }

`;

export const ContainerInfosUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 75%;
    height: 75%;
    background: #1c1c1c;
    border-radius: 20px;
`;

export const ContainerImageUser = styled.div`
    display: flex;
    width: 60%;
    height: 25%;
    justify-content: center;
    align-items: center;    
    background: #DAA520;
    border-radius: 50%;
`;

export const ImgInfoUser = styled.img`
    width: 60%;
`;