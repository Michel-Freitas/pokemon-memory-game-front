export interface IEggGroup {
    name: string
    url:string
    checked: boolean
}

export interface IPokemon {
    name: string
    imageUrl: string
    checked: boolean
}

export interface IPokemonMemoryBoard extends IPokemon {
    id: number
}