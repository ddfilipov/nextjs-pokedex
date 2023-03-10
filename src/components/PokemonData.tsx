import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";
import styled from "styled-components";
import imageLoader from "../imageLoader";
import { CustomButton } from "../styles/GlobalStyle";
import { IPokemonExtendedData } from "../types/types";
import { capitalizeFirstLetter } from "../utils/funcs";
import MoveList from "./MoveList";
import TypeContainer from "./atoms/TypeContainer";
import CustomText from "./atoms/CustomText";
import { statStyles } from "../styles/const";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    grid-template-rows: auto auto;
    gap: 10px;
    max-width: 1200px;
    border: 1px solid white;
    padding: 10px;
    background-color: var(--dark-color);
    color: white;
    min-width: 1200px;
`;
const PictureWrapper = styled.div`
    border: 1px solid white;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid white;
    width: auto;
    padding: 10px;
`;

const InfoWrapper2 = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid white;
    width: auto;
    padding: 10px;
`;
const MovesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 1 / 2 / 3;
    border: 1px solid white;
    width: auto;
    height: 500px;
    padding: 10px;
`;

const StatBar = styled.div<{ statValue: number; statName: any }>`
    display: flex;
    border: 1px solid;
    border-color: ${(props) => props.statName};
    width: calc((${(props) => props.statValue} / 255) * 100%);
`;

export const PokemonData: FC<IPokemonExtendedData> = ({ name, id, types, src, moves, stats, stats2 }) => {
    const router = useRouter();

    return (
        <>
            <CustomButton type="button" onClick={() => router.back()}>
                BACK
            </CustomButton>
            <Wrapper>
                <InfoWrapper2>
                    <div>
                        <h1>
                            #{id} {capitalizeFirstLetter(name)}
                        </h1>
                        <TypeContainer types={types} />
                    </div>
                    <div>
                        <h3>STATS</h3>
                        {Object.entries(stats2).map(([name, value]) => (
                            <>
                                <div key={name}>
                                    <CustomText text={name} />
                                    {": "}
                                    <CustomText text={value.toString()} />
                                </div>
                                <StatBar statValue={value} statName={statStyles[name.toString()]} />
                            </>
                        ))}
                    </div>
                </InfoWrapper2>
                <PictureWrapper>
                    <Image src={src} alt={name} width={200} height={200} loader={imageLoader} unoptimized />{" "}
                </PictureWrapper>
                <MovesWrapper>
                    <MoveList movesList={moves} />
                </MovesWrapper>
            </Wrapper>
        </>
    );
};

export default PokemonData;
