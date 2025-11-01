import GenreFilter from "../components/GenreFilter";
import { WatchListContext } from "../context/WatchListContext";
import { useContext, useState } from "react";
import Moviecard from "../components/Moviecard";

const Watchlist = () => {
    const { watchlist, genrelist } = useContext(WatchListContext);
    const [search, setsearch] = useState("");

    const [selectgenre, setselectgenre] = useState("");
    const filteredmovies = watchlist.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase())).filter((movie) => {
        return !selectgenre || movie.genre_ids.includes(Number(selectgenre));
    });

 
    return (
      <div className="p-4 mt-12 md:mt-14">
        <input
          type="text"
          placeholder="Search Your Movies"
          className="p-4 w-3/4 md:w-1/2 border rounded-md border-blue-500 focus:outline-none bg-blue-100 opacity-60 fixed top-12 md:top-14 left-1/2 transform -translate-x-1/2 z-10"
          onChange={(e) => setsearch(e.target.value)}
        />

        <div className="mt-16 flex justify-center text-2xl font-thin">
          <GenreFilter genrelist={genrelist} setselectgenre={setselectgenre} />
        </div>

        <div className="moviecontainer grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 justify-center items-center w-fit mx-auto">
          {filteredmovies.map((movie) => {
            return <Moviecard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    );
}
 
export default Watchlist;