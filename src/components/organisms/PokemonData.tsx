import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import imageLoader from "../../imageLoader";
import { CustomButton } from "../../styles/GlobalStyle";
import { IPokemonExtendedData } from "../../types/types";
import { capitalizeFirstLetter } from "../../utils/funcs";
import MoveList from "./MoveList";
import TypeContainer from "../atoms/TypeContainer";
import CustomText from "../atoms/CustomText";
import { statStyles } from "../../styles/const";

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

interface ISimplifiedMoves {
    moveName: string;
    lvlLearnedAt: number;
    learnMethod: string;
}

export const PokemonData: FC<IPokemonExtendedData> = ({
    name,
    id,
    types,
    src,
    moves,
    stats,
    stats2,
    abilities,
    height,
    weight,
}) => {
    const router = useRouter();

    const [lvlUpMoves, setLvlUpMoves] = useState<ISimplifiedMoves[]>([]);
    const [machineMoves, setMachineMoves] = useState<ISimplifiedMoves[]>([]);

    const getAbilities = () => {
        const result = abilities.map((element) => element.ability.name).join(", ");
        return <div style={{ textTransform: "capitalize" }}>Abilities: {result}</div>;
    };
    useEffect(() => {
        // is this gonna be the one??????
        const newMoves = moves
            .map((element) => {
                return {
                    moveName: element.move.name,
                    version_group_details: element.version_group_details.filter(
                        (group) => group.version_group.name === "red-blue"
                    ),
                };
            })
            .filter((element) => element.version_group_details.length > 0)
            .map((elm) => {
                return {
                    moveName: elm.moveName,
                    lvlLearnedAt: elm.version_group_details[0].level_learned_at,
                    learnMethod: elm.version_group_details[0].move_learn_method.name,
                };
            })
            .sort((a, b) => a.lvlLearnedAt - b.lvlLearnedAt);
        setLvlUpMoves(newMoves.filter((elm) => elm.learnMethod === "level-up"));
        setMachineMoves(newMoves.filter((elm) => elm.learnMethod === "machine"));
    }, []);

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
                        {getAbilities()}
                        <div>Height: {height}m</div>
                        <div>Weight: {weight}kg</div>
                    </div>
                    <div>
                        <h3>STATS</h3>
                        {Object.entries(stats2).map(([name, value]) => (
                            <div key={name}>
                                <div key={name}>
                                    <CustomText text={name} />
                                    {": "}
                                    <CustomText text={value.toString()} />
                                </div>
                                <StatBar statValue={value} statName={statStyles[name.toString()]} />
                            </div>
                        ))}
                    </div>
                </InfoWrapper2>
                <PictureWrapper>
                    <Image src={src} alt={name} width={200} height={200} loader={imageLoader} unoptimized />{" "}
                </PictureWrapper>
                <MovesWrapper>
                    <MoveList movesList={lvlUpMoves} />
                    <MoveList movesList={machineMoves} />
                </MovesWrapper>
            </Wrapper>
        </>
    );
};

export default PokemonData;
