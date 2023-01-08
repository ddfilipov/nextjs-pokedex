import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { GetStaticProps } from "next";
import axios from "axios";
import { IGetPokemon } from "../interfaces";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ results }: IGetPokemon) {
    return (
        <>
            <h1>Pokédex</h1>
            {results.map((pokemon) => {
                return <li>{pokemon.name} </li>;
            })}
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const { results }: IGetPokemon = await res.data;

    return { props: { results: results } };
};
