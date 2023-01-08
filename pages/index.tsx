import { Inter } from "@next/font/google";
import { GetStaticProps } from "next";
import axios from "axios";
import { IGetPokemon } from "../interfaces";
import PokemonList from "../components/PokemonList";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ results }: IGetPokemon) {
    return <PokemonList results={results} />;
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const { results }: IGetPokemon = await res.data;

    return { props: { results: results } };
};
