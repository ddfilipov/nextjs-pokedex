import { FC } from "react";
import styled from "styled-components";

interface CustomTextProps {
    text: string;
}

const Text = styled.span`
    text-transform: capitalize;
    color: white;
`;

const CustomText: FC<CustomTextProps> = ({ text }) => {
    return <Text>{text}</Text>;
};

export default CustomText;
