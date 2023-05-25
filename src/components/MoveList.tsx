import { FC, useEffect } from "react";
import styled from "styled-components";
import { MoveGroup } from "../types/types";
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
    movesList: MoveGroup[];
}

export const MoveList: FC<MoveListProps> = ({ movesList }) => {
    useEffect(() => {
        console.log(JSON.stringify(movesList));
        // is this gonna be the one??????
        const newMoves = movesList.map((element) => {
            return {
              move: element.move,
              version_group_details: element.version_group_details.filter(
                (group) => group.version_group.name === "red-blue"
              ),
            };
          });
    }, []);

    return (
        <Container>
            <ul>
                MOVES
                {movesList.map((move, index) => (
                    <li key={move.move.name}>
                        <CustomText
                            text={`${move.move.name} (${
                                (move as any).version_group_details[0].move_learn_method.name
                            }) - ${(move as any).version_group_details[0].version_group.name}- ${
                                (move as any).version_group_details[0].level_learned_at
                            }`}
                            //TODO: version-group
                        />
                    </li> //moves.moves wot? fix this
                ))}
            </ul>
        </Container>
    );
};
export default MoveList;
