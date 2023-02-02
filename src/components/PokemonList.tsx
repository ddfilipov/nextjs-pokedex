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
