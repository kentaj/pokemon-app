import { useQuery } from "@tanstack/react-query";
import { fetchGen1List, type PokemonListItem } from "../api/poke";
import PokemonCard from "../components/PokemonCard";
import Spinner from "../components/Spinner";
import ErrorBox from "../components/ErrorBox";

export default function ListPage() {
  const { data, isLoading, isError } = useQuery<PokemonListItem[]>({
    queryKey: ["gen1-list"],
    queryFn: fetchGen1List,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Spinner />;
  if (isError) return <ErrorBox message="Couldnt load the page" />;

  return (
    <div className="max-w-5xl mx-auto p-4 bg-gradient-to-br min-h-screen">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {data?.map((p) => (
          <PokemonCard key={p.name} pokemon={p} />
        ))}
      </div>
    </div>
  );
}
