import axios from "axios";
import { IGetPokemon } from "../interfaces";


const PokemonList = ({ results }: IGetPokemon) => {
    return (
        <>
            <h1>Pokédex</h1>
            {results.map((pokemon) => {
                return <li>{pokemon.name} </li>;
            })}
        </>
    );
};

export default PokemonList;
