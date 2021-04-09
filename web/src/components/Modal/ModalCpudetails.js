import React from 'react';
import ReactDOM from 'react-dom';

import {    
    ModalOverlay,
    ModalStyled,
    ContainerHeader,
    ImgClose
} from './style';

import {
    ContainerMain,
    ImageCpu,
    DetailsContainer,
    ItemDetails
} from './styleCpuDetails';

import closeButton from '../../assets/close-button.svg';
import gpuImg from '../../assets/graphics-card.svg';

const ModalCpuDetails = ({ isVisible, onCloseClick }) => {

    if(!isVisible){
        return null;
    }

    return ReactDOM.createPortal(
        <ModalOverlay>
            <ModalStyled size={"400px"} cpuDetails>
                <ContainerHeader>
                    <p>GPU Info</p>
                    <ImgClose onClick={onCloseClick} src={closeButton} />
                </ContainerHeader>
                <ContainerMain>
                    <ImageCpu>
                        <img src={gpuImg}  />
                    </ImageCpu>
                    <DetailsContainer>
                        <ItemDetails>
                            <p>Modelo:</p>
                        </ItemDetails>
                        <ItemDetails>
                            <p>Clock:</p>
                        </ItemDetails>
                        <ItemDetails>
                            <p>Memoria:</p>
                        </ItemDetails>
                        <ItemDetails>
                            <p>Frequencia:</p>
                        </ItemDetails>
                    </DetailsContainer>
                </ContainerMain>
            </ModalStyled>
        </ModalOverlay>,
        document.body
    )

}

export default ModalCpuDetails;