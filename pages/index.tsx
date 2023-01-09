import { Inter } from "@next/font/google";
import { GetStaticProps } from "next";
import axios from "axios";
import { IGetPokemon } from "../interfaces";
import { PokemonBasicData } from "../components/PokemonBasicData";
import styled from "styled-components";

const inter = Inter({ subsets: ["latin"] });

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1200px;
    gap: 5px;
    padding: 5px;
`;

export default function Home({ results }: IGetPokemon) {
    return (
        <MainContainer>
            <h1>Pokédex</h1>
            <Wrapper>
                {results.map((pokemon) => {
                    return <PokemonBasicData id={pokemon.name} key={pokemon.name} />;
                })}
            </Wrapper>
        </MainContainer>
    );
}

export const getStaticProps: GetStaticProps = async (context) => {
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const { results }: IGetPokemon = await res.data;

    return { props: { results: results } };
};
