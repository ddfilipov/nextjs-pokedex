import Image from "next/image";
import { FC } from "react";
import imageLoader from "../imageLoader";
import GlobalStyle from "../styles/GlobalStyle";
import { IPokemonBasicData } from "../types/types";

export const PokemonData: FC<IPokemonBasicData> = ({ name, id, types, src }) => {
    return (
        <div>
            <h1>POKEMON NAME: {name}</h1>
            <h1>POKEMON id: {id}</h1>
            <h1>POKEMON types: {types}</h1>
            <Image src={src} alt={name} width={200} height={200} loader={imageLoader} unoptimized />
            <p>POKEMON DATA</p>
        </div>
    );
};

export default PokemonData;
