import { Inter } from "@next/font/google";
import { GetStaticProps } from "next";
import axios from "axios";
import { IGetPokemon } from "../types/types";
import PokemonList from "../components/PokemonList";

const inter = Inter({ subsets: ["latin"] });
export const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export default function Home({ results }: IGetPokemon) {
    return (
        <>
            <PokemonList results={results} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get(baseUrl);

    const { results }: IGetPokemon = await res.data;

    return { props: { results: results } };
};
