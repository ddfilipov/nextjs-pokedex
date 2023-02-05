import { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const MoveList: FC = () => {
    return (
        <Container>
            <ul>
                MOVES
                <li>Move 1</li>
                <li>Move 2</li>
                <li>Move 3</li>
            </ul>
        </Container>
    );
};
export default MoveList;
