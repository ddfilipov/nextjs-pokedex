import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { baseUrl } from "..";
import { Pokemon, IGetPokemon, IPokemonBasicData } from "../../types/types";

export const PokemonData = ({ name, id }: IPokemonBasicData) => {
    return (
        <div>
            <h1>POKEMON NAME: {name}</h1>
            <h1>POKEMON id: {id}</h1>
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
    // console.log("a ver ese res.data:", res.data);

    const { name, id }: IPokemonBasicData = await res.data;

    return { props: { name, id} };
};
