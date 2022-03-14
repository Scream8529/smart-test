import React from 'react'
import { stopPropagation } from '../../utils/common';
import { IAddUserPopupProps, IUser } from '../../utils/types';
import { PopupContainer, PopupContant } from '../common';
import AddUserForm from '../forms/addUserForm';

function AddUserPopup(props: IAddUserPopupProps) {
    return (
        <PopupContainer onClick={props.closePopup} isOpen={props.isOpen}>
            <PopupContant onClick={stopPropagation}>
                <AddUserForm {...props} />
            </PopupContant>
        </PopupContainer>
    )
}

export default AddUserPopup