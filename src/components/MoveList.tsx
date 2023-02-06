import { FC } from "react";
import styled from "styled-components";
import { PokemonMove } from "../types/types";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    overflow-y: auto;
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
                <li>Move 1</li>
                <li>Move 2</li>
                <li>Move 3</li>
            </ul>
        </Container>
    );
};
export default MoveList;