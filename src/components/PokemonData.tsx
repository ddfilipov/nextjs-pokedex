import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import imageLoader from "../imageLoader";
import { IPokemonBasicData } from "../types/types";
import { capitalizeFirstLetter } from "../utils/funcs";
import TypeContainer from "./TypeContainer";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: auto auto;
    gap: 10px;
    max-width: 1200px;
    border: 1px solid white;
    padding: 10px;
    background-color: var(--dark-color);
    color: white;
    min-width: 1200px;
`;
const PictureWrapper = styled.div`
    border: 1px solid white;
    padding: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
`;
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    width: auto;
    padding: 10px;
`;
const MovesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 1 / 2 / 3;
    border: 1px solid white;
    width: auto;
    height: 500px;
    padding: 10px;
`;

export const PokemonData: FC<IPokemonBasicData> = ({ name, id, types, src }) => {
    const router = useRouter();

    return (
        <Wrapper>
            <InfoWrapper>
                <h1>
                    #{id} {capitalizeFirstLetter(name)}
                </h1>
                <TypeContainer types={types} />
            </InfoWrapper>
            <PictureWrapper>
                <Image src={src} alt={name} width={200} height={200} loader={imageLoader} unoptimized />{" "}
            </PictureWrapper>
            <MovesWrapper>Moves/TMS</MovesWrapper>
            {/* <button type="button" onClick={() => router.back()}>
                BACK
            </button>*/}
        </Wrapper>
    );
};

export default PokemonData;
