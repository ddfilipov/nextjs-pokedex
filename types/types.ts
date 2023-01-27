export interface IGetPokemon {
    results: Pokemon[];
}

export interface Pokemon {
    id: number;
    name: string;
}

export interface IPokemonBasicData {
    name: string;
    src: string;
    id: number;
    types: PokeTypes[];
}

export type PokeTypes =
    | "normal"
    | "fire"
    | "water"
    | "electric"
    | "grass"
    | "ice"
    | "fighting"
    | "poison"
    | "ground"
    | "flying"
    | "psychic"
    | "bug"
    | "rock"
    | "ghost"
    | "dragon"
    | "dark"
    | "steel"
    | "fairy";
