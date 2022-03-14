import React, { ChangeEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { StateContext } from '../../pages';
import { BaseButton, BaseSelector } from '../common';
import { sortType } from '../../utils/types';
import AddUserPopup from '../addUserPopup';

const Container = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SelectorContainer = styled.div`

`;
const SelectorLabel = styled.label`
    margin-right: 10px;
`;

function Header() {
    const [isOPenPopup, setIsOpenPopup] = useState(false);
    const state = useContext(StateContext);
    const toggleSelector = (e: any) => {
        if (state) {
            state.setSortType(e.target.value);
        }
    };
    const openPopup = () => {
        setIsOpenPopup(true);
    };
    const closePopup = () => {
        setIsOpenPopup(false)
    };

    return (
        <Container>
            <BaseButton onClick={openPopup}>
                Добавить пользователя
            </BaseButton>
            <SelectorContainer>
                <SelectorLabel>
                    Сортировать по:
                </SelectorLabel>
                <BaseSelector onChange={toggleSelector}>
                    <option value={'username'}>Имя пользователя</option>
                    <option value={'email'}>Email</option>
                    <option value={'age'}>Возраст</option>
                    <option value={'country'}>Страна</option>
                </BaseSelector>
            </SelectorContainer>
            <AddUserPopup isOpen={isOPenPopup} closePopup={closePopup} addUserToList={state?.addUserToList} />
        </Container>
    )
}

export default Header