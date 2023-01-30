import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { baseUrl } from "..";
import imageLoader from "../../imageLoader";
import { IGetPokemon, IPokemonBasicData } from "../../types/types";

export const PokemonData = ({ name, id, types, src }: IPokemonBasicData) => {
    return (
        <div>
            <h1>POKEMON NAME: {name}</h1>
            <h1>POKEMON id: {id}</h1>
            <h1>POKEMON types: {types}</h1>
                            <Image
                                src={src}
                                alt={name}
                                width={200}
                                height={200}
                                loader={imageLoader}
                                unoptimized
                            />
            <p>POKEMON DATA</p>
        </div>
    );
};
export default PokemonData;

export const getStaticPaths: GetStaticPaths = async () => {
    const res = await axios.get(baseUrl);
    const { results }: IGetPokemon = await res.data;

    const pokemons = results.map((pokemon) => {
        return { params: { id: pokemon.name } };
    });

    return {
        paths: pokemons,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    console.log("checking params.id:", params?.id);
    const res = await axios.get(baseUrl + "/" + params?.id);
    
    console.log("res.data.name:", res.data.name);
    console.log("res.data.src:", res.data.src);
    console.log("res.data.id:", res.data.id);
    console.log("res.data.types:", res.data.types);
    const types = await res.data.types.map((type: any) => {
        return type.type.name;
    });

    const { name, id }: IPokemonBasicData = await res.data;

    return { props: { name, id, types, src: res.data.sprites.front_default } };
};
