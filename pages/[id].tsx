import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import styled from "styled-components";
import { baseUrl } from ".";
import { Pokemon, IGetPokemon, IPokemonBasicData } from "../types/types";

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
    // console.log("a ver ese res.data:", res.data);
    const { name }: Pokemon = await res.data;

    return { props: { name } };
};
