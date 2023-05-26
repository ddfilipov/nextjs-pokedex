import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ISimplifiedMoves, MoveGroup } from "../../types/types";
import CustomText from "../atoms/CustomText";

const Container = styled.li`
    display: grid;
    grid-template-columns: 1fr 1fr;
    span {
        background-color: #151100;
        padding: 5px;
        border-radius: 10px;
        text-align: center;
    }
    gap: 10px;
`;

interface CustomKeyValueProps {
    firstValue: string;
    secondValue: string;
}

export const CustomKeyValueCell: FC<CustomKeyValueProps> = ({ firstValue, secondValue }) => {
    return (
        <Container>
            <span>{firstValue}</span>
            <span>{secondValue}</span>
        </Container>
    );
};
export default CustomKeyValueCell;
