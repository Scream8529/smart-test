import React, { ChangeEvent } from 'react'
import styled from 'styled-components';
import { countryList } from '../../utils/countryList';

const CustomInputContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`;
interface CountryInputProps {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string | number;
    label: string;
}

function CountryInput({
    onChange,
    value,
    label
}: CountryInputProps) {
    return (<>
        <CustomInputContainer>
            <label>{label}</label>
            <input
                type="text"
                list="country"
                autoComplete="of"
                name={'country'}
                onChange={onChange}
                value={value} />
            <datalist id="country">
                {
                    countryList.map((country, index) => (
                        <option key={index} value={country}>{country}</option>
                    ))
                }
            </datalist>

        </CustomInputContainer>
    </>);
}

export default CountryInput