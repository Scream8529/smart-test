import React, { SyntheticEvent, useContext, useState } from 'react'
import API from '../../../api';
import { StateContext, ToastContext } from '../../../pages';
import { userValidation } from '../../../utils/common';
import { IEditUserPopupProps } from '../../../utils/types';
import { useFormState } from '../../../utils/useFormState';
import { ErrorContainer } from '../../common';
import CountryInput from '../../common/countryInput';
import CustomInput from '../../common/customInput';

const EditUserForm: React.FC<IEditUserPopupProps> = (props) => {
    const { formState, onChange, clearForm } = useFormState(props.user ?? null);
    const users = useContext(StateContext);
    const toast = useContext(ToastContext);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const submitDisabled = () => {
        if (userValidation(formState) !== true || isLoading) {
            return true
        }
        return false
    }

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        setIsLoading(true);
        const valid = userValidation(formState);
        if (valid !== true) {
            return setError(valid)
        }
        API.updateUser(formState)
            .then((res) => {
                if (props.updateUserInList) {
                    props.updateUserInList(res.data.user);
                    props.closePopup();
                    toast.openToast('Пользователь обновлен');
                    setError('');
                    clearForm();
                }
            })
            .catch(() => {
                toast.openToast('Error. Please try later.', 'red');
                setError('Error. Please try later.');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const removeUser = () => {
        setIsLoading(true);
        API.removeUser(props.user._id)
            .then(() => {
                toast.openToast('Пользователь удален');
                clearForm();
                props.closePopup();
                users?.removeUser(props.user)
            })
            .catch(() => {
                toast.openToast('Ошибка удаления', 'red')
            })
            .finally(() => {
                setIsLoading(false)
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
            <CountryInput onChange={onChange} value={formState.country} label={'Country'} />
            <ErrorContainer>
                <label>{error}</label>
            </ErrorContainer>
            <button disabled={submitDisabled()} type={'submit'}>Редактировать</button>
            <button onClick={removeUser} type={'button'}>Удалить</button>
        </form>
    )
}

export default EditUserForm