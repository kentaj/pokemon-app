export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    front_default: string;
  };
  types: { type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  abilities: { ability: { name: string } }[];
}

const API_URL = "https://pokeapi.co/api/v2";

export async function fetchGen1List(): Promise<PokemonListItem[]> {
  const res = await fetch(`${API_URL}/pokemon?limit=151`);
  if (!res.ok) throw new Error("Failed to fetch pokemon list");
  const data = await res.json();
  return data.results;
}

export async function fetchPokemonDetail(name: string): Promise<PokemonDetail> {
  const res = await fetch(`${API_URL}/pokemon/${name}`);
  if (!res.ok) throw new Error("Failed to fetch pokemon detail");
  return res.json();
}