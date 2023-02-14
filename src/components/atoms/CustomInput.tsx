import { FC, HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

interface CustomInputProps {
    inputType?: HTMLInputTypeAttribute;
    placeholder?: string;
}

const StyledInput = styled.input`
    width: auto;
    min-height: 48px;
    padding: 10px;
    background-color: var(--dark-color);
    color: white;
    border: 1px solid #767676;
    border-radius: 10px;
`;

export const CustomInput: FC<CustomInputProps> = ({ inputType, placeholder }) => {
    return <StyledInput type={inputType} placeholder={placeholder}></StyledInput>;
};

export default CustomInput;
