import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import imageLoader from "../imageLoader";
import { CustomButton } from "../styles/GlobalStyle";
import { IPokemonExtendedData } from "../types/types";
import { capitalizeFirstLetter } from "../utils/funcs";
import MoveList from "./MoveList";
import TypeContainer from "./atoms/TypeContainer";

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

interface IStat {
    name: string;
    statNumber: number;
}

export const PokemonData: FC<IPokemonExtendedData> = ({ name, id, types, src, moves, stats, stats2 }) => {
    const router = useRouter();
    const [estadisticas, setEstadisticas] = useState<string[]>([""]);
    const [estadisticas2, setEstadisticas2] = useState<IStat[]>();

    useEffect(() => {
        // console.log("hola PokemonData, a ver esos stats2:", stats2);
        getStats();
        console.log(estadisticas2);
    }, []);

    const getStats = () => {
        const estadisticas = Object.keys(stats2);
        estadisticas.forEach((a, b) => {
            // setEstadisticas2();
            console.log("a:", a, "b:", b);
        });
        console.log(stats2);
        console.log(estadisticas2);
        // setEstadisticas(estadisticas);
    };

    return (
        <>
            <CustomButton type="button" onClick={() => router.back()}>
                BACK
            </CustomButton>
            <Wrapper>
                <InfoWrapper>
                    <h1>
                        #{id} {capitalizeFirstLetter(name)}
                    </h1>
                    <TypeContainer types={types} />
                    {Object.entries(stats2).map(([key, value]) => (
                        <>
                            <div key={key}>{key}</div>
                            <div key={key}>{value}</div>
                        </>
                    ))}
                    {/* <ul>
                        {estadisticas.map((stat) => (
                            <li>{stat}</li>
                        ))}
                    </ul> */}
                </InfoWrapper>
                <PictureWrapper>
                    <Image src={src} alt={name} width={200} height={200} loader={imageLoader} unoptimized />{" "}
                </PictureWrapper>
                <MovesWrapper>
                    <MoveList moves={moves} />
                </MovesWrapper>
            </Wrapper>
        </>
    );
};

export default PokemonData;
