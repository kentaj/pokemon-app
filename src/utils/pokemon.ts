import type { PokemonDetail } from "../api/poke";

export function getStat(stats: PokemonDetail['stats'], name: string): number {
  return stats.find(s => s.stat.name === name)?.base_stat ?? 0;
}

export function getPokemonImageUrl(name: string): string {
  const id = name;
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}