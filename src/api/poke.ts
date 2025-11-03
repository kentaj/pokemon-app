export type PokemonType = {
  type: { name: string };
};

export type PokemonAbility = {
  ability: { name: string };
};

export type PokemonListItem = {
  name: string;
  url: string;
  types: PokemonType[];
};

export type PokemonDetail = {
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: PokemonType[];
  abilities: PokemonAbility[];
};

export const fetchGen1List = async (): Promise<PokemonListItem[]> => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();

  const detailed = await Promise.all(
    data.results.map(async (p: any) => {
      const detailRes = await fetch(p.url);
      const detail = await detailRes.json();
      return {
        name: p.name,
        url: p.url,
        types: detail.types,
      };
    })
  );

  return detailed;
};

export const fetchPokemonDetail = async (name: string): Promise<PokemonDetail> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();
  return {
    name: data.name,
    height: data.height,
    weight: data.weight,
    sprites: data.sprites,
    types: data.types,
    abilities: data.abilities,
  };
};
