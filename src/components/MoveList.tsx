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
        const technicalMachines = movesList.map((move) => {
            // return move.version_group_details.find((move2) => move2.version_group.name === defaultGameVersion);
            return {
                ...move,
                version_group_details: move.version_group_details.filter(
                    (version) => version.move_learn_method.name === "machine"
                ),
            };
        });

        const restOfMoves = ""; // TODO: there has to be a better way for this that's not filtering the movesList again

        // console.log("-- 2 --------------- DESPUÉS");
        // console.log(JSON.stringify(technicalMachines));
        // const prueba = versionGroupDetails.find((ver)=>ver.version_group.name ==="yellow")
        // defaultGameVersion
        // const primeraFase = json.filter((movimiento) => console.log(movimiento.version_group_details.filter((version)=>version.version_group.name === "red-blue")));
        const p3 = [
            {
                titulo: "tios",
                objeto: [
                    { nombre: "Denis", nacionalidad: "BG" },
                    { nombre: "Pepe", nacionalidad: "ES" },
                    { nombre: "Dimitar", nacionalidad: "BG" },
                ],
            },
            {
                titulo: "tias",
                objeto: [
                    { nombre: "Analina", nacionalidad: "BG" },
                    { nombre: "Luisa", nacionalidad: "ES" },
                    { nombre: "Petra", nacionalidad: "BG" },
                ],
            },
        ];

        const p3Filtrado = p3.filter((item) => item.titulo === "tios");
        // console.log(p3Filtrado)
        const p3Filtrado2 = p3.map((item) => {
            return { ...item, objeto: item.objeto.filter((subSubItems) => subSubItems.nacionalidad === "BG") };
        });
        // console.log(p3Filtrado2);
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
