import React, { SyntheticEvent } from 'react'
import { stopPropagation } from '../../utils/common';
import { IEditUserPopupProps } from '../../utils/types';
import { PopupContainer, PopupContant } from '../common';
import EditUserForm from '../forms/editUserForm';

function EditUserPopup(props: IEditUserPopupProps) {

    const closePopup = (e: SyntheticEvent<HTMLDivElement>) => {
        props.closePopup();
    };

    if (!props.user) {
        return <></>
    }

    return (
        <PopupContainer onClick={closePopup} isOpen={props.isOpen}>
            <PopupContant onClick={stopPropagation}>
                <EditUserForm {...props} />
            </PopupContant>
        </PopupContainer>
    )
}

export default EditUserPopup