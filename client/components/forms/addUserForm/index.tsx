import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import API from '../../../api';
import { ToastContext } from '../../../pages';
import { userValidation } from '../../../utils/common';
import { IAddUserPopupProps } from '../../../utils/types';
import { useFormState } from '../../../utils/useFormState';
import { ErrorContainer } from '../../common';
import CountryInput from '../../common/countryInput';
import CustomInput from '../../common/customInput';



function AddUserForm(props: IAddUserPopupProps) {
    const toast = useContext(ToastContext);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { formState, onChange, clearForm } = useFormState();
    const submitDisabled = () => {
        if (userValidation(formState) !== true || isLoading) {
            return true
        }
        return false
    }

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        const valid = userValidation(formState);
        if (valid !== true) {
            return setError(valid)
        }
        API.addUser(formState)
            .then((res) => {
                if (props.addUserToList) {
                    props.addUserToList(res.data);
                    props.closePopup();
                    toast.openToast('Пользователь создан');
                    setError('');
                    clearForm();
                }
            })
            .catch(() => {
                toast.openToast('Error. Please try later.', 'red');
                setError('Error. Please try later.');
            })
    };

    return (
        <form onSubmit={submit}>
            <CustomInput onChange={onChange}
                value={formState.username}
                type={'text'}
                name={'username'}
                label={'Username'} />
            <CustomInput onChange={onChange}
                value={formState.email}
                type={'email'}
                name={'email'}
                label={'Email'} />
            <CustomInput onChange={onChange}
                value={formState.age}
                type={'number'}
                name={'age'}
                label={'Age'} />
            <CountryInput label='Country' onChange={onChange} value={formState.country} />
            <ErrorContainer>
                <label>{error}</label>
            </ErrorContainer>
            <button disabled={submitDisabled()} type='submit'>Создать</button>
        </form>
    )
};

export default AddUserForm