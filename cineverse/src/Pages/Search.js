import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { Card } from "../Components";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();

  const queryTerm = searchParams.get("q");
  const movies = useFetch(apiPath, queryTerm);
  useTitle(`search results for ${queryTerm}`);
  return (
    <main>
      <section className="py-7 ">
        <p className="text-3xl text-gray-700 dark:text-white">
          {movies.length
            ? `results for ${queryTerm}`
            : `no results found for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap">
          {" "}
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie}></Card>;
          })}
        </div>
      </section>
    </main>
  );
};
