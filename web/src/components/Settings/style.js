import styled from 'styled-components';

export const ContainerSettings = styled.div`
    display: flex;
    flex-direction: column;
    background: #1c1c1c;
    height: 100%;
    width: 64%;
    border-radius: 20px;
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

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;   
    height: 15%;
    width: 100%;
`;

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    height: 100%;
    width: 45%;
`;

export const ContainerTheme = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 100%;
    width: 45%;
`;

export const TitleSettings = styled.h1`
    color: #f5f6fa;
`;

export const SubtitleSettings = styled.h2`
    color: #f5f6fa;
`;

export const ContainerMain = styled.div`
    display: flex;
    align-items: center;
    height: 40%;
    width: 100%;
`;

export const ContainerInfoUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 60%;
`;

export const InfoUser = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 80%;
`;

export const InputUser = styled.input`
    background-color: #333333;
    color: white;
    height: ${props => props.height};
    width: ${props => props.width};
`;

export const ContainerSettingsUser = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 25%;
`;

export const SettingsUser = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
    width: 100%;
`;

export const ImgSettingsUser = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    background: #DAA520;
    border-radius: 50%;
    width: 50%;
    height: 40%;
`;

export const Img = styled.img`
    width: 60%;
`;

export const ContainerSubMain = styled.div`
    display: flex;
    align-items: center;
    height: 45%;
    width: 90%;
`;

export const ContainerAlerts = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 90%;
`;

export const ContainerHeaderAlerts = styled.div`
    display: flex;
    width: 100%;
`;

export const ContainerTitleAlerts = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 40%;
`;

export const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100%;
    width: 40%;
`;

export const ContainerCheckBox = styled.div`

`;

export const CheckBox = styled.div`

`;

export const CheckMark = styled.div`

`;