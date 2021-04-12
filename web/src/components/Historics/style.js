import styled from 'styled-components';

export const ContainerDashMain = styled.div`
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

export const TitleDash = styled.h1`
    color: #f5f6fa;
`;

export const ContainerInfoMover = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 85%;
    overflow-y: scroll;
    overflow-y: auto;
`;

export const TableTopMover = styled.table`
    border-collapse: collapse;
    width: 99%;

    tr:nth-child(n + 2){
        border-bottom: 1px solid #bdc3c7;
    }

    th {
        color: white;
        font-weight: 500;
        text-align: left;
        font-size: 12px;
        width: 100px;
        height: 30px;
    }

    td{
        color: white;
        font-size: 12px;
        width: 100px;
        height: 35px;
        font-weight: 600;
    }

    button{
        padding: 6px;
        border-radius: 20px;
        color: white;
        background: #DAA520;
        width: 50%;
        transition: all 0.3s;
        font-weight: 600;
        border: none;
        cursor: pointer;
        &:hover{
            background: #FFD32A;
        }
    }

`; 