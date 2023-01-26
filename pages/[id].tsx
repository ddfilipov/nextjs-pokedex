import axios from "axios";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { baseUrl } from ".";
import imageLoader from "../imageLoader";
import { Pokemon, IGetPokemon } from "../types/types";

interface PokemonCardProps {
    id: string;
}

interface IPokemonBasicData {
    name: string;
    src: string;
    id: number;
    types: string[];
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto 25px;
    justify-items: center;
    border: 1px solid black;
    padding: 5px;
    min-height: 260px;
    min-width: 200px;
    place-content: center;
`;

const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    place-content: center;
    column-gap: 10px;
    width: 100%;
    align-items: center;
`;

const TopCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    place-content: center;
    column-gap: 10px;
    width: 100%;
    align-items: center;
`;

export const PokemonData = ({ name }: Pokemon) => {
    console.log("entrando en PokemonData con name:", name);
    return (
        <div>
            <h1>POKEMON NAME: {name}</h1>
            <p>POKEMON DATA</p>
        </div>
    );
};
export default PokemonData;

export async function getStaticPaths() {
    const res = await axios.get(baseUrl);
    const { results }: IGetPokemon = await res.data;

    console.log("a ver res.data:", res.data);
    const pokemons = results.map((pokemon) => {
        return pokemon.id;
    });

    console.log("map de pokemons:", pokemons);

    return {
        paths: [{ params: { id: "1" } }],
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get(baseUrl + "/" + context.params?.id);
    // console.log("a ver ese res.data:", res.data);
    const { name }: Pokemon = await res.data;

    return { props: { name } };
};
