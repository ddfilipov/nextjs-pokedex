import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import { ITypeColors, typeStyles } from "../styles/const";
import { IPokemonBasicData, PokeTypes } from "../types/types";
import { capitalizeFirstLetter } from "../utils/funcs";

interface TypeContainerProps {
    types: PokeTypes[];
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    place-content: center;
    column-gap: 10px;
    width: 100%;
    align-items: center;
`;

const TypeSpan = styled.span<ITypeColors>`
    background-color: ${(props) => `var(${props.backgroundColor})`};
    color: white;
    padding: 3px;
    font-weight: bold;
    border-radius: 5px;
    min-width: 60px;
    text-align: center;
`;

export const TypeContainer: FC<TypeContainerProps> = ({ types }) => {
    const router = useRouter();

    return (
        <Wrapper>
            {types.map((type) => {
                return (
                    <TypeSpan key={type} backgroundColor={typeStyles[type].backgroundColor}>
                        {capitalizeFirstLetter(type)}
                    </TypeSpan>
                );
            })}
        </Wrapper>
    );
};

export default TypeContainer;
