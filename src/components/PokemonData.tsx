import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import imageLoader from "../imageLoader";
import { IPokemonBasicData } from "../types/types";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    border: 1px solid white;
    padding: 10px;
    background-color: var(--dark-color);
    color: white;
    max-width: 1200px;
`;
const PictureWrapper = styled.div`
    display: flex;
    background-color: red;
    width: 100%;
    max-width: 250px;
    height: 200px;
`;
const InfoWrapper = styled.div`
    display: flex;
    background-color: blue;
    width: auto;
    /* min-width: 350px; */
    height: 200px;
`;
const MovesWrapper = styled.div`
    display: flex;
    flex-basis: 100%;
    background-color: green;
    width: 500px;
    height: 500px;
`;

export const PokemonData: FC<IPokemonBasicData> = ({ name, id, types, src }) => {
    const router = useRouter();

    return (
        <Wrapper>
            <InfoWrapper>General info</InfoWrapper>
            <PictureWrapper>Picture</PictureWrapper>
            <MovesWrapper>Moves/TMS</MovesWrapper>
            {/* <button type="button" onClick={() => router.back()}>
                BACK
            </button>
            <h1>{name}</h1>
            <h1>{id}</h1>
            <h1>{types}</h1>
            <Image src={src} alt={name} width={200} height={200} loader={imageLoader} unoptimized /> */}
        </Wrapper>
    );
};

export default PokemonData;
