import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import styled from "styled-components";
import { baseUrl } from "..";
import { Pokemon, IGetPokemon, IPokemonBasicData } from "../../types/types";

export const PokemonData = ({ name, id }: IPokemonBasicData) => {
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

    const pokemons = results.map((pokemon) => {
        return { params: { id: pokemon.name } };
    });

    return {
        paths: pokemons,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const res = await axios.get(baseUrl + "/" + params?.id);
    console.log("a ver ese res.data:", res.data);

    const { name }: Pokemon = await res.data;

    return { props: { name } };
};
