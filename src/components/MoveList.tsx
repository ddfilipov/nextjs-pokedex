import { FC, useEffect } from "react";
import styled from "styled-components";
import { PokemonMove, defaultGameVersion, MoveGroup } from "../types/types";
import CustomText from "./atoms/CustomText";

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
    moves: MoveGroup[];
}

export const MoveList: FC<MoveListProps> = ({ moves }) => {
    useEffect(() => {
        console.log("-- 1 ---------------");
        console.log(JSON.stringify(moves));
        console.log("-- 2 ---------------");
        const filteresMoves = moves.filter((move) =>
            move.version_group_details.find((move2) => move2.version_group.name === defaultGameVersion)
        );
        // defaultGameVersion
    }, []);
    return (
        <Container>
            <ul>
                MOVES
                {moves.map((move, index) => (
                    <li key={move.move.name}>
                        <CustomText
                            text={`${move.move.name} (${
                                (move as any).version_group_details[0].move_learn_method.name
                            }) - ${(move as any).version_group_details[0].version_group.name}`}
                            //TODO: version-group
                        />
                    </li> //moves.moves wot? fix this
                ))}
            </ul>
        </Container>
    );
};
export default MoveList;
