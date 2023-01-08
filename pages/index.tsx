import { Inter } from "@next/font/google";
import { GetStaticProps } from "next";
import axios from "axios";
import { IGetPokemon } from "../interfaces";
import PokemonList, { PokemonBasicData } from "../components/PokemonBasicData";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1200px;
`;

export default function Home({ results }: IGetPokemon) {
    return (
        <>
            <h1>Pokédex</h1>
            <Wrapper>
                {results.map((pokemon) => {
                    // getPokemonData(pokemon.name);
                    // return <li key={pokemon.name}>{pokemon.name} </li>;
                    return <PokemonBasicData id={pokemon.name} key={pokemon.name} />;
                })}
            </Wrapper>
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const { results }: IGetPokemon = await res.data;

    return { props: { results: results } };
};
