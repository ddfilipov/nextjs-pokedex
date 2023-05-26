import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ISimplifiedMoves, MoveGroup } from "../../types/types";
import CustomText from "../atoms/CustomText";

const Container = styled.div`
    display: grid;
    border: 1px solid white;
    overflow-y: auto;
    min-width: 300px;
    width: 100%;
    ul {
        list-style: none;
    }

    &::-webkit-scrollbar {
        width: 1em;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
    }
`;

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 5px;
    li {
        background-color: #151100;
    }
`;

interface MoveListProps {
    movesList: ISimplifiedMoves[];
    title: string;
}

export const MoveList: FC<MoveListProps> = ({ movesList, title }) => {
    return (
        <>
            <Container>
                <h2>{title}</h2>
                <StyledList>
                    <li>Name - Lvl/HM/TM</li>
                    {movesList.map((move, index) => (
                        <li key={move.moveName}>
                            <CustomText text={`${move.moveName} - ${move.lvlLearnedAt}`} />
                        </li>
                    ))}
                </StyledList>
            </Container>
        </>
    );
};
export default MoveList;
