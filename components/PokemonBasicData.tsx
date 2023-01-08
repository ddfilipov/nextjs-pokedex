import axios from "axios";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import imageLoader from "../imageLoader";

interface PokemonBasicDataProps {
    id: string;
}

export const PokemonBasicData: FC<PokemonBasicDataProps> = ({ id }) => {
    const [pokeData, setPokeData] = useState<any>({});
    const getPokemonData = async (id: string) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(res.data);
        setPokeData(res.data);
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
export default PokemonBasicData;
