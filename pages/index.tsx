import { Inter } from "@next/font/google";
import { GetStaticProps } from "next";
import axios from "axios";
import { IGetPokemon, Pokemon } from "../interfaces";
import { PokemonBasicData } from "../components/PokemonBasicData";
import styled from "styled-components";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const baseUrl = "https://pokeapi.co/api/v2/pokemon";

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

const MINIMUMOFFSET: number = 0;

export default function Home({ results }: IGetPokemon) {
    const limit = 20;
    const [offset, setOffset] = useState<number>(0);
    const [pokemons, setPokemons] = useState<Pokemon[]>(results);

    const nextPage = async () => {
        console.log("*** 1A - nextPage");
        setOffset(offset + limit);
        await loadPokemon(offset + limit);
    };
    const previousPage = async () => {
        console.log("*** 1B - previousPage");
        if (offset > 0) {
            console.log("*** 1B.1 - IF previousPage");
            setOffset(offset - limit);

            await loadPokemon(offset - limit);
        }
        // offset > 0 ? setOffset(offset - limit) : null;
    };

    const loadPokemon = async (searchFrom: number) => {
        console.log("*** 2 - hola estoy cargando los pokemon a partir del numero offset:", offset);
        const res = await axios.get(`${baseUrl}?offset=${searchFrom}&limit=${limit}`);
        setPokemons(res.data.results);
        console.log("*** 4 - he hecho setPokemons, a ver pokemons:::", pokemons);
    };

    useEffect(() => {
        console.log("*** 3a - useEffect offset CAMBIANDO:", offset);
        console.log("*** 3b - useEffect pokemons CAMBIANDO:", pokemons);
    }, [offset, pokemons]);

    return (
        <MainContainer>
            <h1>Pokédex</h1>
            <button onClick={previousPage}>PREVIOUS PAGE</button>
            <button onClick={nextPage}>NEXT PAGE</button>
            <Wrapper>
                {pokemons.map((pokemon) => {
                    return <PokemonBasicData id={pokemon.name} key={pokemon.name} />;
                })}
            </Wrapper>
        </MainContainer>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get(baseUrl);
    // console.log("context:", context);

    const { results }: IGetPokemon = await res.data;

    return { props: { results: results } };
};
