import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  fetchPokemonDetail,
  type PokemonDetail,
} from "../api/poke";
import Spinner from "../components/Spinner";
import ErrorBox from "../components/ErrorBox";

export default function DetailPage() {
  const { name } = useParams<{ name: string }>();

  const { data, isLoading, isError } = useQuery<PokemonDetail>({
    queryKey: ["pokemon", name],
    queryFn: () => fetchPokemonDetail(name!),
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Spinner />;
  if (isError || !data) return <ErrorBox message="Kunde inte ladda Pokémon." />;

  return (
    <div className="flex flex-col items-center mt-10">
      <img
        src={data.sprites.front_default}
        alt={data.name}
        className="w-32 h-32 mb-4"
      />
      <h1 className="text-3xl font-bold capitalize mb-2">{data.name}</h1>
      <p className="text-gray-600 mb-4">Height: {data.height}</p>
      <p className="text-gray-600 mb-4">Weight: {data.weight}</p>

      <div className="flex gap-2 flex-wrap justify-center">
        {data.types.map((t) => (
          <span
            key={t.type.name}
            className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm capitalize"
          >
            {t.type.name}
          </span>
        ))}
      </div>

      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        ← Tillbaka till listan
      </Link>
    </div>
  );
}
