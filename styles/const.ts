import { PokeTypes } from "../types/types";

export interface ITypeColors {
    backgroundColor: string;
    fontColor: string;
}

const typeStyles: Record<PokeTypes, ITypeColors> = {
    normal: { backgroundColor: "--normal-background", fontColor: "--normal-font" },
    fire: { backgroundColor: "--fire-background", fontColor: "--fire-font" },
    water: { backgroundColor: "--water-background", fontColor: "--water-font" },
    electric: { backgroundColor: "--electric-background", fontColor: "--electric-font" },
    grass: { backgroundColor: "--grass-background", fontColor: "--grass-font" },
    ice: { backgroundColor: "--ice-background", fontColor: "--ice-font" },
    fighting: { backgroundColor: "--fighting-background", fontColor: "--fighting-font" },
    poison: { backgroundColor: "--poison-background", fontColor: "--poison-font" },
    ground: { backgroundColor: "--ground-background", fontColor: "--ground-font" },
    flying: { backgroundColor: "--flying-background", fontColor: "--flying-font" },
    psychic: { backgroundColor: "--psychic-background", fontColor: "--psychic-font" },
    bug: { backgroundColor: "--bug-background", fontColor: "--bug-font" },
    rock: { backgroundColor: "--rock-background", fontColor: "--rock-font" },
    ghost: { backgroundColor: "--ghost-background", fontColor: "--ghost-font" },
    dragon: { backgroundColor: "--dragon-background", fontColor: "--dragon-font" },
    dark: { backgroundColor: "--dark-background", fontColor: "--dark-font" },
    steel: { backgroundColor: "--steel-background", fontColor: "--steel-font" },
    fairy: { backgroundColor: "--fairy-background", fontColor: "--fairy-font" },
};
