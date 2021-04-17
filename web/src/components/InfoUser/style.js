import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;    
    height: 90%;
    width: 18%;
    border-radius: 15px 0 0 15px;
`;

export const ContainerInfoUser = styled(Container)`
    justify-content: space-evenly;
`;

export const TitleInfoUser = styled(Container)`
    height: 10%;
    width: 100%;
    justify-content: flex-start;

    p{
        color: #f5f6fa;
        font-size: 25px;
        font-weight: 600;
    }

`;

export const ContainerInfosUser = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;  
    width: 80%;
    height: 90%;
    background: #1c1c1c;
    border-radius: 20px;
`;

export const ContainerImageUser = styled.div`
    display: flex;
    width: 65%;
    height: 20%;
    justify-content: center;
    align-items: center;    
    background: #DAA520;
    border-radius: 50%;
`;

export const GeneralButton = styled.button`
  width: 150px;
  height: 40px;
  cursor: pointer;
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
  background: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: ${(props) => props.radius};
  &:hover {
    transition: all 0.3s;
    background: ${(props) => props.hoverBackground};
    border: ${(props) => props.hoverBorder};
  }
`;

export const SubtitleSettings = styled.h2`
    color: #f5f6fa;
    font-size: 15px;
    font-weight: 600;
`;

export const ImgInfoUser = styled.img`
    width: 60%;
`;