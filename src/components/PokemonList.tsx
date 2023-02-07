import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { IGetPokemon, Pokemon } from "../types/types";
import PokemonCard from "./PokemonCard";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1200px;
    gap: 10px;
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

const ButtonStyled = styled.button`
    border-radius: 10px;
    border: 2px solid var(--secondary-color);
    height: 50px;
    background-color: var(--dark-color);
    color: white;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
`;

const TitleStyled = styled.h1`
    font-size: 3rem;
    color: var(--secondary-color);
    color: white;
`;

const MINIMUMOFFSET: number = 0;

export const PokemonList = ({ results }: IGetPokemon) => {
    const limit = 20;
    const [pokemons, setPokemons] = useState<Pokemon[]>(results.slice(0, 20));
    const [page, setPage] = useState(0);

    const getPokemonFiltered = () => {
        const pokemonFilter = results.slice(page + 1, limit);
        setPokemons(pokemonFilter);
    };

    const nextPage = () => {
        console.log("sadas");
        getPokemonFiltered();
        setPage((p) => p++);
    };
    const previousPage = () => {
        getPokemonFiltered();
        setPage((p) => p--);
    };

    return (
        <>
            <TitleStyled>NextjsDex</TitleStyled>
            <Wrapper>
                {pokemons.map((pokemon) => {
                    return <PokemonCard id={pokemon.name} key={pokemon.name} />;
                })}
            </Wrapper>
            <ButtonContainer>
                <ButtonStyled onClick={previousPage}>PREVIOUS PAGE</ButtonStyled>
                <ButtonStyled onClick={nextPage}>NEXT PAGE</ButtonStyled>
            </ButtonContainer>
        </>
    );
};
export default PokemonList;
