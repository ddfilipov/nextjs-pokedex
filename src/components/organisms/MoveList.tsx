import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { ISimplifiedMoves, MoveGroup } from "../../types/types";
import CustomText from "../atoms/CustomText";

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid white;
    overflow-y: auto;
    padding: 10px;

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

interface MoveListProps {
    movesList: ISimplifiedMoves[];
}

export const MoveList: FC<MoveListProps> = ({ movesList }) => {
    return (
        <>
            <Container>
                <ul>
                    Level Up Moves
                    {movesList.map((move, index) => (
                        <li key={move.moveName}>
                            <CustomText
                                text={`${move.moveName} (${move.learnMethod}) - ${move.lvlLearnedAt}`}
                                //TODO: version-group
                            />
                        </li> //moves.moves wot? fix this
                    ))}
                </ul>
            </Container>
        </>
    );
};
export default MoveList;
