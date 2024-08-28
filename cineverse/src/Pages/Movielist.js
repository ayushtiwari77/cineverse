import { Card } from "../Components";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";
export const Movielist = ({ apiPath, title }) => {
  useTitle(title);
  const movies = useFetch(apiPath);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie) => {
            return <Card key={movie.id} movie={movie}></Card>;
          })}
        </div>
      </section>
    </main>
  );
};
