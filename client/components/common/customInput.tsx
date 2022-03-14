import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface ICustomInputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    type: string;
    name: string;
    label: string;
};

const CustomInputContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;

const CustomInput: React.FC<ICustomInputProps> = ({ onChange, value, type, name, label }) => {
    return (
        <CustomInputContainer>
            <label>{label}</label>
            <input onChange={onChange} value={value} type={type} name={name} />
        </CustomInputContainer>
    )
}

export default CustomInput