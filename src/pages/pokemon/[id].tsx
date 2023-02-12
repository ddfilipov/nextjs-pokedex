import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { baseUrl } from "..";
import PokemonData from "../../components/PokemonData";
import { IGetPokemon, IPokemonBasicData, IPokemonExtendedData } from "../../types/types";

export const Pokemon = ({ name, id, types, src, moves, stats }: IPokemonExtendedData) => {
    return <PokemonData name={name} id={id} types={types} src={src} moves={moves} stats={stats} />;
};
export default Pokemon;

export const getStaticPaths: GetStaticPaths = async () => {
    // const res = await axios.get(baseUrl); // just the first 20 pokemon
    const res = await axios.get(`${baseUrl}?offset=0&limit=151`);
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
    const res = await axios.get(baseUrl + "/" + params?.id);

    console.log("res.data.stats:", res.data.stats);
    const types = await res.data.types.map((type: any) => {
        return type.type.name;
    });

    const { name, id }: IPokemonBasicData = await res.data;

    return { props: { name, id, types, src: res.data.sprites.front_default, moves: res.data.moves, stats: res.data.stats } };
};
