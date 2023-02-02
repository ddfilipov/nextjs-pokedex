import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import imageLoader from "../imageLoader";
import { IPokemonBasicData } from "../types/types";

const Wrapper = styled.div`
    
`

export const PokemonData: FC<IPokemonBasicData> = ({ name, id, types, src }) => {
    return (
        <Wrapper>
            <h1>POKEMON NAME: {name}</h1>
            <h1>POKEMON id: {id}</h1>
            <h1>POKEMON types: {types}</h1>
            <Image src={src} alt={name} width={200} height={200} loader={imageLoader} unoptimized />
            <p>POKEMON DATA</p>
        </Wrapper>
    );
};

export default PokemonData;
