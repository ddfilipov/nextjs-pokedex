import { PokeTypes } from "../types/types";

export interface ITypeColors {
    backgroundColor: string;
}

export const typeStyles: Record<PokeTypes, ITypeColors> = {
    normal: { backgroundColor: "--normal-background" },
    fire: { backgroundColor: "--fire-background" },
    water: { backgroundColor: "--water-background" },
    electric: { backgroundColor: "--electric-background" },
    grass: { backgroundColor: "--grass-background" },
    ice: { backgroundColor: "--ice-background" },
    fighting: { backgroundColor: "--fighting-background" },
    poison: { backgroundColor: "--poison-background" },
    ground: { backgroundColor: "--ground-background" },
    flying: { backgroundColor: "--flying-background" },
    psychic: { backgroundColor: "--psychic-background" },
    bug: { backgroundColor: "--bug-background" },
    rock: { backgroundColor: "--rock-background" },
    ghost: { backgroundColor: "--ghost-background" },
    dragon: { backgroundColor: "--dragon-background" },
    dark: { backgroundColor: "--dark-background" },
    steel: { backgroundColor: "--steel-background" },
    fairy: { backgroundColor: "--fairy-background" },
};

export const statStyles: any = {
    hp: "#FF0000",
    attack: "#F08030",
    defense: "#F8D030",
    "special-attack": "#6890F0",
    "special-defense": "#78C850",
    speed: "#A13959",
};
