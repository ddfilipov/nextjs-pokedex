import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { baseUrl } from "..";
import PokemonData from "../../components/PokemonData";
import { IGetPokemon, IPokemonBasicData } from "../../types/types";

export const Pokemon = ({ name, id, types, src }: IPokemonBasicData) => {
    return <PokemonData name={name} id={id} types={types} src={src} />;
};
export default Pokemon;

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
