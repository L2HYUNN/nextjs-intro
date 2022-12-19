import { useEffect, useState } from "react";
import Seo from "../components/Seo";

interface IMoive {
  id: number;
  original_title: string;
}

const API_KEY = "282cefc578d0328fcefbb51eac5ae091";

export default function Home() {
  const [movies, setMovies] = useState<IMoive[]>([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
      {!movies && <h4>Loading...</h4>}
      {movies.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
