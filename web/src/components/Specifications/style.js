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

export const ItemsCarroussel = styled.div`
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    overflow: hidden;
`

export const Item = styled.div`
    flex: none;
    width: 100%;
    height: 400px;
    scroll-snap-align: start;
    pointer-events: none;
    img{
    width: 100%;
    height: 100%;

    object-fit: cover;
}`

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

export const SubtitleDash = styled.h2`
    color: #f5f6fa;
`;

export const DescribeDash = styled.p`
    color: #718093;
    font-weight: 600;
`;

export const CointainerGraphics = styled.div`
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    height: 300px;
    width: 1100px;
    margin-top: 10px;
    border-radius: 30px;
    background: rgba(0,0,0,0.4);
    overflow: hidden;
`;

export const ItemGraphic = styled.div`
    width: 30%;
    height: 80%;
    border-radius: 20px;
    background: #1e272e;
    /* font-size: 10px; */
`;

export const ContainerTopMovers = styled(CointainerGraphics)`
    height: 17%;
    width: 90%;
    border-radius: 0;
    background: none;
`;

export const TopMoverItem = styled.div`
    width: 32%;
    height: 95%;
    border-radius: 25px;
    background: rgba(0,0,0,0.4);
    transition: all 0.3s;
    &:hover{
        background: #FFD32A;
    }
`;

export const ContainerInfoMover = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 30%;
`;

export const TableTopMover = styled.table`
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;

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