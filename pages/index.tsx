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
    const [offset, setOffset] = useState<number>(20);
    const [pokemons, setPokemons] = useState<Pokemon[]>(results);
    const limit = 20;

    const nextPage = () => {
        setOffset(offset + limit);
        loadPokemon(offset);
    };
    const previousPage = () => {
        offset > 0 ? setOffset(offset - limit) : null;
        loadPokemon(offset);
    };

    const loadPokemon = async (searchFrom: number) => {
        // console.log("hola estoy cargando los pokemon a partir del numero offset:", offset);
        const res = await axios.get(`${baseUrl}?offset=${searchFrom}&limit=${limit}`);
        // setPokemons((asd)=>[...asd, ...res.data.results]);
        setPokemons((element)=>res.data.results)
        console.log("*** ",pokemons);
    };

    useEffect(() => {
        // console.log("offset:", offset);
    }, [offset]);

    return (
        <MainContainer>
            <h1>Pokédex</h1>
            <Wrapper>
                {pokemons.map((pokemon) => {
                    return <PokemonBasicData id={pokemon.name} key={pokemon.name} />;
                })}
            </Wrapper>
            <button onClick={previousPage}>PREVIOUS PAGE</button>
            <button onClick={nextPage}>NEXT PAGE</button>
        </MainContainer>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get(baseUrl);
    // console.log("context:", context);

    const { results }: IGetPokemon = await res.data;

    return { props: { results: results } };
};
