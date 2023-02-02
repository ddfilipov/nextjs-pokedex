import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import imageLoader from "../imageLoader";
import { IPokemonBasicData } from "../types/types";

const Wrapper = styled.div`
    border: 1px solid white;
    padding: 10px;
    background-color: var(--dark-color);
    color: white;
`;

export const PokemonData: FC<IPokemonBasicData> = ({ name, id, types, src }) => {
    return (
        <Wrapper>
            <h1>{name}</h1>
            <h1>{id}</h1>
            <h1>{types}</h1>
            <Image src={src} alt={name} width={200} height={200} loader={imageLoader} unoptimized />
            <p>POKEMON DATA</p>
        </Wrapper>
    );
};

export default PokemonData;
