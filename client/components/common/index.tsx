import styled from 'styled-components';

export const BaseButton = styled.button`

`;

export const BaseSelector = styled.select`

`;

interface PopupStyleProps {
    isOpen: boolean
};

export const PopupContainer = styled.div<PopupStyleProps>`
    display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #00000096;
    justify-content: center;
    align-items: center;
`;

export const PopupContant = styled.div`
    height: fit-content;
    width: fit-content;
    padding: 50px;
    min-width: 400px;
    background-color: wheat;
    border-radius: 20px;
`;

export const ErrorContainer = styled.div`
    max-width: 300px;
    color: red;
    font-size: 12px;
`;