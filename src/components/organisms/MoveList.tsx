import { FC } from "react";
import styled from "styled-components";
import { ISimplifiedMoves, MoveLearnMethod } from "../../types/types";
import CustomKeyValueCell from "../atoms/CustomKeyValueCell";

const Container = styled.div`
    display: grid;
    border: 1px solid white;
    overflow-y: auto;
    min-width: 300px;
    width: 100%;
    max-height: 500px;
    padding: 20px;

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
`;

interface MoveListProps {
    movesList: ISimplifiedMoves[];
    title: string;
    moveType: MoveLearnMethod;
}

export const MoveList: FC<MoveListProps> = ({ movesList, title, moveType }) => {
    return (
        <>
            <Container>
                <h2>{title}</h2>
                <StyledList>
                    <CustomKeyValueCell firstValue={"Name"} secondValue={"Lvl learned at"} />
                    {movesList.map((move, index) => (
                        <CustomKeyValueCell
                            key={move.moveName}
                            firstValue={move.moveName}
                            secondValue={move.lvlLearnedAt.toString()}
                        />
                    ))}
                </StyledList>
            </Container>
        </>
    );
};
export default MoveList;
