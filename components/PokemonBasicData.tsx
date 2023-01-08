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
}

const Wrapper = styled.div`
    border: 1px solid black;
`;

export const PokemonBasicData: FC<PokemonBasicDataProps> = ({ id }) => {
    const [pokeData, setPokeData] = useState<IPokemonBasicData>();
    const getPokemonData = async (id: string) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(res.data);
        setPokeData({ name: res.data.name, src: res.data.sprites.front_default });
    };

    useEffect(() => {
        getPokemonData(id);
    }, []);

    return (
        <div>
            <h2>{pokeData?.name}</h2>
            <Image
                src={pokeData?.src as string}
                alt={pokeData?.name as string}
                width={200}
                height={200}
                loader={imageLoader}
                unoptimized
                priority
            />
        </div>
    );
};
export default PokemonBasicData;
