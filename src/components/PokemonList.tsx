import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { CustomButton } from "../styles/GlobalStyle";
import { IGetPokemon, Pokemon } from "../types/types";
import CustomInput from "./atoms/CustomInput";
import PokemonCard from "./PokemonCard";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    flex-wrap: wrap;
    place-content: center;
    gap: 20px;
`;

const ListWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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

const SearchBarWrapper = styled.div`
    display: flex;
    flex-basis: 100%;
    place-content: center;
    input {
        width: 80%;
    }
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

    const [filteredWord, setFilteredWord] = useState<string>("");

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
    const handleChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
        setFilteredWord(event.target.value);
    };
    
    useEffect(() => {
        console.log("lemme see that filteredWord:", filteredWord);
    }, [filteredWord]);

    return (
        <Wrapper>
            <TitleStyled>NextjsDex</TitleStyled>
            <SearchBarWrapper>
                <CustomInput placeholder="Search pokémon..." inputType="search" onChange={handleChangeFilter} />
            </SearchBarWrapper>
            <ListWrapper>
                {pokemons.map((pokemon) => {
                    return <PokemonCard id={pokemon.name} key={pokemon.name} />;
                })}
            </ListWrapper>
            <ButtonContainer>
                <CustomButton onClick={previousPage}>PREVIOUS PAGE</CustomButton>
                <CustomButton onClick={nextPage}>NEXT PAGE</CustomButton>
            </ButtonContainer>
        </Wrapper>
    );
};
export default PokemonList;
