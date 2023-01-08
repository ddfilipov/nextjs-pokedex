import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import { GetStaticProps } from "next";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ results }: any) {
    return (
        <>
            <h1>Pokédex</h1>
            {JSON.stringify(results)}
        </>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const { results }: any = await res.data;
    
    return { props: { results: results } };
};
