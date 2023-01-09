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
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: 20px auto;
    justify-items: center;
    border: 1px solid black;
    padding: 5px;
`;

export const PokemonBasicData: FC<PokemonBasicDataProps> = ({ id }) => {
    const [pokeData, setPokeData] = useState<IPokemonBasicData>();
    const getPokemonData = async (id: string) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(res.data);
        setPokeData({ name: res.data.name, src: res.data.sprites.front_default, id: res.data.id });
    };

    useEffect(() => {
        getPokemonData(id);
    }, []);

    return (
        <Wrapper>
            <h2>{`#${pokeData?.id} ${pokeData?.name}`}</h2>
            <Image
                src={pokeData?.src as string}
                alt={pokeData?.name as string}
                width={200}
                height={200}
                loader={imageLoader}
                unoptimized
                priority
            />
        </Wrapper>
    );
    {
    }
};
export default PokemonBasicData;
