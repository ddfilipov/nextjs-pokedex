import { Inter } from "@next/font/google";
import { GetStaticProps } from "next";
import axios from "axios";
import { IGetPokemon } from "../interfaces";
import { PokemonBasicData } from "../components/PokemonBasicData";
import styled from "styled-components";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1200px;
    gap: 5px;
    padding: 5px;
    place-content: center;
`;

export default function Home({ results }: IGetPokemon) {
    const [offset, setOffset] = useState<number>(0);
    const limit = 20;

    useEffect(() => {
        console.log("offset:", offset);
    }, [offset]);

    return (
        <MainContainer>
            <h1>Pokédex</h1>
            <Wrapper>
                {results.map((pokemon) => {
                    return <PokemonBasicData id={pokemon.name} key={pokemon.name} />;
                })}
            </Wrapper>
            <button onClick={() => setOffset(offset - 20)}>PREVIOUS PAGE</button>
            <button onClick={() => setOffset(offset + 20)}>NEXT PAGE</button>
        </MainContainer>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const { results }: IGetPokemon = await res.data;

    return { props: { results: results } };
};
