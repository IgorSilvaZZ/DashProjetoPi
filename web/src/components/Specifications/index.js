import React, { useEffect, useRef, useState } from 'react';

import ModalDetails from '../Modal/details';

import { 
    ContainerDashMain,
    ItemsCarroussel,
    Item,
    TitleContainer,
    TitleDash,
    SubtitleDash,
    CointainerGraphics,
    ContainerInfoMover,
    TableTopMover,
} from './style';

const Specifications = () => {

    const [ openModalDetails, setOpenModalDetails ] = useState(false);

    const refItems = useRef(null);
        useEffect(() => {
            if(refItems.current){
                setInterval(() => {
                    refItems?.current?.scrollBy(300, 0)
                    if(refItems?.current?.scrollLeft == 7700){
                        refItems?.current?.scrollTo(0, 0);
                    }
                },3000)
            }
        })
    
    return (
        <ContainerDashMain>
            <TitleContainer>
                <TitleDash>Especificações</TitleDash>
                <SubtitleDash>Máquinas mais utilizadas</SubtitleDash>
            </TitleContainer>
            <CointainerGraphics>
                <ItemsCarroussel ref={refItems}>
                    <Item><img src={'https://unsplash.it/1600/400?image=950'}/></Item>
                    <Item><img src={'https://unsplash.it/1600/400?image=930'}/></Item>
                    <Item><img src={'https://unsplash.it/1600/400?image=990'}/></Item>
                    <Item><img src={'https://unsplash.it/1600/400?image=980'}/></Item>
                    <Item><img src={'https://unsplash.it/1600/400?image=970'}/></Item>
                    <Item><img src={'https://unsplash.it/1600/400?image=976'}/></Item>
                    <Item><img src={'https://unsplash.it/1600/400?image=993'}/></Item>
                    <Item><img src={'https://unsplash.it/1600/400?image=969'}/></Item>
                </ItemsCarroussel>
            </CointainerGraphics>
                <TitleContainer>
                    <TitleDash>Vida útil das GPU`s</TitleDash>
                </TitleContainer>
                <ContainerInfoMover>
                    <TableTopMover>
                        <tr>
                            <th><h2>IP Máquina</h2></th>
                            <th><h2>Nome</h2></th>
                            <th><h2>% de uso</h2></th>
                            <th><h2>% livre</h2></th>
                            <th><h2>Horas de uso</h2></th>
                        </tr>
                        <tr>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td><button onClick={() => setOpenModalDetails(true)}>+Detalhes</button></td>
                        </tr>
                        <tr>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td><button onClick={() => setOpenModalDetails(true)}>+Detalhes</button></td>
                        </tr>
                        <tr>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td><button onClick={() => setOpenModalDetails(true)}>+Detalhes</button></td>
                        </tr>
                        <tr>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td><button onClick={() => setOpenModalDetails(true)}>+Detalhes</button></td>
                        </tr>
                        <tr>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td><button onClick={() => setOpenModalDetails(true)}>+Detalhes</button></td>
                        </tr>
                        <tr>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td><button onClick={() => setOpenModalDetails(true)}>+Detalhes</button></td>
                        </tr>
                        <tr>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td>XXXXX</td>
                            <td><button onClick={() => setOpenModalDetails(true)}>+Detalhes</button></td>
                        </tr>

                    </TableTopMover>
                </ContainerInfoMover>
                <ModalDetails isVisible={openModalDetails} onCloseClick={() => setOpenModalDetails(false)} />
        </ContainerDashMain>
    )
}

export default Specifications;