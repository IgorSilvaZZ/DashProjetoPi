import styled from 'styled-components';

import bacgroundImg from './assets/wave.svg';

export const BodyContainer = styled.body`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(${bacgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ContainerDash = styled.div`
    display: flex;
    align-items: center;
    height: 98%;
    width: 95%;
    background: rgba(23,23,23,0.95);
    border-radius: 20px;
`;
