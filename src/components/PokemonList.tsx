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

export const ButtonStyled = styled.button`
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
const MAXIMUMOFFSET: number = 151;

export const PokemonList = ({ results }: IGetPokemon) => {
    const resultsPerPage = 20;

    const [showFrom, setShowFrom] = useState<number>(0);
    const [showTo, setShowTo] = useState<number>(20);
    const [pokemons, setPokemons] = useState<Pokemon[]>(results.slice(showFrom, showTo));

    const nextPage = () => {
        if (showTo < MAXIMUMOFFSET) {
            setShowFrom(showFrom + resultsPerPage);
            setShowTo(showTo + resultsPerPage);
            loadPokemon(showFrom + resultsPerPage, showTo + resultsPerPage);
        }
    };
    const previousPage = () => {
        if (showFrom > MINIMUMOFFSET) {
            setShowFrom(showFrom - resultsPerPage);
            setShowTo(showTo - resultsPerPage);
            loadPokemon(showFrom - resultsPerPage, showTo - resultsPerPage);
        }
    };

    const loadPokemon = (searchFrom: number, searchTo: number) => {
        setPokemons(results.slice(searchFrom, searchTo));
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
