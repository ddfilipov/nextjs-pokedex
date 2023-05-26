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

export interface IPokemonStats {
    stat: NameApiResource;
    base_stat: number;
}

export interface IPokemonExtendedData extends IPokemonBasicData {
    stats: IPokemonStats;
    moves: MoveGroup[];
    stats2: { [k: string]: number };
    abilities: PokemonAbility[];
    height: number; // in dm
    weight: number; // in hg
}

export interface IStatsTest {}

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

export type PokemonVersionGroups =
    | "red-blue"
    | "yellow"
    | "gold-silver"
    | "crystal"
    | "ruby-sapphire"
    | "emerald"
    | "firered-leafgreen"
    | "diamond-pearl"
    | "platinum"
    | "heartgold-soulsilver"
    | "black-white"
    | "colosseum"
    | "xd"
    | "black-2-white-2"
    | "x-y"
    | "omega-ruby-alpha-sapphire"
    | "sun-moon"
    | "ultra-sun-ultra-moon"
    | "lets-go-pikachu-lets-go-eevee"
    | "sword-shield";

export const defaultGameVersion: PokemonVersionGroups = "firered-leafgreen";

export interface MoveGroup {
    move: NameApiResource;
    version_group_details: VersionGroupDetail[];
}
export interface VersionGroupDetail {
    level_learned_at: number;
    move_learn_method: NameApiResource;
    version_group: NameApiResource;
}

export interface PokemonAbility {
    is_hidden: boolean;
    slot: number;
    ability: NameApiResource;
}

export interface ISimplifiedMoves {
    moveName: string;
    lvlLearnedAt: number;
    learnMethod: string;
}
