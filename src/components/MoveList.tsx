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
        // console.log("-- 1 --------------- ANTES");
        // console.log(JSON.stringify(movesList));
        // const filteresMoves = movesList.filter((move) =>
        //     move.version_group_details.find((move2) => move2.version_group.name === defaultGameVersion)
        // );
        // console.log(movesList);
        console.log(JSON.stringify(movesList));
        const technicalMachines = movesList.map((move) => {
            // return move.version_group_details.find((move2) => move2.version_group.name === defaultGameVersion);
            return {
                ...move,
                version_group_details: move.version_group_details.filter(
                    (version) => version.move_learn_method.name === "machine"
                ),
            };
        });
        // is this gonna be the one??????
        // const newMoves = json.flatMap((element) =>
        //     element.version_group_details.filter((group) => group.version_group.name === "red-blue")
        // );
        // console.log(newMoves);

        const restOfMoves = ""; // TODO: there has to be a better way for this that's not filtering the movesList again
        const cars = [
            {
                brand: { name: "BMW" },
                models: [
                    {
                        name: "BMW1",
                    },
                    {
                        name: "BMW2",
                    },
                ],
            },
            {
                brand: { name: "Toyota" },
                models: [
                    {
                        name: "Toyota1",
                    },
                    {
                        name: "Toyota2",
                    },
                ],
            },
            {
                brand: { name: "Mercedes" },
                models: [
                    {
                        name: "Mercedes1",
                    },
                    {
                        name: "Mercedes2",
                    },
                ],
            },
        ];
        const newAbilities = cars.filter((car) => car.models.some((model) => model.name === "Mercedes1"));
        // console.log(p3Filtrado2); still no
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
