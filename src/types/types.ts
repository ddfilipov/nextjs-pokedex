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

export interface IPokemonStat {
    id: number;
    name: string;
}

export interface IPokemonStats {
    stat: IPokemonStat;
    base_stat: number;
}

export interface IPokemonExtendedData extends IPokemonBasicData {
    stats: IPokemonStats;
    moves: PokemonMove[];
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

export interface PokemonMove {
    move: NameApiResource;
}

interface NameApiResource {
    name: string;
    url: string;
}
