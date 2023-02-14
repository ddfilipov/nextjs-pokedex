import { FC, HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

interface CustomInputProps {
    inputType?: HTMLInputTypeAttribute;
    placeholder?: string;
}

const StyledInput = styled.input`
    width: auto;
    height: 48px;
`;

export const CustomInput: FC<CustomInputProps> = ({ inputType, placeholder }) => {
    return <StyledInput type={inputType} placeholder={placeholder}></StyledInput>;
};

export default CustomInput;
