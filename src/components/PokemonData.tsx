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
const MovesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 1 / 2 / 3;
    border: 1px solid white;
    width: auto;
    height: 500px;
    padding: 10px;
`;
// TODO html
// <div class="wrapper">
// <div class="clase1">
//   <div class="atk"></div> <!--atk: 85 -->
//   <div class="def"></div> <!--def: 50 -->
//   <div class="spe"></div> <!--spe: 250 -->
// </div>
// </div>
//TODO css
// .wrapper{
//     width: 1000px;
//     border: 1px solid black;
//   }
//   .clase1{
//     border: 1px solid black;
//     width: auto;
//   /*   height: 50px; */
//   }

//   .atk{
//     background-color: green;
//     width: calc((250/100)*85px);
//   /*   width: calc(10px*2); */
//     height: 25px;
//   }
//   .def{
//     background-color: blue;
//     width: calc(50*100/250);
//     width: calc((250/100)*50px);
//     height: 25px;
//   }
//   .spe{
//     background-color: red;
//     width: calc(50*100/250);
//     width: calc((250/100)*250px);
//     height: 25px;
//   }

const StatBar = styled.div`
    display: flex;
    border: 1px solid red;
`;

export const PokemonData: FC<IPokemonExtendedData> = ({ name, id, types, src, moves, stats, stats2 }) => {
    const router = useRouter();

    return (
        <>
            <CustomButton type="button" onClick={() => router.back()}>
                BACK
            </CustomButton>
            <Wrapper>
                <InfoWrapper>
                    <h1>
                        #{id} {capitalizeFirstLetter(name)}
                    </h1>
                    <TypeContainer types={types} />
                    {Object.entries(stats2).map(([name, value]) => (
                        <>
                            <div key={name}>
                                <CustomText text={name} />
                                {": "}
                                <CustomText text={value.toString()} />
                            </div>
                            <StatBar />
                        </>
                    ))}
                </InfoWrapper>
                <PictureWrapper>
                    <Image src={src} alt={name} width={200} height={200} loader={imageLoader} unoptimized />{" "}
                </PictureWrapper>
                <MovesWrapper>
                    <MoveList moves={moves} />
                </MovesWrapper>
            </Wrapper>
        </>
    );
};

export default PokemonData;
