import { useContext, useState } from "react";
import GenreFilter from "../components/GenreFilter";
import Moviecard from "../components/Moviecard";
import { WatchListContext } from "../context/WatchListContext";

const Watchlist = () => {
  const { watchlist = [], genrelist = [] } = useContext(WatchListContext);

  const [search, setSearch] = useState("");
  const [selectGenre, setSelectGenre] = useState("");

  const filteredMovies = watchlist
    .filter((movie) =>
      movie.title?.toLowerCase().includes(search.toLowerCase())
    )
    .filter((movie) =>
      !selectGenre || movie.genre_ids?.includes(Number(selectGenre))
    );

  return (
    <div className="p-4 mt-12 md:mt-14">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search Your Movies"
        className="p-4 w-3/4 md:w-1/2 border rounded-md border-blue-500 focus:outline-none bg-blue-100 fixed top-12 md:top-14 left-1/2 transform -translate-x-1/2 z-10"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Genre Filter */}
      <div className="mt-20 flex justify-center text-2xl font-thin">
        <GenreFilter
          genrelist={genrelist}
          setselectgenre={setSelectGenre}
        />
      </div>

      {/* Movies */}
      <div className="moviecontainer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 mx-auto">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <Moviecard key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No movies found
          </p>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
