export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  results: PokemonListItem[];
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: PokemonType[];
}

export const fetchGen1List = async (): Promise<PokemonListItem[]> => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0"
  );
  if (!res.ok) throw new Error("Failed to fetch Pokémon list");
  const data: PokemonListResponse = await res.json();
  return data.results;
};

export const fetchPokemonDetail = async (
  idOrName: string
): Promise<PokemonDetail> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
  if (!res.ok) throw new Error("Failed to fetch Pokémon detail");
  return res.json();
};
