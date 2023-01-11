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
    grid-template-rows: 20px auto 20px;
    justify-items: center;
    border: 1px solid black;
    padding: 5px;
`;

const TypeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    border: 1px solid blue;
    width: 100%;
`;

export const PokemonBasicData: FC<PokemonBasicDataProps> = ({ id }) => {
    const [pokeData, setPokeData] = useState<IPokemonBasicData>();
    const getPokemonData = async (id: string) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(res.data);
        const types = await res.data.types.map((type: any) => {
            return type.type.name;
        });
        console.log("types: ", types);
        setPokeData({ name: res.data.name, src: res.data.sprites.front_default, id: res.data.id, types: types });
    };

    const capitalizeFirstLetter = (word: string) => {};

    useEffect(() => {
        getPokemonData(id);
    }, []);

    return (
        <Wrapper>
            <h2>{`#${pokeData?.id} ${
                pokeData && pokeData?.name.substring(0, 1).toUpperCase() + pokeData?.name.slice(1)
            }`}</h2>
            <Image
                src={pokeData?.src as string}
                alt={pokeData?.name as string}
                width={200}
                height={200}
                loader={imageLoader}
                unoptimized
                priority
            />
            {/* <div>{pokeData?.types.toString()}</div> */}
            <TypeContainer>
                {pokeData?.types.map((type) => {
                    return <span>{type}</span>;
                })}
            </TypeContainer>
        </Wrapper>
    );
    {
    }
};
export default PokemonBasicData;
