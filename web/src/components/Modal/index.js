import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ModalCpuDetails from './ModalCpudetails';

import {
    ModalStyled,
    ModalOverlay,
    ContainerHeader,
    ImgClose,
    ContainerTitle,
    ImageTitle,
    ItemTitle,
    ContainerMain,
    ItemMain,
    Item,
    ItemInformation,
    DivInfo
} from './style';

import closeButton from '../../assets/close-button.svg';
import imgDesktop from '../../assets/desktop-monitor.svg';
import imgMemoryRam from '../../assets/ram-memory.svg';
import cpuImg from '../../assets/cpu.svg';
import hardDisk from '../../assets/hard-disk.svg';
import gpuImg from '../../assets/graphics-card.svg';

const Modal = ({ isOpen, onClickClose }) => {

    const [ openModalDetails, setOpenModalDetails ] = useState(false);

    if(!isOpen){
        return null;
    }

    return ReactDOM.createPortal(
        <ModalOverlay>
            <ModalStyled size={"800px"}>
                <ContainerHeader>
                    <p>Devices Info</p>
                    <ImgClose onClick={onClickClose} src={closeButton} />
                </ContainerHeader>
                <ContainerTitle>
                    <ItemTitle size={'10%'}>
                        <ImageTitle src={imgDesktop} />
                    </ItemTitle>
                    <ItemTitle size={'90%'}>
                        <h3>Lucius Desktop</h3>
                        <p><i>(Online)</i></p>
                    </ItemTitle> 
                    
                </ContainerTitle>
                <ContainerMain>
                    <ItemMain border>
                        <Item>
                            <h6>Sistema Operacional</h6>
                            <p>Windows 10 Home</p>
                        </Item>
                        <Item>
                            <h6>Endereço IP</h6>
                            <p>255.255.255</p>
                        </Item>
                        <Item>
                            <h6>Modelo CPU</h6>
                            <p>Intel(R) Core(TM) i7-10510U</p>
                        </Item>
                        <Item>
                            <h6>Memoria Ram Total:</h6>
                            <p>16GB</p>
                        </Item>
                        <Item>
                            <h6>Memoria em Disco Total:</h6>
                            <p>1TB</p>
                        </Item>
                    </ItemMain>
                    <ItemMain border justify>
                        <ItemInformation>
                            <DivInfo size={"30%"}>
                                <img src={hardDisk}  />
                            </DivInfo>
                            <DivInfo size={"70%"}>
                                <p>Disco:</p>
                                <h2>28%</h2>
                            </DivInfo>
                        </ItemInformation>
                        <ItemInformation>
                            <DivInfo size={"30%"}>
                                <img src={imgMemoryRam}  />
                            </DivInfo>
                            <DivInfo size={"70%"}>
                                <p>RAM:</p>
                                <h2>30%</h2>
                            </DivInfo>
                        </ItemInformation>
                    </ItemMain>
                    <ItemMain justify>
                        <ItemInformation>
                            <DivInfo size={"30%"}>
                                <img src={cpuImg}  />
                            </DivInfo>
                            <DivInfo size={"70%"}>
                                <p>CPU:</p>
                                <h2>68%</h2>
                            </DivInfo>
                        </ItemInformation>
                        <ItemInformation scrollActive>
                            <DivInfo size={"30%"}>
                                <img src={gpuImg} onClick={() => setOpenModalDetails(true)} />
                            </DivInfo>
                            <DivInfo size={"70%"}>
                                <p>GPU:</p>
                                <h2>75%</h2>
                            </DivInfo>
                            <DivInfo size={"30%"}>
                                <img src={gpuImg}  />
                            </DivInfo>
                            <DivInfo size={"70%"}>
                                <p>GPU:</p>
                                <h2>75%</h2>
                            </DivInfo>
                            <ModalCpuDetails isVisible={openModalDetails} onCloseClick={() => setOpenModalDetails(false)} />
                        </ItemInformation>
                    </ItemMain>
                </ContainerMain>
            </ModalStyled>
        </ModalOverlay>,
        document.body

    );
}

export default Modal;