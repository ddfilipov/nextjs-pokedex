import axios from "axios";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import imageLoader from "../imageLoader";

interface PokemonBasicDataProps {
    id: string;
}

interface IPokemonBasicData {
    name: string;
    src: string;
    id: number;
    types: string[];
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 25px auto 25px;
    justify-items: center;
    border: 1px solid black;
    padding: 5px;
`;

const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    place-content: center;
    column-gap: 10px;
    width: 100%;
    align-items: center;
`;

export const PokemonBasicData: FC<PokemonBasicDataProps> = ({ id }) => {
    const [pokeData, setPokeData] = useState<IPokemonBasicData>();
    const getPokemonData = async (id: string) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (id === "bulbasaur") {
            console.log("**** res.data:", res.data);
        }
        const types = await res.data.types.map((type: any) => {
            return type.type.name;
        });

        setPokeData({ name: res.data.name, src: res.data.sprites.front_default, id: res.data.id, types: types });
    };

    const capitalizeFirstLetter = (word: string | undefined) => {
        return word ? word.substring(0, 1).toUpperCase() + word.slice(1) : null;
    };

    useEffect(() => {
        getPokemonData(id);
    }, []);

    return (
        <Wrapper>
            <h2>{`#${pokeData?.id} ${capitalizeFirstLetter(pokeData?.name)}`}</h2>
            <Image
                src={pokeData && pokeData.src ? (pokeData.src) : ""}
                alt={pokeData && pokeData.name ? (pokeData.name) : ""}
                // src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"}
                // alt={""}
                width={200}
                height={200}
                loader={imageLoader}
                unoptimized
                priority
            />
            <TypeContainer>
                {pokeData?.types.map((type) => {
                    return <span key={type}>{capitalizeFirstLetter(type)}</span>;
                })}
            </TypeContainer>
        </Wrapper>
    );
    {
    }
};
export default PokemonBasicData;
