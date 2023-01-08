import axios from "axios";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import imageLoader from "../imageLoader";
import { IGetPokemon } from "../interfaces";

const PokemonList = ({ results }: IGetPokemon) => {
    return (
        <>
            <h1>Pokédex</h1>
            {results.map((pokemon) => {
                // getPokemonData(pokemon.name);
                // return <li key={pokemon.name}>{pokemon.name} </li>;
                return <PokemonData id={pokemon.name} />;
            })}
        </>
    );
};

interface PokemonDataProps {
    id: string;
}

export const PokemonData: FC<PokemonDataProps> = ({ id }) => {
    const [pokeData, setPokeData] = useState<any>();
    const getPokemonData = async (id: string) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(res.data);
        await setPokeData(res.data);
    };

    useEffect(() => {
        getPokemonData(id);
    }, []);

    return (
        <div>
            <h2>{pokeData.name}</h2>
            <Image
                src={pokeData.sprites.front_default}
                alt={pokeData.name}
                width={200}
                height={200}
                loader={imageLoader}
                unoptimized
            />
        </div>
    );
};
export default PokemonList;
