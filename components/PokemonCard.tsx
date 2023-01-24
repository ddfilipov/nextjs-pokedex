import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import imageLoader from "../imageLoader";
import { typeStyles } from "../styles/const";
import { PokeTypes } from "../types/types";
import LoadingSpinner from "./LoadingSpinner";

interface PokemonCardProps {
    id: string;
}

interface IPokemonBasicData {
    name: string;
    src: string;
    id: number;
    types: PokeTypes[];
}

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: auto 25px;
    justify-items: center;
    border: 1px solid black;
    padding: 5px;
    min-height: 260px;
    min-width: 200px;
    place-content: center;
    background-color: #001015;
    color: #468847;
`;

interface ITypeStyles {
    backgroundColor: string;
    fontColor: string;
}

const TypeContainer = styled.div`
    display: flex;
    flex-direction: row;
    place-content: center;
    column-gap: 10px;
    width: 100%;
    align-items: center;
`;

const TypeSpan = styled.span<ITypeStyles>`
    background-color: ${(props) => `var(${props.backgroundColor})`};
    color: white;
    padding: 3px;
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

    const defaultPokeData: IPokemonBasicData = {
        name: "defaultName",
        src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
        id: 1,
        types: ["grass"],
    };
    const [pokeData, setPokeData] = useState<IPokemonBasicData>(defaultPokeData);

    const getPokemonData = async (id: string) => {
        setIsLoading(true);
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const types = await res.data.types.map((type: any) => {
            return type.type.name;
        });
        setPokeData({ name: res.data.name, src: res.data.sprites.front_default, id: res.data.id, types: types });
        setIsLoading(false);
    };

    const capitalizeFirstLetter = (word: string | undefined) => {
        return word ? word.substring(0, 1).toUpperCase() + word.slice(1) : null;
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
                    <Link href={`${pokeData.id}`} key={pokeData.id}>
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
                    <TypeContainer>
                        {pokeData?.types.map((type) => {
                            return (
                                <TypeSpan key={type} backgroundColor={typeStyles[type].backgroundColor}>
                                    {capitalizeFirstLetter(type)}
                                </TypeSpan>
                            );
                        })}
                    </TypeContainer>
                </>
            )}
        </Wrapper>
    );
};
export default PokemonCard;
