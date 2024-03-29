import { ChangeEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { CustomButton } from "../../styles/GlobalStyle";
import { IGetPokemon, Pokemon } from "../../types/types";
import CustomInput from "../atoms/CustomInput";
import PokemonCard from "../molecules/PokemonCard";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    min-height: 1000px;
    flex-wrap: wrap;
    place-content: center;
    align-content: start;
    gap: 20px;
    padding: 20px;
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
    place-content: center;
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
    position: static;
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
    const [allPokemon, setAllPokemon] = useState<Pokemon[]>(results);
    const [pokemons, setPokemons] = useState<Pokemon[]>(results.slice(showFrom, showTo));

    const [filteredWord, setFilteredWord] = useState<string>("");

    const nextPage = () => {
        // TODO: shouldn't let click next if there's no more pokemon on the next page
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
        setPokemons(allPokemon.slice(searchFrom, searchTo));
    };

    const handleChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
        const newFilteredWord = event.target.value;
        console.log("newFilteredWord:", newFilteredWord);
        setFilteredWord(newFilteredWord);
        const newPokemonList = results.filter((pokemon) => pokemon.name.includes(newFilteredWord));
        setAllPokemon(newPokemonList);
        console.log("show me the new pokemon list:", newPokemonList);
        filterCurrentPokemon(newPokemonList);
    };

    const filterCurrentPokemon = (newPokemonList: Pokemon[]) => {
        setShowFrom(0);
        setShowTo(20);
        setPokemons(newPokemonList.slice(0, 20));
    };

    useEffect(() => {
        console.log("lemme see how many pokemons:", pokemons.length);
        console.log("filteredWord:", filteredWord);
    }, [filteredWord]);

    return (
        <Wrapper>
            <TitleStyled>NextjsDex</TitleStyled>
            <SearchBarWrapper>
                <CustomInput placeholder="Search pokémon..." inputType="search" onChange={handleChangeFilter} />
            </SearchBarWrapper>
            {pokemons.length > 0 ? (
                <>
                    <ListWrapper>
                        {pokemons.map((pokemon) => {
                            return <PokemonCard id={pokemon.name} key={pokemon.name} />;
                        })}
                    </ListWrapper>
                    <ButtonContainer>
                        <CustomButton onClick={previousPage}>PREVIOUS PAGE</CustomButton>
                        <CustomButton onClick={nextPage}>NEXT PAGE</CustomButton>
                    </ButtonContainer>
                </>
            ) : (
                <p>No results found</p>
            )}
        </Wrapper>
    );
};
export default PokemonList;
