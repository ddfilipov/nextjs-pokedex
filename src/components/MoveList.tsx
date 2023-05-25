import { FC, useEffect, useState } from "react";
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

interface ISimplifiedMoves {
    moveName: string;
    lvlLearnedAt: number;
    learnMethod: string;
}
export const MoveList: FC<MoveListProps> = ({ movesList }) => {
    const [lvlUpMoves, setLvlUpMoves] = useState<ISimplifiedMoves[]>([]);
    useEffect(() => {
        console.log(JSON.stringify(movesList));
        // is this gonna be the one??????
        const newMoves = movesList
            .map((element) => {
                return {
                    moveName: element.move.name,
                    version_group_details: element.version_group_details.filter(
                        (group) => group.version_group.name === "red-blue"
                    ),
                };
            })
            .filter((element) => element.version_group_details.length > 0)
            .map((elm) => {
                return {
                    moveName: elm.moveName,
                    lvlLearnedAt: elm.version_group_details[0].level_learned_at,
                    learnMethod: elm.version_group_details[0].move_learn_method.name,
                };
            });
        setLvlUpMoves(newMoves);
    }, []);

    return (
        <Container>
            <ul>
                MOVES
                {lvlUpMoves.map((move, index) => (
                    <li key={move.moveName}>
                        <CustomText
                            text={`${move.moveName} (${move.learnMethod}) - ${move.lvlLearnedAt}`}
                            //TODO: version-group
                        />
                    </li> //moves.moves wot? fix this
                ))}
            </ul>
        </Container>
    );
};
export default MoveList;
