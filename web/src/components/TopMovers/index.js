import React from 'react';

import {  
    ContainerDashMain,
    TitleContainer,
    TitleDash,
    DescribeDash,
    CointainerGraphics,
    ItemGraphic,
    ContainerTopMovers,
    TopMoverItem,
    ContainerInfoMover,
    TableTopMover,
} from './style';

const TopMovers = () => {

    return (
        <ContainerDashMain>
            <TitleContainer>
                <TitleDash>-</TitleDash>
            </TitleContainer>
            <CointainerGraphics>
                <ItemGraphic>

                </ItemGraphic>
                <ItemGraphic>
                            
                </ItemGraphic>
                <ItemGraphic>
                            
                </ItemGraphic>
            </CointainerGraphics>
                <TitleContainer>
                    <TitleDash>Componentes mais Utilizados</TitleDash>
                </TitleContainer>
                <ContainerTopMovers>
                    <TopMoverItem>

                    </TopMoverItem>
                    <TopMoverItem>
                            
                    </TopMoverItem>
                    <TopMoverItem>
                            
                    </TopMoverItem>
                </ContainerTopMovers>
                <ContainerInfoMover>
                    <TableTopMover>
                        <tr>
                            <th>NAME</th>
                            <th>NAME</th>
                            <th>NAME</th>
                            <th>NAME</th>
                            <th></th>
                        </tr>
                        <tr>
                            <td>Bitcoin </td>
                            <td>Bitcoin </td>
                            <td>Bitcoin </td>
                            <td>Bitcoin </td>
                            <td><button>Trade</button> </td>
                        </tr>
                        <tr>
                            <td>Bitcoin </td>
                            <td>Bitcoin </td>
                            <td>Bitcoin </td>
                            <td>Bitcoin </td>
                            <td><button>Trade</button> </td>
                        </tr>
                        <tr>
                            <td>Bitcoin </td>
                            <td>Bitcoin </td>
                            <td>Bitcoin </td>
                            <td>Bitcoin </td>
                            <td><button>Trade</button> </td>
                        </tr>
                        <tr>
                            <td>Bitcoin </td>
                            <td>Bitcoin </td>
                            <td>Bitcoin </td>
                            <td>Bitcoin </td>
                            <td><button>Trade</button> </td>
                        </tr>
                    </TableTopMover>
                </ContainerInfoMover>
        </ContainerDashMain>
    )
}

export default TopMovers;