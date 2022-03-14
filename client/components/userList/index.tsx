import React, { useContext, useState, } from 'react';
import styled from 'styled-components';
import { StateContext } from '../../pages';
import { IUser } from '../../utils/types';
import EditUserPopup from '../editUserPopup';

const Row = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 1fr 2fr 1fr;
    text-align:center;
    height: 50px;
    line-height: 50px;
`;

const Column = styled.div`
    border: 1px solid black;
`;

function UserList() {
    const state = useContext(StateContext);
    const [editPopup, setEditPopup] = useState<{ isOpen: boolean, user: null | IUser }>({ isOpen: false, user: null });
    const openPopup = (user: IUser) => {
        setEditPopup({ isOpen: true, user: user })
    }
    const closePopup = () => {
        setEditPopup({ isOpen: false, user: null })
    }
    return (
        <>
            <Row>
                <Column>Имя пользователя</Column>
                <Column>Email</Column>
                <Column>Возраст</Column>
                <Column>Страна</Column>
            </Row>
            {
                state !== null && state.users.map((user) => (
                    <Row key={user._id}>
                        <Column>{user.username}</Column>
                        <Column>{user.email}</Column>
                        <Column>{user.age}</Column>
                        <Column>{user.country}</Column>
                        <Column>
                            <button onClick={() => { openPopup(user); }}>edit</button>
                        </Column>
                    </Row>
                ))
            }
            <EditUserPopup
                isOpen={editPopup.isOpen}
                user={editPopup.user}
                closePopup={closePopup}
                updateUserInList={state?.updateUserInList} />
        </>
    )
}

export default UserList;