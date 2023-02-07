import { Inter } from "@next/font/google";
import { GetStaticProps } from "next";
import axios from "axios";
import { IGetPokemon } from "../types/types";
import PokemonList from "../components/PokemonList";
import GlobalStyle from "../styles/GlobalStyle";

const inter = Inter({ subsets: ["latin"] });
export const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export default function Home({ results }: IGetPokemon) {
    return (
        <>
            <GlobalStyle />
            <PokemonList results={results} />
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get(`${baseUrl}?offset=0&limit=151`);
    const { results }: IGetPokemon = await res.data;

    return { props: { results: results } };
};
