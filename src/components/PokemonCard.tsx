import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import imageLoader from "../imageLoader";
import { IPokemonBasicData, IPokemonExtendedData } from "../types/types";
import { capitalizeFirstLetter } from "../utils/funcs";
import LoadingSpinner from "./LoadingSpinner";
import TypeContainer from "./TypeContainer";

interface PokemonCardProps {
    id: string;
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto 35px;
    justify-items: center;
    padding: 10px;
    min-height: 260px;
    min-width: 200px;
    place-content: center;
    background-color: var(--dark-color);
    color: white;
    gap: 10px;
    border-radius: 10px;
`;

const TopCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    place-content: center;
    column-gap: 10px;
    width: 100%;
    align-items: center;
`;

export const PokemonCard: FC<PokemonCardProps> = ({ id }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const defaultPokeData: IPokemonExtendedData = {
        name: "defaultName",
        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        id: 1,
        types: ["grass"],
        // stats: { base_stat: 0, stat: { id: 0, name: "" } },
        moves: [{ move: { name: "" } }],
    };
    const [pokeData, setPokeData] = useState<IPokemonExtendedData>(defaultPokeData);

    const getPokemonData = async (id: string) => {
        setIsLoading(true);
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const types = await res.data.types.map((type: any) => {
            return type.type.name;
        });
        setPokeData({
            name: res.data.name,
            src: res.data.sprites.front_default,
            id: res.data.id,
            types: types,
            moves: res.data.moves,
        });
        setIsLoading(false);
    };

    useEffect(() => {
        getPokemonData(id);
    }, []);

    return (
        <Wrapper>
            {isLoading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <Link href={`pokemon/${pokeData.name}`} key={pokeData.id}>
                        <TopCard>
                            <h2>{`#${pokeData.id} ${capitalizeFirstLetter(pokeData.name)}`}</h2>
                            <Image
                                src={pokeData.src}
                                alt={pokeData.name}
                                width={200}
                                height={200}
                                loader={imageLoader}
                                unoptimized
                            />
                        </TopCard>
                    </Link>
                    <TypeContainer types={pokeData?.types} />
                </>
            )}
        </Wrapper>
    );
};
export default PokemonCard;
