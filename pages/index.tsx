import { Inter } from "@next/font/google";
import { GetStaticProps } from "next";
import axios from "axios";
import { IGetPokemon } from "../interfaces";
import PokemonList, { PokemonBasicData } from "../components/PokemonBasicData";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ results }: IGetPokemon) {
    return (
        <>
            <h1>Pokédex</h1>
            {results.map((pokemon) => {
                // getPokemonData(pokemon.name);
                // return <li key={pokemon.name}>{pokemon.name} </li>;
                return <PokemonBasicData id={pokemon.name} />;
            })}
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const { results }: IGetPokemon = await res.data;

    return { props: { results: results } };
};
