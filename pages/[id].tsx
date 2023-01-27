import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
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

export const PokemonData = ({ name, id }: IPokemonBasicData) => {
    console.log("entrando en PokemonData con name:", name);
    console.log("entrando en PokemonData con id:", id);
    return (
        <div>
            <h1>POKEMON NAME: {name}</h1>
            <p>POKEMON DATA</p>
        </div>
    );
};
export default PokemonData;

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get(baseUrl);
    const { results }: IGetPokemon = await res.data;

    // console.log("a ver res.data:", res.data);
    // console.log("xxxxxxxxxxx a ver results:", results);
    const pokemons = results.map((pokemon) => {
        console.log("checking current pokemon:", pokemon);
        return pokemon.name;
    });

    console.log("pokemons:", pokemons);
    console.log("pokemons[0]:", pokemons[0]);

    const helper = ["1", "2", "3", "4", "5"];
    return {
        paths: [{ params: { id: "bulbasaur" } }],
        fallback: false,
    };
    return {
        paths: results.map((pokemon) => {
            const pokemonName = pokemon.name;
            return {
                params: {
                    helper,
                },
            };
        }),
        // paths: [{ params: pokemons[0] }],
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log("sacando context.params?.id:", params?.id);
    const res = await axios.get(baseUrl + "/" + params?.id);
    // console.log("a ver ese res.data:", res.data);
    const { name }: Pokemon = await res.data;

    return { props: { name } };
};
