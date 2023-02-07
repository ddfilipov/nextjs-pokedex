import { FC } from "react";
import styled from "styled-components";
import { PokemonMove } from "../types/types";

const Container = styled.div`
    display: flex;
    flex-direction: column;
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
    moves: PokemonMove[];
}

export const MoveList: FC<MoveListProps> = ({ moves }) => {
    return (
        <Container>
            <ul>
                MOVES
                {moves.map((move, index) => (
                    <li key={move.move.name}>{move.move.name}</li>
                ))}
            </ul>
        </Container>
    );
};
export default MoveList;
