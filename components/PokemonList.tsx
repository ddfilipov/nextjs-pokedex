import axios from "axios";
import { GetStaticProps } from "next";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { IGetPokemon, Pokemon } from "../types/types";
import PokemonCard from "./PokemonCard";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 5px;
    h1 {
        color: white;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    gap: 5px;
    padding: 5px;
    place-content: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    flex-basis: 100%;
    button {
        padding: 5px;
        min-width: 150px;
    }
`;

const MINIMUMOFFSET: number = 0;

export const PokemonList = ({ results }: IGetPokemon) => {
    const limit = 20;
    const [offset, setOffset] = useState<number>(0);
    const [pokemons, setPokemons] = useState<Pokemon[]>(results);

    const nextPage = async () => {
        await loadPokemon(offset + limit);
        setOffset(offset + limit);
    };
    const previousPage = async () => {
        if (offset > MINIMUMOFFSET) {
            await loadPokemon(offset - limit);
            setOffset(offset - limit);
        }
    };

    const loadPokemon = async (searchFrom: number) => {
        const res = await axios.get(`${baseUrl}?offset=${searchFrom}&limit=${limit}`);
        setPokemons(res.data.results);
    };

    return (
        <MainContainer>
            <h1>Pokédex</h1>
            <Wrapper>
                {pokemons.map((pokemon) => {
                    return <PokemonCard id={pokemon.name} key={pokemon.name} />;
                })}
            </Wrapper>
            <ButtonContainer>
                <button onClick={previousPage}>PREVIOUS PAGE</button>
                <button onClick={nextPage}>NEXT PAGE</button>
            </ButtonContainer>
        </MainContainer>
    );
};
export default PokemonList;
